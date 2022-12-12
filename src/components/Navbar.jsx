import React from 'react';
import logo from '../assets/logo.png';
import { FiMenu } from 'react-icons/fi'
import { ImDownload } from 'react-icons/im'
import { BiWorld } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className="flex items-center bg-[#171a21]">
      <div className="flex items-center justify-center lg:justify-start py-2 px-4 lg:py-6 lg:px-8 w-full lg:w-auto">
        <div className="lg:hidden left-5 absolute text-white">
          <FiMenu className="text-[30px] cursor-pointer"/>
        </div>
        <div className="flex items-center text-[#c5c3c0] font-semibold text=[30px]">
          <img src={logo} alt="logo" className="w-16 h-16 mr-2" />
          <p>GAMES</p>
        </div>
      </div>
      <div className="pl-10">
        <ul className="hidden text-[#c5c3c0] text-[13px] lg:flex gap-4">
          <li>
            <p>STORE</p>
          </li>
          <li>
            <p>COMMUNITY</p>
          </li>
          <li>
            <p>ABOUT</p>
          </li>
          <li>
            <p>SUPPORT</p>
          </li>
        </ul>
      </div>
        <div className='absolute text-white right-10 mt-2 top-0 text-[12px] lg:flex items-center hidden'>
          <div className='flex items-center bg-[#5c7e10] px-1.5 rounded-[0.3rem cursor-pointer'>
            <ImDownload className='mr-2'/>
            <p>Download</p>
          </div>
          <div className='ml-4'>
            <p className='hover:text-[#93c920] cursor-pointer'>login</p>
          </div>
          <div className='h-[15px] w-[1px] bg-white mx-2' />
          <div className='flex items-center cursor-pointer hover:text-[#93c920]'>
            <BiWorld className='mr-1'/>
            <p className=' '>language</p>
          </div>
        </div>
    </div>
  );
}

export default Navbar