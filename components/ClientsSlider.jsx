"use client"
import React, { useRef, useEffect } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const clientLogos = [
  'images/logo1.png',
  'images/logo7.png',
  'images/logo20.jpeg',
  'images/logo30.png',
  'images/logo 40.jpeg',
  'images/logo50.png',
  'images/logo60.jpeg',
  'images/logo70.png',
  
 
  
 
  
  // Add more client logos here
];

const ClientsSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current.swiper;

    const interval = setInterval(() => {
      if (slider && !slider.isEnd) {
        slider.slideNext();
      } else if (slider) {
        slider.slideTo(0);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="my-28">
 <h1 className="text-4xl font-bold mb-4 text-center">
        TRUSTED <span className="border-b-4 border-purple-600">BY</span>:
      </h1>
      <Swiper
        ref={sliderRef}
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        navigation
        pagination
        className="swiper-container"
      >
        {clientLogos.map((logo, index) => (
          <SwiperSlide key={index} className="swiper-slide flex items-center">
            <img src={logo} alt={`Client ${index + 1}`} className="object-contain h-[150px] w-full mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsSlider;
