"use client";
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Hero = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@0.9.391/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup: Remove the added script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <section className="container text-gray-600 body-font relative">
        <div className="relative flex justify-center items-center">
          {/* Apply styling to center the spline-viewer */}
          <div
            className="container items-center justify-center w-full"
            style={{
              display: 'flex',   // Add this to make it a flex container
              justifyContent: 'center', // Add this to center its content horizontally
              margin: '0 auto',
              marginRight: '50px',
              height: '550px',
              width: '1250px',
            }}
          >
            <spline-viewer
              style={{ height: '450px', width: '100%' }}
              url="https://prod.spline.design/EzsdXCbTfg6NyRmn/scene.splinecode"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
