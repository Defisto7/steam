import React from 'react';
import logo from '../assets/logo.png';
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className="flex items-center bg-[#171a21]">
      <div className="flex items-center justify-center lg:justify-start py-2 px-4 lg:py-6 lg:px-8 w-full lg:w-auto">
        <div className="lg:hidden left-5 absolute text-white">
          <FiMenu className="text-[30px]"/>
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

    </div>
  );
}

export default Navbar