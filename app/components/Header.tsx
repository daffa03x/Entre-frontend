import { Bell, Search } from "lucide-react";
import Image from "next/image";

const Header = (
  animationDelay: string,
  searchQuery: string,
  setSearchQuery: (value: string) => void,
) => {
  return (
    <div className="bg-linear-to-r from-purple-600 via-purple-500 to-blue-600 text-white p-5 pb-6 rounded-b-3xl shadow-xl animate-slide-down relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 animate-pulse"
        style={{ animationDelay: animationDelay }}
      ></div>
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
          <p className="text-sm text-purple-100 mt-4 ms-3 animate-fade-in">
            Temukan eventmu!
          </p>
        </div>
        <button className="bg-white/20 backdrop-blur-sm p-2.5 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 active:scale-95 relative">
          <Bell size={22} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      </div>

      <div className="relative group">
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-purple-500 transition-colors duration-300"
          size={20}
        />
        <input
          type="text"
          placeholder="Cari event, konser, atau lokasi..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-lg hover:shadow-2xl transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Header;
