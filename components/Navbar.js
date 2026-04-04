
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { data: session, status } = useSession();
  const [showdropdown, setShowdropdown] = useState(false);

  // 1. Loading state placeholder
  if (status === "loading") {
    return <nav className="flex justify-between items-center px-4 md:px-15 lg:px-20 py-4 bg-sky-950 shadow-lg min-h-[82px]"></nav>;
  }

 
return (
    <nav className="fixed top-0 w-full z-[100] px-4 py-3">
      {/* Floating Glass Island (Darker, Narrower, Higher Blur) */}
      <div className="max-w-6xl mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex justify-between items-center transition-all duration-300">
        
        {/* Logo Section (Vertical Stack) */}
        <div className="flex items-center gap-3 group">
          <Link href="/" className="relative flex items-center gap-2">
            <div className="relative">
               <Image
                src="/logo.png"
                alt="MEDIFLO Logo"
                width={36}
                height={36}
                className="rounded-full bg-white/10 p-1 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full -z-10 animate-pulse"></div>
            </div>
            
            {/* New Logo Stack */}
            <div className="flex flex-col tracking-tight uppercase leading-none mt-1 ml-0.5">
              <span className="text-xl font-black italic text-white -mt-0.5">
                MEDI<span className="text-blue-400 not-italic">FLO</span>
              </span>
              <span className="text-[10px] font-bold text-gray-500">SmartCare</span>
            </div>
          </Link>
        </div>

        {/* Navigation Links (Refined for 'Advanced' look) */}
        <div className="hidden md:block">
          <ul className="flex space-x-9 items-center">
            <li>
              <Link href="/" className="text-sm font-semibold text-gray-200 hover:text-white transition-all relative group">
                Home
                {/* Underline replaces text background on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400/70 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm font-semibold text-gray-200 hover:text-white transition-all relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400/70 transition-all group-hover:w-full"></span>
              </Link>
            </li>
            {session && (
              <li>
                <Link href="/service" className="text-sm font-semibold text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-1.5 relative group">
                  <span className="w-2 h-2 bg-blue-400 rounded-full group-hover:animate-ping opacity-50 group-hover:opacity-100"></span>
                  Services
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Auth & Profile Section (Integrated with 'Pill' design) */}
        <div className="flex items-center gap-4 relative">
          {session ? (
            <>
              {/* User Avatar & Dropdown */}
              <div className="relative flex items-center">
                <button
                  onClick={() => setShowdropdown(!showdropdown)}
                  className="flex items-center gap-2 px-1 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-[11px] font-bold text-white shadow-lg">
                    {session.user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                   <svg className={`w-4 h-4 text-gray-500 mr-2 transition-transform ${showdropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu (Also refactored for theme) */}
                {showdropdown && (
                  <div className="absolute right-0 mt-3 w-48 bg-slate-950/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-4 py-2 border-b border-white/5 mb-1">
                       <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">Operator</p>
                       <p className="text-sm font-bold text-white capitalize">{session.user?.name?.split(" ")[0] || "User"}</p>
                    </div>

                    <Link href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-200 hover:bg-white/5 hover:text-white transition">
                      <span className="text-lg">👤</span> Profile
                    </Link>
                    <Link href="/service" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-200 hover:bg-white/5 hover:text-white md:hidden transition">
                      <span className="text-lg">⚙️</span> Services
                    </Link>
                    <div className="h-px bg-white/5 my-1"></div>
                    
                    {isLoggingOut ? (
                      <div className="px-2 pb-1 space-y-1">
                        <button
                          onClick={() => signOut()}
                          className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 text-[11px] font-bold py-2 rounded-lg transition"
                        >
                          Confirm Logout?
                        </button>
                        <button
                          onClick={() => setIsLoggingOut(false)}
                          className="w-full text-gray-500 text-[11px] hover:text-white transition"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setIsLoggingOut(true)}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition"
                      >
                        <span className="text-lg">🔓</span> Logout
                      </button>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm font-semibold text-gray-200 hover:text-white px-2 py-1 transition">
                Login
              </Link>
              <Link href="/register">
                <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold py-2 px-5 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition transform active:scale-95">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
 
};

export default Navbar;