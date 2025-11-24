import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import Tooltip from './Tooltip';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "নমস্কার! আমি অ্যাস্ট্রা, আপনার এআই অ্যাসিস্ট্যান্ট। আমি আপনাকে সঠিক ইন্টারনেট প্যাকেজ বেছে নিতে সাহায্য করতে পারি। আমি কি সাহায্য করতে পারি?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // Add user message
    const newUserMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      timestamp: new Date()
    };
    
    const updatedMessages = [...messages, newUserMsg];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
        // Format history for Gemini
        const history = updatedMessages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

        const responseText = await sendMessageToGemini(history, userText);

        const newAiMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: responseText,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newAiMsg]);
    } catch (error) {
        console.error("Chat Error", error);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 ${
            isOpen ? 'bg-slate-800 rotate-90' : 'bg-brand-600 hover:bg-brand-700 hover:scale-110'
          } h-16 w-16 text-white`}
        >
            <Tooltip content={isOpen ? "চ্যাট বন্ধ করুন" : "অ্যাস্ট্রা এআই"}>
                {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
            </Tooltip>
            {!isOpen && (
                <span className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
            )}
        </button>
      </div>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-28 right-6 w-full max-w-[360px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-4 flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg font-heading">অ্যাস্ট্রা এআই</h3>
            <p className="text-brand-100 text-xs">সবসময় অনলাইনে • যা খুশি জিজ্ঞাসা করুন</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-hide">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-brand-600 text-white rounded-br-none'
                    : 'bg-white text-slate-800 border border-slate-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
               <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center space-x-2">
                 <Loader2 className="h-4 w-4 animate-spin text-brand-600" />
                 <span className="text-xs text-slate-400">অ্যাস্ট্রা চিন্তা করছে...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <form onSubmit={handleSend} className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="আপনার প্রশ্ন লিখুন..."
              className="w-full pl-4 pr-12 py-3 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-slate-900 placeholder-slate-400"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-brand-600 text-white rounded-full hover:bg-brand-700 disabled:opacity-50 disabled:hover:bg-brand-600 transition-colors"
            >
              <Tooltip content="পাঠান">
                  <Send className="h-4 w-4" />
              </Tooltip>
            </button>
          </form>
          <div className="text-center mt-2">
             <span className="text-[10px] text-slate-400">পাওয়ার্ড বাই গুগল জেমিনি</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;