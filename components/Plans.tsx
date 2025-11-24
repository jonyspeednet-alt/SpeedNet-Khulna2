import React from 'react';
import { Check, ArrowRight, Zap, Facebook, Youtube, Server, FileInput } from 'lucide-react';
import { Plan } from '../types';

interface CustomPlan extends Plan {
  bonusFeatures: {
    youtube: string;
    bdix: string;
    facebook: string;
    ftp: string;
  }
}

const PLANS: CustomPlan[] = [
  {
    id: 'swift20',
    name: 'SWIFT 20',
    speed: '20 Mbps',
    price: 525,
    features: [],
    color: 'bg-slate-50',
    bonusFeatures: {
      youtube: '100 Mbps',
      bdix: '100 Mbps',
      facebook: '100 Mbps',
      ftp: '100 Mbps'
    }
  },
  {
    id: 'turbo30',
    name: 'TURBO 30',
    speed: '30 Mbps',
    price: 630,
    features: [],
    color: 'bg-slate-50',
    recommended: true,
    bonusFeatures: {
      youtube: '100 Mbps',
      bdix: '100 Mbps',
      facebook: '100 Mbps',
      ftp: '100 Mbps'
    }
  },
  {
    id: 'super50',
    name: 'SUPER 50',
    speed: '50 Mbps',
    price: 785,
    features: [],
    color: 'bg-slate-50',
    bonusFeatures: {
      youtube: '100 Mbps',
      bdix: '100 Mbps',
      facebook: '100 Mbps',
      ftp: '100 Mbps'
    }
  },
  {
    id: 'nextgen80',
    name: 'NEXTGEN 80',
    speed: '80 Mbps',
    price: 1050,
    features: [],
    color: 'bg-slate-50',
    bonusFeatures: {
      youtube: '100 Mbps',
      bdix: '100 Mbps',
      facebook: '100 Mbps',
      ftp: '100 Mbps'
    }
  },
  {
    id: 'hyper100',
    name: 'HYPER 100',
    speed: '100 Mbps',
    price: 1205,
    features: [],
    color: 'bg-slate-50',
    bonusFeatures: {
      youtube: '100 Mbps',
      bdix: '100 Mbps',
      facebook: '100 Mbps',
      ftp: '100 Mbps'
    }
  },
  {
    id: 'velocity150',
    name: 'VELOCITY 150',
    speed: '150 Mbps',
    price: 1730,
    features: [],
    color: 'bg-slate-50',
    bonusFeatures: {
      youtube: '100 Mbps',
      bdix: '100 Mbps',
      facebook: '100 Mbps',
      ftp: '100 Mbps'
    }
  },
];

const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-600 tracking-wide uppercase font-heading">আমাদের প্যাকেজ সমূহ</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-heading">
            খুলনার সেরা ইন্টারনেট প্যাকেজ
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            আপনার প্রয়োজন অনুযায়ী স্পিড বেছে নিন। সকল প্যাকেজ ভ্যাট সহ।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`group relative rounded-2xl p-6 flex flex-col border border-slate-200 transition-all duration-300 bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-brand-300 ${
                plan.recommended 
                  ? 'ring-2 ring-brand-500 shadow-xl transform md:-translate-y-2 hover:md:-translate-y-4' 
                  : 'hover:bg-slate-50'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-gradient-to-r from-brand-600 to-brand-500 text-white px-3 py-1 rounded-bl-xl rounded-tr-xl text-xs font-bold shadow-lg uppercase tracking-wider">
                    জনপ্রিয়
                  </span>
                </div>
              )}
              
              <div className="mb-6 border-b border-slate-100 pb-6 text-center">
                <h3 className="text-2xl font-extrabold text-slate-900 uppercase font-heading tracking-wide mb-2 group-hover:text-brand-600 transition-colors">{plan.name}</h3>
                
                <div className="flex items-baseline justify-center text-brand-700">
                  <span className="text-4xl font-bold mr-2">{plan.speed}</span>
                </div>

                <div className="mt-4 inline-block bg-slate-50 rounded-xl px-6 py-2 border border-slate-100 group-hover:bg-white group-hover:border-brand-200 transition-all">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-extrabold tracking-tight text-slate-900">{plan.price}</span>
                    <span className="ml-1 text-lg font-bold text-slate-500">টাকা</span>
                    <span className="text-sm text-slate-400 ml-1">/মাস</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">*(VAT included)</p>
                </div>
              </div>

              {/* Bonus Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-slate-50 p-2 rounded-lg text-center group-hover:bg-white group-hover:shadow-sm transition-all">
                    <div className="flex items-center justify-center text-red-600 mb-1">
                        <Youtube className="w-4 h-4 mr-1" />
                        <span className="text-xs font-bold">YouTube</span>
                    </div>
                    <span className="text-sm font-bold text-slate-800">{plan.bonusFeatures.youtube}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg text-center group-hover:bg-white group-hover:shadow-sm transition-all">
                    <div className="flex items-center justify-center text-green-600 mb-1">
                        <Server className="w-4 h-4 mr-1" />
                        <span className="text-xs font-bold">BDIX</span>
                    </div>
                    <span className="text-sm font-bold text-slate-800">{plan.bonusFeatures.bdix}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg text-center group-hover:bg-white group-hover:shadow-sm transition-all">
                    <div className="flex items-center justify-center text-blue-600 mb-1">
                        <Facebook className="w-4 h-4 mr-1" />
                        <span className="text-xs font-bold">FaceBook</span>
                    </div>
                    <span className="text-sm font-bold text-slate-800">{plan.bonusFeatures.facebook}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg text-center group-hover:bg-white group-hover:shadow-sm transition-all">
                    <div className="flex items-center justify-center text-purple-600 mb-1">
                        <FileInput className="w-4 h-4 mr-1" />
                        <span className="text-xs font-bold">FTP</span>
                    </div>
                    <span className="text-sm font-bold text-slate-800">{plan.bonusFeatures.ftp}</span>
                </div>
              </div>

              <div className="mt-auto">
                <button className={`w-full py-3 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
                    plan.recommended 
                    ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-500/30' 
                    : 'bg-slate-900 text-white hover:bg-brand-600 hover:shadow-lg'
                }`}>
                    সিলেক্ট করুন
                    <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;