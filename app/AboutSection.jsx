'use client'

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { FileDown } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const images = [
     '/s1.JPG', 
    '/s2.jpg', 
     '/s3.JPG', 
    '/s4.jpg', 
    '/s5.jpg', 
    '/s6.jpg', 
    '/s7.jpg', 
    '/s8.jpg'];

  return (
    <section id="about" className="bg-white py-16" ref={sectionRef}>
      <div className="container mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="order-2 md:order-1 animate-on-scroll"
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-2xl text-gray-400 font-serif font-semibold mb-4 text-feminine-lavender">
              Hello, I'm Sagun Gautam
            </h3>
            <p className="text-gray-700 mb-4">
              As a driven BBA student specializing in Business Management and
              Marketing, I blend analytical thinking with creative
              problem-solving to deliver exceptional business solutions.
            </p>
            <p className="text-gray-700 mb-4">
              My academic journey has equipped me with strong foundations in
              strategic management, market analysis, and digital marketing
              strategies. I'm particularly passionate about helping businesses
              establish meaningful connections with their audience through
              data-driven insights and creative campaigns.
            </p>
            <p className="text-gray-700">
              When I'm not immersed in my studies or working on business
              projects, you'll find me exploring new marketing trends,
              attending business networking events, or volunteering with local
              entrepreneurs to help them grow their businesses.
            </p>
            <a 
                href="/resume.PNG" 
                download 
                className="inline-flex items-center gap-2 bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <FileDown className="h-5 w-5" />
                Download Resume
              </a>
          </div>

          <div
            className="order-1 md:order-2 animate-on-scroll relative"
            style={{ transitionDelay: "0.4s" }}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="mx-auto w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 "
            >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    alt={`Slide ${i + 1}`}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </SwiperSlide>
              ))}

              {/* Navigation buttons */}
              <button
                className="swiper-button-prev absolute top-1/2 left-2 -translate-y-1/2 z-20 p-2 "
                aria-label="Previous Slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="swiper-button-next absolute top-1/2 right-2 -translate-y-1/2 z-20 p-2 "
                aria-label="Next Slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


