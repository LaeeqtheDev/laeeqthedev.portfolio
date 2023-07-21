"use client"
import React, { useState, useEffect } from 'react';
import ActiveUsers from '@/components/ActiveUsers'
import Clients from '@/components/ClientsSlider'
import Contactus from '@/components/ContactUs'
import Content from '@/components/Content'


import Feature from '@/components/Feature'
import Game from '@/components/Game'
import Hero from '@/components/Hero'

import Projects from '@/components/Projects'
import Roadmap from '@/components/Roadmap'
import Testimonal from '@/components/Testimonal'


export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    // Function to handle the window resize event
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992); // 992px is the breakpoint for LG screens
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call the handleResize function on component mount to set the initial screen size
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      <Hero />
      {isLargeScreen && <Game />} {/* Render Game component only if the screen is lg */}
      <Content />
      <Roadmap />
      <ActiveUsers />
      <Projects />
      <Clients />
      <Testimonal />
      <Contactus />
    </main>
  )
}
