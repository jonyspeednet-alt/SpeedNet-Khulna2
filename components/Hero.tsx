import React from 'react';
import { Rocket, Zap, ShieldCheck } from 'lucide-react';
import Tooltip from './Tooltip';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-50">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }
      `}</style>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-100 opacity-50 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-accent-400 opacity-20 blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2 animate-pulse"></span>
              এখন খুলনায় সব জায়গায়
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight font-heading">
              স্পিডনেট <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">
                খুলনার সেরা ইন্টারনেট।
              </span>
            </h1>
            <p className="mt-4 text-xl text-slate-600 mb-10">
              শহরের দ্রুততম ইন্টারনেটের অভিজ্ঞতা নিন। আল্ট্রা-লো ল্যাটেন্সি, বিডিআইএক্স কানেক্টিভিটি এবং ২৪/৭ লোকাল সাপোর্ট। আপনার বাসা এবং ব্যবসার জন্য সবচেয়ে নির্ভরযোগ্য আইএসপি।
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#coverage" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-1">
                কভারেজ দেখুন
                <Tooltip content="চেক কভারেজ">
                    <Rocket className="ml-2 h-5 w-5" />
                </Tooltip>
              </a>
              <a href="#plans" className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-lg font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all hover:border-slate-300">
                প্যাকেজ দেখুন
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center mb-2">
                  <Tooltip content="হাই-স্পিড বিডিআইএক্স">
                    <Zap className="h-5 w-5 text-brand-600 mr-2" />
                  </Tooltip>
                  <h3 className="font-bold text-slate-900 font-heading">বিডিআইএক্স স্পিড</h3>
                </div>
                <p className="text-slate-500 text-sm text-center lg:text-left">১০০ এমবিপিএস+</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center mb-2">
                  <Tooltip content="সিকিউর কানেকশন">
                    <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
                  </Tooltip>
                  <h3 className="font-bold text-slate-900 font-heading">রিয়েল আইপি</h3>
                </div>
                <p className="text-slate-500 text-sm text-center lg:text-left">অনুরোধে পাওয়া যায়</p>
              </div>
               <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center mb-2">
                  <Tooltip content="গেমিং পারফরমেন্স">
                    <Rocket className="h-5 w-5 text-purple-600 mr-2" />
                  </Tooltip>
                  <h3 className="font-bold text-slate-900 font-heading">লো পিং</h3>
                </div>
                <p className="text-slate-500 text-sm text-center lg:text-left">গেমারদের জন্য সেরা</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:block animate-float">
             <div className="absolute inset-0 bg-brand-600 rounded-3xl transform rotate-6 opacity-20 blur-2xl transition-all duration-1000"></div>
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop" 
                  alt="Gamer using VR headset with high speed internet" 
                  className="w-full h-[500px] object-cover animate-subtle-zoom"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                   <p className="text-white font-semibold">খুলনার নতুন প্রজন্মকে শক্তি জোগাচ্ছে</p>
                </div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3 animate-bounce hidden md:flex">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                   <p className="text-xs text-slate-500 uppercase font-bold">নেটওয়ার্ক স্ট্যাটাস</p>
                   <p className="text-sm font-bold text-slate-900">খুলনা কোর: অনলাইন</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;