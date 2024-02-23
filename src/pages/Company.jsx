import React from 'react';
import Comimg from '../assets/companyimg.png';
import Accordion from '../components/Accordion';
import { Typography } from '@mui/material';

const Company = () => {
  return (
    <div>
      
      <div className='w-full bg-white py-10 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Comimg} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>TRANSFORMING TOMORROW</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Redefining Tech Data Solutions</h1>
          <Typography className='py-10'>
          Specializing in advanced analytics, we transform vast datasets into actionable insights,
           enabling informed decisions and process optimizations. 
           Our commitment to excellence and innovation positions us as your trusted partner 
           in the digital era. Explore data-driven success with us.
          </Typography>
           {/* second segments for the accordion */}
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Our Service</h1>
          <Accordion className="py-4"/>
          {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Company


