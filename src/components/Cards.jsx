import React from 'react';
import Basicplan from '../assets/Basicplan.svg'
import Professionalplan from '../assets/Professionalplan.svg'
import Enterprise from '../assets/ Enterprise.svg'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className=' size-15  w-20 mx-auto  bg-white' src={Basicplan} alt="/" />
              <h2 className='text-2xl font-bold text-center py-4'>Basic</h2>
              <p className='text-center text-2xl font-bold'>$149/Month</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Access to basic analytics tools</p>
                  <p className='py-2 border-b mx-8'>Monthly data reports</p>
                  <p className='py-2 border-b mx-8'>Up to 10GB of data storage</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#2b2b2b] hover:text-white transition-colors duration-300 ease-in-out'>Start Trial</button>
          </div>
          <div className= 'w-full shadow-xl bg-white-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto bg-transparent' src={Professionalplan} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Professional</h2>
              <p className='text-center text-3xl font-bold'>$199/Month</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>All Basic Plan features</p>
                  <p className='py-2 border-b mx-8'>analytics and visualization tools</p>
                  <p className='py-2 border-b mx-8'>Data integration capabilities</p>
                  <p className='py-2 border-b mx-8'>Up to 50GB of data storage</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#2b2b2b] hover:text-white transition-colors duration-300 ease-in-out'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto  bg-white' src={Enterprise} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Enterprise</h2>
              <p className='text-center text-2xl font-bold'>$149/Month</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>All Professional Plan features</p>
                  <p className='py-2 border-b mx-8'>Real-time data processing</p>
                  <p className='py-2 border-b mx-8'>24/7 personal support</p>
                  <p className='py-2 border-b mx-8'>Unlimited data storage</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#2b2b2b] hover:text-white transition-colors duration-300 ease-in-out'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;