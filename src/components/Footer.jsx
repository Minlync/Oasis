import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2  gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Oasis</h1>
        <p style={{ fontSize: '12px' }} className='py-6'>This site designed and developed by Evelyn Chen</p>
        {/* <p> DESIGNED BY EVELYN CHEN</p> */}
        
      </div>
      <div className='flex justify-center gap-10 my-12 md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
    </div>
  );
};

export default Footer;
