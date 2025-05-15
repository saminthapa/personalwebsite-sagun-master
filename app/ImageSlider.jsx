'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const ImageSlider = () => {
  const images = [
    // '/s1.jpg', 
    '/s2.jpg', 
    // '/s3.jpg', 
    '/s4.jpg', 
    '/s5.jpg', 
    '/s6.jpg', 
    '/s7.jpg', 
    '/s8.jpg'];
  return (
    <div className="w-[90%] mx-auto h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center w-full h-full">
            <div className="relative w-full h-full">
              <Image src={src} alt={`Slide ${index + 1}`} fill className="object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
