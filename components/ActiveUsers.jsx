"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiOutlineUserCircle, HiOutlineCube, HiKey } from 'react-icons/hi';

const AnimatedNumber = ({ number }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        const increment = Math.ceil(number / 50); // Adjust the increment to control the animation speed
        return prevNumber + increment <= number ? prevNumber + increment : number;
      });
    }, 30); // Adjust the interval to control the animation speed (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [number]);

  return (
    <motion.span>
      {currentNumber}
    </motion.span>
  );
};

const ActiveUsers = () => {
  const currentNumber = 908000; // Replace this with the actual current number of active users

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-center text-4xl font-bold text-purple-600 mb-4">Statistics</h1>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <HiCode className="text-3xl text-gray-900 mb-4 mx-auto" style={{ color: '#8800C7' }} />
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              <AnimatedNumber number={2700} />
            </h2>
            <p className="leading-relaxed text-purple-600">Projects Completed</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <HiOutlineUserCircle className="text-3xl text-gray-900 mb-4 mx-auto" style={{ color: '#8800C7' }} />
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              <AnimatedNumber number={5505550} />
            </h2>
            <p className="leading-relaxed text-purple-600 ">Active Users</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <HiOutlineCube className="text-3xl text-gray-900 mb-4 mx-auto" style={{ color: '#8800C7' }} />
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900"><AnimatedNumber number={35} /></h2>
            <p className="leading-relaxed text-purple-600">Open Source Collabs</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <HiKey className="text-3xl text-gray-900 mb-4 mx-auto" style={{ color: '#8800C7' }} />
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900"><AnimatedNumber number={10} /></h2>
            <p className="leading-relaxed text-purple-600">Public Api</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveUsers;
