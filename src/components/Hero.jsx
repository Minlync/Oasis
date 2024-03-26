import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import '../gradient.css'; 

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const mouseXpercentage = Math.round((event.clientX / windowWidth) * 100);
      const mouseYpercentage = Math.round((event.clientY / windowHeight) * 100);

      setMousePosition({ x: mouseXpercentage, y: mouseYpercentage+100 });
    };

    window.addEventListener('mousemove', handleMouseMove);

   
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle 1000px at ${mousePosition.x}% ${mousePosition.y}%, #00df9a, #050505)`
  };

  return (
    <div className='text-white bg-gradient-to-b from-black to-green-900 flex flex-col h-screen' style={gradientStyle}>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>Growing with Data Analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Data</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl py-4 font-bold'>Fast Flexible Financing for</p>
          <ReactTyped
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl my-8 text-gray-500'>Helps Your Company Thrive: Unlocking Insights</p>
        <button className='bg-[#00df9a] hover:bg-[#479681] w-[200px] rounded-md font-medium my-8 mx-auto py-4 text-black duration-300 ease-in-out'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
