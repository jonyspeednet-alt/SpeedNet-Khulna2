import React, { useState } from 'react';
import { Wifi, Menu, X } from 'lucide-react';
import Tooltip from './Tooltip';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'হোম', href: '#home' },
    { name: 'প্যাকেজ', href: '#plans' },
    { name: 'কভারেজ', href: '#coverage' },
    { name: 'কেন আমরা', href: '#features' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-brand-600 p-1.5 rounded-lg mr-2">
              <Tooltip content="স্পিডনেট হোম">
                <Wifi className="h-6 w-6 text-white" />
              </Tooltip>
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight text-slate-900">
              স্পিডনেট<span className="text-brand-600">খুলনা</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-brand-600 font-medium transition-colors duration-200 text-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
             <button className="text-slate-600 hover:text-brand-600 font-medium">লগ ইন</button>
             <a href="#plans" className="bg-brand-600 text-white px-5 py-2 rounded-full font-medium hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30">
               সংযোগ নিন
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              <Tooltip content={isOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Tooltip>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#plans" className="block w-full text-center mt-4 bg-brand-600 text-white px-5 py-3 rounded-lg font-bold" onClick={() => setIsOpen(false)}>
              কভারেজ চেক করুন
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;