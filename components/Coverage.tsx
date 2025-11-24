import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Loader2, CheckCircle, XCircle, Navigation, Search } from 'lucide-react';
import Tooltip from './Tooltip';

// Define a type for the Leaflet library attached to window
declare global {
  interface Window {
    L: any;
  }
}

const Coverage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'fail'>('idle');
  const [message, setMessage] = useState('');
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Khulna Center Coordinates
  const CENTER = [22.8200, 89.5500]; 

  // Mock Coverage Polygons (Lat/Lng arrays)
  // Roughly covering Sonadanga, Shib Bari, Khalishpur areas
  const COVERAGE_ZONES = [
    // Zone 1: Sonadanga / Shib Bari (Central)
    [
      [22.8350, 89.5400],
      [22.8350, 89.5650],
      [22.8050, 89.5650],
      [22.8050, 89.5400],
    ],
    // Zone 2: Khalishpur (North)
    [
      [22.8600, 89.5300],
      [22.8600, 89.5550],
      [22.8400, 89.5550],
      [22.8400, 89.5300],
    ]
  ];

  // Point in Polygon Algorithm
  const isPointInPolygon = (point: number[], vs: number[][]) => {
    const x = point[0], y = point[1];
    let inside = false;
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      const xi = vs[i][0], yi = vs[i][1];
      const xj = vs[j][0], yj = vs[j][1];
      const intersect = ((yi > y) !== (yj > y)) &&
        (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  };

  const checkCoverageAtPoint = (lat: number, lng: number) => {
    setStatus('loading');
    
    // Add marker
    if (markerRef.current) {
        markerRef.current.setLatLng([lat, lng]);
    } else if (window.L) {
        markerRef.current = window.L.marker([lat, lng]).addTo(mapRef.current);
    }

    // Simulate processing delay
    setTimeout(() => {
      const point = [lat, lng];
      let covered = false;

      for (const zone of COVERAGE_ZONES) {
        if (isPointInPolygon(point, zone)) {
          covered = true;
          break;
        }
      }

      if (covered) {
        setStatus('success');
        setMessage('অভিনন্দন! এই লোকেশনে স্পিডনেট খুলনার ফাইবার কভারেজ রয়েছে।');
        if(markerRef.current) markerRef.current.bindPopup("<b>কভারেজ আছে!</b><br>হাই-স্পিড সংযোগ উপলব্ধ।").openPopup();
      } else {
        setStatus('fail');
        setMessage('দুঃখিত, এই লোকেশনে এখনো আমাদের লাইন পৌঁছায়নি।');
        if(markerRef.current) markerRef.current.bindPopup("<b>দুঃখিত</b><br>কভারেজ নেই।").openPopup();
      }
    }, 800);
  };

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Wait for Leaflet to load from CDN
    const interval = setInterval(() => {
      if (window.L) {
        clearInterval(interval);
        initMap();
      }
    }, 100);

    const initMap = () => {
      const L = window.L;
      const map = L.map(mapContainerRef.current).setView(CENTER, 13);
      mapRef.current = map;

      // OpenStreetMap Tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Draw Coverage Polygons
      COVERAGE_ZONES.forEach(zone => {
        L.polygon(zone, {
          color: '#2563eb', // Brand Blue
          fillColor: '#3b82f6',
          fillOpacity: 0.2,
          weight: 2
        }).addTo(map);
      });

      // Map Click Event
      map.on('click', (e: any) => {
        checkCoverageAtPoint(e.latlng.lat, e.latlng.lng);
      });
    };

    return () => clearInterval(interval);
  }, []);

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert("আপনার ব্রাউজার জিওলোকেশন সাপোর্ট করে না।");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        if(mapRef.current) {
            mapRef.current.setView([latitude, longitude], 15);
            checkCoverageAtPoint(latitude, longitude);
        }
      },
      () => {
        alert("লোকেশন অ্যাক্সেস পাওয়া যায়নি। দয়া করে লোকেশন পারমিশন দিন।");
      }
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock search for demo - in real app would use Geocoding API
    if(searchQuery.includes("সোনাডাঙ্গা") || searchQuery.includes("Sonadanga")) {
        mapRef.current.setView([22.8200, 89.5500], 15);
        checkCoverageAtPoint(22.8200, 89.5500);
    } else if (searchQuery.includes("খালিশপুর") || searchQuery.includes("Khalishpur")) {
        mapRef.current.setView([22.8500, 89.5400], 15);
        checkCoverageAtPoint(22.8500, 89.5400);
    } else {
        alert("ডেমো ভার্সনে কেবল 'সোনাডাঙ্গা' বা 'খালিশপুর' সার্চ করুন অথবা ম্যাপে ক্লিক করুন।");
    }
  };

  return (
    <section id="coverage" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">আমাদের কভারেজ জোন</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            ম্যাপে আপনার লোকেশন পিন করুন অথবা সার্চ করে দেখুন আমাদের ফাইবার সংযোগ আপনার এলাকায় আছে কিনা।
            <br />
            <span className="text-sm text-brand-400">(নীল রঙের এরিয়াগুলো আমাদের বর্তমান কভারেজ জোন)</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 h-[600px] lg:h-[500px]">
          {/* Map Controls & Status Panel */}
          <div className="lg:col-span-1 flex flex-col space-y-6 bg-slate-800/50 p-6 rounded-2xl backdrop-blur-sm border border-slate-700 order-2 lg:order-1">
            
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="এলাকার নাম খুঁজুন..." 
                className="w-full bg-slate-900 border border-slate-600 rounded-lg py-3 pl-4 pr-10 text-white focus:ring-2 focus:ring-brand-500 outline-none"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-brand-400">
                <Tooltip content="সার্চ করুন">
                    <Search className="w-5 h-5" />
                </Tooltip>
              </button>
            </form>

            {/* Status Card */}
            <div className={`flex-grow rounded-xl p-6 flex flex-col items-center justify-center text-center border transition-all duration-300 ${
                status === 'idle' ? 'bg-slate-800 border-dashed border-slate-600' :
                status === 'loading' ? 'bg-slate-800 border-brand-500/50' :
                status === 'success' ? 'bg-green-900/30 border-green-500' :
                'bg-red-900/30 border-red-500'
            }`}>
                {status === 'idle' && (
                    <>
                        <Tooltip content="লোকেশন চেক করুন">
                            <MapPin className="w-12 h-12 text-slate-600 mb-4" />
                        </Tooltip>
                        <p className="text-slate-400">ম্যাপে আপনার বাসা বা অফিসের লোকেশনে ক্লিক করুন।</p>
                    </>
                )}
                {status === 'loading' && (
                    <>
                        <Loader2 className="w-12 h-12 text-brand-500 animate-spin mb-4" />
                        <p className="text-slate-200">যাচাই করা হচ্ছে...</p>
                    </>
                )}
                {status === 'success' && (
                    <div className="animate-fade-in-up">
                        <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                            <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-green-400 mb-2 font-heading">কভারেজ এভেইলেবল!</h3>
                        <p className="text-slate-300 text-sm mb-4">{message}</p>
                        <a href="#plans" className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-green-700 transition-colors">
                            প্যাকেজ দেখুন
                        </a>
                    </div>
                )}
                {status === 'fail' && (
                    <div className="animate-fade-in-up">
                        <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/30">
                            <XCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-red-400 mb-2 font-heading">দুঃখিত</h3>
                        <p className="text-slate-300 text-sm mb-4">{message}</p>
                        <button className="text-xs underline text-slate-400 hover:text-white">
                            আমাকে নোটিফাই করুন
                        </button>
                    </div>
                )}
            </div>

            {/* Current Location Button */}
            <button 
                onClick={handleLocateMe}
                className="w-full flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 py-3 rounded-lg font-bold transition-colors"
            >
                <Tooltip content="অটো লোকেশন">
                    <Navigation className="w-4 h-4" />
                </Tooltip>
                <span>আমার বর্তমান অবস্থান ব্যবহার করুন</span>
            </button>
          </div>

          {/* Map Container */}
          <div className="lg:col-span-2 h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative order-1 lg:order-2 group">
             <div ref={mapContainerRef} id="map" className="w-full h-full bg-slate-800 z-0"></div>
             
             {/* Overlay hint */}
             <div className="absolute bottom-4 right-4 bg-white/90 text-slate-900 px-3 py-1 rounded shadow-lg text-xs font-bold z-[1000] pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity">
                 ম্যাপে ক্লিক করুন
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;