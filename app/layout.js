"use client"
import React, { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'
import CursorTrail from '@/components/CursorTrail';


export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the loader. Replace this with your actual loading logic.
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed
  }, []);

  return (
    <html lang="en">
      <body>
        {loading ? (
          <Loader />
        ) : (
          <>
         
            <Header />
            
            {children}
       
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}


