'use client'
import { useLayoutEffect, useRef, useState } from 'react';
import { Search, Calendar, MapPin, Music, Trophy, Heart, User, Home, Ticket, Bell, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function TicketMarketplace() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [likedEvents, setLikedEvents] = useState<number[]>([]);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useLayoutEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight)
    }
  }, [])


  const categories = [
    { icon: Music, label: 'Konser', color: 'bg-purple-500' },
    { icon: Trophy, label: 'Olahraga', color: 'bg-blue-500' },
    { icon: Calendar, label: 'Festival', color: 'bg-pink-500' },
    { icon: MapPin, label: 'Wisata', color: 'bg-green-500' }
  ];

  const events = [
    {
      id: 1,
      title: 'Jazz Festival Jakarta 2025',
      date: '25 Des 2025',
      location: 'JIExpo Kemayoran',
      price: 'Rp 350.000',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tag: 'Populer',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Coldplay Live in Jakarta',
      date: '15 Jan 2026',
      location: 'GBK Stadium',
      price: 'Rp 1.500.000',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tag: 'Hot',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Djakarta Warehouse Project',
      date: '10 Des 2025',
      location: 'JIExpo',
      price: 'Rp 750.000',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      tag: 'Terbaru',
      rating: 4.7
    },
    {
      id: 4,
      title: 'Stand Up Comedy Show',
      date: '5 Des 2025',
      location: 'The Pallas',
      price: 'Rp 200.000',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      tag: 'Promo',
      rating: 4.6
    }
  ];

  const toggleLike = (eventId: number) => {
    setLikedEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  return (
   <div className="w-full min-h-screen bg-white" style={footerHeight ? { paddingBottom: `${footerHeight}px` } : undefined}>
      <div className="w-full max-w-md mx-auto min-h-screen bg-gray-50 pb-20 shadow-2xl">
      {/* Header with Animation */}
      <div className="bg-linear-to-r from-purple-600 via-purple-500 to-blue-600 text-white p-5 pb-6 rounded-b-3xl shadow-xl animate-slide-down relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold flex items-center">
            <Image
              src="/logo-white-trans.png"
              alt="Logo Entré"
              width={110}
              height={40}
              className="object-contain transition-transform duration-300 hover:scale-120"
            />
            </h1>
            <p className="text-sm text-purple-100 mt-4 ms-3 animate-fade-in">Temukan eventmu!</p>
          </div>
          <button className="bg-white/20 backdrop-blur-sm p-2.5 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 active:scale-95 relative">
            <Bell size={22} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
        </div>

        {/* Search Bar with Hover Effect */}
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" size={20} />
          <input
            type="text"
            placeholder="Cari event, konser, atau lokasi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-lg hover:shadow-2xl transition-all duration-300"
          />
        </div>
      </div>

      {/* Categories with Stagger Animation */}
      <div className="px-5 py-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 animate-fade-in">Kategori</h2>
        <div className="grid grid-cols-4 gap-3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 active:scale-95 hover:-translate-y-1 animate-scale-in group"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className={`${cat.color} p-3.5 rounded-xl shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <cat.icon size={24} className="text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Banner Promo with Shimmer */}
      <div className="px-5 mb-6 animate-fade-in">
        <div className="bg-linear-to-r from-purple-600 via-purple-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div className="absolute inset-0 shimmer"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold mb-1 flex items-center gap-1">
                🎉 PROMO SPESIAL
              </p>
              <h3 className="text-2xl font-bold mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">Diskon 30%</h3>
              <p className="text-sm opacity-90">Untuk pembelian pertama</p>
            </div>
            <button className="bg-white text-purple-600 px-5 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-orange-50">
              Pakai
            </button>
          </div>
        </div>
      </div>

      {/* Event List with Card Animations */}
      <div className="px-5">
        <div className="flex items-center justify-between mb-4 animate-fade-in">
          <h2 className="text-lg font-bold text-gray-800">Event Populer</h2>
          <button className="flex items-center gap-1 text-purple-600 text-sm font-semibold hover:gap-2 transition-all duration-300 active:scale-95 hover:text-purple-700">
            Lihat Semua
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="space-y-4">
          {events.map((event, idx) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden card-hover animate-scale-in"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className="relative overflow-hidden group">
                <div
                  className="h-44 w-full transition-transform duration-500 group-hover:scale-110"
                  style={{ background: event.image }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                <div className="absolute top-3 left-3 animate-fade-in">
                  <span className="bg-white/95 backdrop-blur-sm text-purple-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-md hover:scale-110 transition-transform duration-300 inline-block">
                    {event.tag}
                  </span>
                </div>
                
                <button 
                  onClick={() => toggleLike(event.id)}
                  className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-md hover:scale-125 active:scale-90 transition-all duration-300 group/heart"
                >
                  <Heart 
                    size={18} 
                    className={`transition-all duration-300 ${
                      likedEvents.includes(event.id) 
                        ? 'text-red-500 fill-red-500 scale-110' 
                        : 'text-gray-600 group-hover/heart:text-red-500'
                    }`}
                  />
                </button>
                
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1 hover:bg-black/80 transition-colors duration-300">
                  <Star size={14} className="text-yellow-400 fill-yellow-400 animate-pulse" />
                  <span className="text-white text-xs font-semibold">{event.rating}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-2.5 text-base line-clamp-1 hover:text-purple-600 transition-colors duration-300">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1.5 group/date hover:text-purple-600 transition-colors duration-300">
                  <Calendar size={16} className="text-purple-500 group-hover/date:scale-125 transition-transform duration-300" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 group/location hover:text-purple-600 transition-colors duration-300">
                  <MapPin size={16} className="text-purple-500 group-hover/location:scale-125 transition-transform duration-300" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Mulai dari</p>
                    <p className="text-lg font-bold text-purple-600 hover:scale-110 transition-transform duration-300 inline-block">{event.price}</p>
                  </div>
                  <button className="bg-linear-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 hover:from-purple-700 hover:to-blue-700 relative overflow-hidden group/btn">
                    <span className="relative z-10">Beli Tiket</span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation with Active Animations */}
      <div ref={footerRef} className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-around">
            {[
              { icon: Home, label: 'Beranda', id: 'home' },
              { icon: Search, label: 'Jelajah', id: 'explore' },
              { icon: Ticket, label: 'Tiket', id: 'tickets' },
              { icon: User, label: 'Profil', id: 'profile' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 active:scale-90 relative ${
                  activeTab === item.id ? 'text-purple-600' : 'text-gray-400'
                }`}
              >
                {activeTab === item.id && (
                  <div className="absolute -top-1 w-1 h-1 bg-purple-600 rounded-full animate-pulse"></div>
                )}
                <item.icon 
                  size={24} 
                  strokeWidth={activeTab === item.id ? 2.5 : 2}
                  className={activeTab === item.id ? 'animate-pulse' : ''}
                />
                <span className={`text-xs transition-all duration-300 ${
                  activeTab === item.id ? 'font-bold scale-110' : 'font-medium'
                }`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}