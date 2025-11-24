import React from 'react';
import { Wifi, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import Tooltip from './Tooltip';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center mb-4">
                <div className="bg-brand-600 p-1.5 rounded-lg mr-2">
                  <Wifi className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white font-heading">
                  স্পিডনেট<span className="text-brand-500">খুলনা</span>
                </span>
             </div>
             <p className="text-sm text-slate-400">
               আধুনিক বাড়ি এবং ব্যবসার জন্য নেক্সট-জেনারেশন ফাইবার ইন্টারনেট। খুলনা শহরে গর্বের সাথে সেবা প্রদান করছি।
             </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 font-heading">প্যাকেজ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition">SWIFT 20</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">TURBO 30</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">SUPER 50</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">কর্পোরেট</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 font-heading">সাপোর্ট</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition">হেল্প সেন্টার</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">স্ট্যাটাস চেক</a></li>
              <li><a href="#" className="hover:text-brand-400 transition">বিল পে</a></li>
              <li><a href="#speedtest" className="hover:text-brand-400 transition">স্পিড টেস্ট</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 font-heading">সোশ্যাল</h4>
            <div className="flex space-x-4 mb-4">
               <a href="#" className="hover:text-brand-400">
                   <Tooltip content="টুইটার">
                       <Twitter className="h-5 w-5" />
                   </Tooltip>
               </a>
               <a href="#" className="hover:text-brand-400">
                   <Tooltip content="ফেসবুক">
                       <Facebook className="h-5 w-5" />
                   </Tooltip>
               </a>
               <a href="#" className="hover:text-brand-400">
                   <Tooltip content="ইনস্টাগ্রাম">
                       <Instagram className="h-5 w-5" />
                   </Tooltip>
               </a>
               <a href="#" className="hover:text-brand-400">
                   <Tooltip content="লিংকডইন">
                       <Linkedin className="h-5 w-5" />
                   </Tooltip>
               </a>
            </div>
            <p className="text-xs text-slate-500">
              © ২০২৪ স্পিডনেট খুলনা। <br /> সর্বস্বত্ব সংরক্ষিত।
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;