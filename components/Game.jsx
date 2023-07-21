"use client"
// Hero.jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Hero = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@0.9.391/build/spline-viewer.js';
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <section className="container text-gray-600 body-font relative">
        <Helmet>
          <script
            type="module"
            src="https://unpkg.com/@splinetool/viewer@0.9.391/build/spline-viewer.js"
          />
        </Helmet>
        <div className="relative flex justify-center items-center">
          {/* Apply styling to center the spline-viewer */}
          <div className="container items-center justify-center w-full" style={{ margin: '0 auto, marginLeft: '35px', height: '550px' }}>
            <spline-viewer
              className="w-full"
              style={{ height: '450px' }}
              url="https://prod.spline.design/6I0kVMCHYm-gIixD/scene.splinecode"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;


