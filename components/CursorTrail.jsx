"use client"
import React, { useEffect, useRef, useState } from 'react';

const CursorTrail = () => {
  const [trail, setTrail] = useState([]);
  const cursorOuterRef = useRef();
  const cursorInnerRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    setTrail((prevTrail) => [...prevTrail, { x: clientX, y: clientY }]);
    endX.current = clientX;
    endY.current = clientY;
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateOuterCursor = (time) => {
      if (previousTimeRef.current !== undefined) {
        setTrail((prevTrail) => [
          ...prevTrail.slice(-10),
          { x: endX.current, y: endY.current },
        ]);

        const coords = trail.reduce(
          (acc, point) => {
            return {
              x: acc.x + point.x,
              y: acc.y + point.y,
            };
          },
          { x: 0, y: 0 }
        );

        const avgX = coords.x / trail.length;
        const avgY = coords.y / trail.length;

        cursorOuterRef.current.style.top = avgY + 'px';
        cursorOuterRef.current.style.left = avgX + 'px';
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    };

    requestRef.current = requestAnimationFrame(animateOuterCursor);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [trail]);

  const styles = {
    cursor: {
      zIndex: 9999, // Increase the z-index value to ensure the cursor is on top
      pointerEvents: 'none',
      position: 'absolute',
      opacity: 1,
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
      cursor: 'none', // Hide the default cursor
    },
    cursorInner: {
      position: 'absolute',
      borderRadius: '50%',
      width: '8px',
      height: '8px',
      pointerEvents: 'none',
      backgroundColor: 'rgba(220, 90, 90, 1)',
      transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
    },
    cursorOuter: {
      position: 'absolute',
      borderRadius: '50%',
      pointerEvents: 'none',
      width: '8px',
      height: '8px',
      backgroundColor: 'rgba(220, 90, 90, 0.4)',
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
    },
  };

  return (
    <>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner} />
    </>
  );
};

export default CursorTrail;
