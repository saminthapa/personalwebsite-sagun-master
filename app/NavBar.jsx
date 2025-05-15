'use client';

import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-sm border-b border-white/20 transition-all duration-300">
      <div className="container mx-auto px-6 flex items-center justify-center animate-fade-in-down">
        <div className="relative">
          <Image 
            src="/logo.png"
            alt="logo"
            width={70}
            height={20}
            priority
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default NavBar;
