"use client"
import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import loaderAnimation from '@/public/data/loaderAnimation.json'; // Replace with the path to your JSON file

const Loader = () => {
  useEffect(() => {
    const container = document.getElementById('loader-container');

    // Load the animation
    const animation = lottie.loadAnimation({
      container,
      animationData: loaderAnimation,
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to true to automatically play the animation
    });

    return () => {
      // Cleanup when the component unmounts
      animation.destroy();
    };
  }, []);

  return (
    <div
      id="loader-container"
      style={{
        width: '100%',
        height: '100vh',
      }}
    ></div>
  );
};

export default Loader;
