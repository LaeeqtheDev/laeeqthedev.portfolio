"use client"

import React from 'react';
import { useTypewriter , Cursor} from 'react-simple-typewriter'
import BackgroundCircles from '@/components/BackgroundCircles'
import Image from 'next/image';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's UNICORN PRODUCTIONs`,
      "TEAM-who-loves-Anime.tsx",
      "<ButLovesToCodeMore/>"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image className='relative rounded-full mx-auto object-cover' src='images/bighead.svg' alt='' width={500} height={500} />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>DEVELOPMENT/ DESIGN</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
