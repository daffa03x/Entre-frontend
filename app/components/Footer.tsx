"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { Home, Search, Ticket, User } from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [activeTab, setActiveTab] = useState("home");

  useLayoutEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      ref={footerRef}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
    >
      <div className="max-w-md mx-auto px-6 py-3">
        <div className="flex items-center justify-around">
          {[
            { icon: Home, label: "Beranda", id: "home" },
            { icon: Search, label: "Jelajah", id: "explore" },
            { icon: Ticket, label: "Tiket", id: "tickets" },
            { icon: User, label: "Profil", id: "profile" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 active:scale-90 relative ${
                activeTab === item.id ? "text-purple-600" : "text-gray-400"
              }`}
            >
              {activeTab === item.id && (
                <div className="absolute -top-1 w-1 h-1 bg-purple-600 rounded-full animate-pulse"></div>
              )}
              <item.icon
                size={24}
                strokeWidth={activeTab === item.id ? 2.5 : 2}
                className={activeTab === item.id ? "animate-pulse" : ""}
              />
              <span
                className={`text-xs transition-all duration-300 ${
                  activeTab === item.id ? "font-bold scale-110" : "font-medium"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
