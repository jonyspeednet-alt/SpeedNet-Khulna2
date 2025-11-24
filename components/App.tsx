import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Coverage from './components/Coverage';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import SpeedTest from './components/SpeedTest';
import { Gamepad2, MonitorPlay, Briefcase, Zap, ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Plans />

        {/* NEW: Why Us / Benefits Grid Section */}
        <section className="py-16 bg-brand-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 font-heading">আমাদের বিশেষত্ব</h2>
                    <p className="mt-2 text-slate-600">কেন খুলনার হাজারো গ্রাহক আমাদের ওপর আস্থা রাখেন?</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-100 hover:shadow-md transition-all text-center group">
                        <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">নিরবচ্ছিন্ন সংযোগ</h3>
                        <p className="text-sm text-slate-500">ঝড়-বৃষ্টি বা লোডশেডিং, আমাদের ফাইবার নেটওয়ার্ক থাকে সর্বদা সচল।</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-100 hover:shadow-md transition-all text-center group">
                        <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <ShieldCheck className="w-7 h-7" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">নিরাপদ ইন্টারনেট</h3>
                        <p className="text-sm text-slate-500">অ্যাডভান্সড ফায়ারওয়াল এবং রিয়েল আইপি সুবিধা সহ সর্বোচ্চ নিরাপত্তা।</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-100 hover:shadow-md transition-all text-center group">
                        <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Clock className="w-7 h-7" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">দ্রুত সংযোগ</h3>
                        <p className="text-sm text-slate-500">অর্ডার কনফার্ম করার ২৪ ঘন্টার মধ্যে আপনার বাসায় সংযোগ চালু।</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-100 hover:shadow-md transition-all text-center group">
                        <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <ThumbsUp className="w-7 h-7" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">স্বচ্ছ বিলিং</h3>
                        <p className="text-sm text-slate-500">মাস শেষে কোনো বাড়তি চার্জ নেই। বিকাশ বা নগদে পেমেন্টের সুবিধা।</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Lifestyle Section */}
        <section className="py-20 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl font-heading">
                   প্রতিটি লাইফস্টাইলের জন্য তৈরি
                 </h2>
                 <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
                   আপনি গেমার হোন, ৪কে মুভি স্ট্রিমার হোন কিংবা ফ্রিল্যান্সার, আমাদের কাছে আছে আপনার জন্য সঠিক ব্যান্ডউইথ।
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Card 1 */}
                 <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" 
                      alt="Gaming Setup" 
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                       <div className="bg-brand-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                          <Gamepad2 className="text-white h-6 w-6" />
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-1 font-heading">হার্ডকোর গেমিং</h3>
                       <p className="text-slate-200 text-sm">লো পিং, কোনো প্যাকেট লস নেই, পিওর স্পিড।</p>
                    </div>
                 </div>

                 {/* Card 2 */}
                 <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800" 
                      alt="Family Streaming" 
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                       <div className="bg-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                          <MonitorPlay className="text-white h-6 w-6" />
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-1 font-heading">৪কে স্ট্রিমিং</h3>
                       <p className="text-slate-200 text-sm">বাফার-ফ্রি মুভি এবং বিনোদন সম্পূর্ণ পরিবারের জন্য।</p>
                    </div>
                 </div>

                 {/* Card 3 */}
                 <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&q=80&w=800" 
                      alt="Work from Home" 
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                       <div className="bg-green-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                          <Briefcase className="text-white h-6 w-6" />
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-1 font-heading">ফ্রিল্যান্সিং ও অফিস</h3>
                       <p className="text-slate-200 text-sm">নির্ভরযোগ্য ভিডিও কল এবং দ্রুত ফাইল আপলোড।</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Features Split Section */}
        <section id="features" className="py-20 bg-slate-50 border-t border-slate-200">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="mb-10 lg:mb-0 order-2 lg:order-1">
                   <div className="inline-block bg-brand-100 text-brand-700 font-semibold px-3 py-1 rounded-full text-xs mb-4 uppercase tracking-wider">
                     নেক্সট-জেন প্রযুক্তি
                   </div>
                   <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6 font-heading">
                     কেন স্পিডনেট খুলনা বেছে নেবেন?
                   </h2>
                   <div className="space-y-6">
                      <div className="flex">
                         <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-brand-600 text-white font-bold text-xl">১</div>
                         <div className="ml-6">
                            <h3 className="text-lg font-bold text-slate-900 font-heading">ফাইবার অপটিক সরাসরি আপনার ঘরে</h3>
                            <p className="mt-2 text-slate-600">আমরা উন্নত ফাইবার অপটিক প্রযুক্তি ব্যবহার করে খুলনার প্রতিটি ঘরে নিরবচ্ছিন্ন ইন্টারনেট সংযোগ নিশ্চিত করি।</p>
                         </div>
                      </div>
                      <div className="flex">
                         <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-brand-600 text-white font-bold text-xl">২</div>
                         <div className="ml-6">
                            <h3 className="text-lg font-bold text-slate-900 font-heading">সমান আপলোড ও ডাউনলোড স্পিড</h3>
                            <p className="mt-2 text-slate-600">ডাউনলোডের মতোই দ্রুত আপলোড স্পিড। ফ্রিল্যান্সার, কন্টেন্ট ক্রিয়েটর এবং ইউটিউবারদের জন্য আদর্শ।</p>
                         </div>
                      </div>
                      <div className="flex">
                         <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-brand-600 text-white font-bold text-xl">৩</div>
                         <div className="ml-6">
                            <h3 className="text-lg font-bold text-slate-900 font-heading">২৪/৭ এক্সপার্ট সাপোর্ট</h3>
                            <p className="mt-2 text-slate-600">যেকোনো সমস্যায় আমাদের লোকাল সাপোর্ট টিম সর্বদা প্রস্তুত। এছাড়াও, আমাদের এআই অ্যাসিস্ট্যান্ট 'অ্যাস্ট্রা' আছে আপনার পাশে।</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="relative order-1 lg:order-2 mb-10 lg:mb-0">
                   <div className="absolute inset-0 bg-brand-600 rounded-3xl transform -rotate-6 opacity-20 blur-lg"></div>
                   {/* Updated Image for better local/freelancer context */}
                   <img 
                     src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop" 
                     alt="Bangladeshi freelancers working in office" 
                     className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
                   />
                </div>
             </div>
           </div>
        </section>

        <Coverage />
        <SpeedTest />
      </main>

      <Footer />
      <AIChat />
    </div>
  );
};

export default App;