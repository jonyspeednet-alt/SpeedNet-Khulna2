import React, { useState, useEffect } from 'react';
import { Activity, ArrowDown, ArrowUp, RefreshCw, Wifi } from 'lucide-react';
import Tooltip from './Tooltip';

const SpeedTest: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'ping' | 'download' | 'upload' | 'complete'>('idle');
  const [ping, setPing] = useState(0);
  const [download, setDownload] = useState(0);
  const [upload, setUpload] = useState(0);
  const [progress, setProgress] = useState(0);

  const startTest = () => {
    setStatus('ping');
    setPing(0);
    setDownload(0);
    setUpload(0);
    setProgress(0);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (status === 'ping') {
      // Phase 1: Ping Test (Rapid 0-100% progress)
      let p = 0;
      interval = setInterval(() => {
        p += 5;
        setProgress(p);
        // Scramble ping numbers slightly for effect
        setPing(Math.floor(Math.random() * 20) + 1);
        
        if (p >= 100) {
          clearInterval(interval);
          setPing(5); // Final realistic ping for Khulna local
          setProgress(0);
          setStatus('download');
        }
      }, 50);
    } 
    else if (status === 'download') {
      // Phase 2: Download Speed (Simulate ramp up)
      let speed = 0;
      let p = 0;
      interval = setInterval(() => {
        p += 1; // slower progress
        speed += Math.random() * 50 + 10;
        
        // Cap visual randomness
        if (speed > 120) speed = 120;
        
        setDownload(Math.floor(speed));
        setProgress(p);

        if (p >= 100) {
          clearInterval(interval);
          setDownload(100); // Final result
          setProgress(0);
          setStatus('upload');
        }
      }, 30);
    } 
    else if (status === 'upload') {
      // Phase 3: Upload Speed
      let speed = 0;
      let p = 0;
      interval = setInterval(() => {
        p += 1;
        speed += Math.random() * 50 + 10;
        
        if (speed > 120) speed = 120;

        setUpload(Math.floor(speed));
        setProgress(p);

        if (p >= 100) {
          clearInterval(interval);
          setUpload(95); // Final result
          setStatus('complete');
        }
      }, 30);
    }

    return () => clearInterval(interval);
  }, [status]);

  return (
    <section id="speedtest" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-extrabold sm:text-4xl mb-4 font-heading">
             আপনার স্পিড টেস্ট করুন
           </h2>
           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
             আপনার বর্তমান ইন্টারনেটের অবস্থা জানুন। স্পিডনেট খুলনার স্ট্যান্ডার্ডের সাথে তুলনা করুন।
             শুরু করতে নিচের বাটনে ক্লিক করুন।
           </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-lg rounded-3xl border border-slate-700 p-8 md:p-12 shadow-2xl">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              
              {/* Ping */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-800 rounded-2xl border border-slate-700/50">
                 <div className="flex items-center text-slate-400 mb-2">
                    <Tooltip content="নেটওয়ার্ক ল্যাটেন্সি">
                        <Activity className="w-5 h-5 mr-2" />
                    </Tooltip>
                    <span className="font-semibold uppercase tracking-wider text-xs">পিং (Ping)</span>
                 </div>
                 <div className="text-4xl font-mono font-bold text-white mb-1">
                    {ping}<span className="text-lg text-slate-500 ml-1">ms</span>
                 </div>
                 <div className={`h-1 w-full bg-slate-700 rounded-full mt-4 overflow-hidden ${status === 'ping' ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="h-full bg-yellow-400 transition-all duration-75" style={{ width: `${status === 'ping' ? progress : 100}%` }}></div>
                 </div>
              </div>

              {/* Download */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-800 rounded-2xl border border-slate-700/50">
                 <div className="flex items-center text-brand-400 mb-2">
                    <Tooltip content="ডাটা রিসিভ রেট">
                        <ArrowDown className="w-5 h-5 mr-2" />
                    </Tooltip>
                    <span className="font-semibold uppercase tracking-wider text-xs">ডাউনলোড</span>
                 </div>
                 <div className="text-4xl font-mono font-bold text-white mb-1">
                    {download}<span className="text-lg text-slate-500 ml-1">Mbps</span>
                 </div>
                 <div className={`h-1 w-full bg-slate-700 rounded-full mt-4 overflow-hidden ${status === 'download' ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="h-full bg-brand-500 transition-all duration-75" style={{ width: `${status === 'download' ? progress : 100}%` }}></div>
                 </div>
              </div>

              {/* Upload */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-800 rounded-2xl border border-slate-700/50">
                 <div className="flex items-center text-purple-400 mb-2">
                    <Tooltip content="ডাটা সেন্ড রেট">
                        <ArrowUp className="w-5 h-5 mr-2" />
                    </Tooltip>
                    <span className="font-semibold uppercase tracking-wider text-xs">আপলোড</span>
                 </div>
                 <div className="text-4xl font-mono font-bold text-white mb-1">
                    {upload}<span className="text-lg text-slate-500 ml-1">Mbps</span>
                 </div>
                 <div className={`h-1 w-full bg-slate-700 rounded-full mt-4 overflow-hidden ${status === 'upload' ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="h-full bg-purple-500 transition-all duration-75" style={{ width: `${status === 'upload' ? progress : 100}%` }}></div>
                 </div>
              </div>

           </div>

           {/* Central Action Area */}
           <div className="flex flex-col items-center justify-center">
              {status === 'idle' && (
                 <button 
                    onClick={startTest}
                    className="group relative inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-slate-700 bg-slate-800 hover:border-brand-500 hover:text-brand-400 text-white transition-all duration-300 shadow-lg hover:shadow-brand-500/25"
                 >
                    <span className="text-lg font-bold">শুরু করুন</span>
                    <span className="absolute inset-0 rounded-full border-4 border-brand-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></span>
                 </button>
              )}

              {(status === 'ping' || status === 'download' || status === 'upload') && (
                 <div className="relative w-32 h-32 flex items-center justify-center">
                    <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-brand-500 rounded-full border-t-transparent animate-spin"></div>
                    <Wifi className="w-10 h-10 text-brand-500 animate-pulse" />
                 </div>
              )}

              {status === 'complete' && (
                 <div className="text-center animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-white mb-2 font-heading">টেস্ট সম্পন্ন হয়েছে</h3>
                    <p className="text-slate-400 mb-6">
                        {download < 50 
                            ? "আপনার বর্তমান স্পিড কিছুটা কম। স্পিডনেট খুলনাতে আপগ্রেড করুন।" 
                            : "স্পিড ভালো! কিন্তু আমরা আপনাকে আরও দ্রুত স্পিড দিতে পারি।"}
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button 
                            onClick={startTest}
                            className="flex items-center px-6 py-3 rounded-full bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors"
                        >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            আবার করুন
                        </button>
                        <a 
                            href="#plans"
                            className="flex items-center px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors shadow-lg shadow-brand-600/30"
                        >
                            প্যাকেজ দেখুন
                        </a>
                    </div>
                 </div>
              )}
           </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedTest;