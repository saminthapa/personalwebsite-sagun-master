'use client';

import React from 'react';
import { BadgeCheck } from 'lucide-react';

const certificates = [
  '/a.jpg', '/b.jpg', '/c.jpg', '/d.jpg', '/e.jpg', '/f.jpg'
];

const Certificates = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-pink-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/abstract-pink.png')] opacity-10 bg-cover bg-no-repeat blur-md pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 font-serif flex justify-center items-center gap-3 animate-fadeInUp">
          <BadgeCheck className="w-8 h-8 text-blue-500" /> Certificates
        </h2>
        <p className="mt-4 text-lg text-gray-700 animate-fadeInUp delay-100">A curated collection of my official certifications.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-16 max-w-6xl mx-auto relative z-10">
        {certificates.map((src, i) => (
          <div
            key={i}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white transition duration-500 hover:shadow-blue-300/40 group hover:scale-105"
          >
            <img
              src={src}
              alt={`Certificate ${i + 1}`}
              className="w-full h-80 object-cover rounded-3xl group-hover:brightness-90 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              {/* <p className="text-white text-base font-medium">Certificate {i + 1}</p> */}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Certificates;
