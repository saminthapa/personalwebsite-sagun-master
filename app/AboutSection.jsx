'use client';

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import { FileDown } from 'lucide-react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-riseFade");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const images = [
    '/s1.JPG', '/s2.jpg', '/s3.JPG',
    '/s4.jpg', '/s5.jpg', '/s6.jpg'
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-rose-50 via-pink-50 to-white py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/abstract-pink.png')] bg-no-repeat bg-cover opacity-10 pointer-events-none blur-sm" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Text Section */}
          <div className="order-2 md:order-1 animate-on-scroll opacity-0">
            <h3 className="text-5xl font-serif font-extrabold text-rose-600 mb-6 tracking-tight">
              Hello, I'm <span className="text-pink-500">Sagun Gautam</span>
            </h3>

            <p className="text-gray-700 text-lg mb-5 leading-relaxed">
              I'm a passionate BBA student focused on Business Management and Marketing,
              blending analytics and creativity to craft strategies that truly connect.
            </p>

            <p className="text-gray-700 text-lg mb-5 leading-relaxed">
              My background equips me with a sharp understanding of strategic planning, market trends,
              and the latest in digital branding. I love aligning data with artistic vision.
            </p>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Outside work, I’m often exploring marketing innovations, collaborating with fresh startups,
              and giving back through creative community initiatives.
            </p>

            <a
              href="/resume.PNG"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-7 py-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110"
            >
              <FileDown className="h-5 w-5" />
              Download Resume
            </a>
          </div>

          {/* Swiper Section */}
          <div className="order-1 md:order-2 animate-on-scroll opacity-0 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500 }}
                className="w-full h-[26rem] md:h-[30rem]"
              >
                {images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="w-full h-full">
                      <img
                        src={src}
                        alt={`Slide ${i + 1}`}
                        className="object-cover w-full h-full transition-transform duration-[1200ms] ease-in-out hover:scale-105"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white via-white/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes riseFade {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-riseFade {
          animation: riseFade 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
