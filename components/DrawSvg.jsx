"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Vector from '@/components/Vector'

const DrawSg = () => {
  const ref = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = ref.current;
    const svg = document.getElementsByClassName('svg-path')[0];
    const length = svg.getTotalLength();

    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const draw = length * self.progress;
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: (self) => {
          if (self.isActive) {
            console.log('Scrolling is active');
            ballRef.current.style.display = 'none';
          } else {
            console.log('Scrolling is not active');
            ballRef.current.style.display = 'inline-block';
          }
        },
      },
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full overflow-hidden">
          <Vector />
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-6 rounded-full bg-gray-800 animate-bounce" ref={ballRef}></div>
        </div>
      </div>
    </>
  );
};

export default DrawSg;
