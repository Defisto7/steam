import React from 'react'
import gaming from '../assets/header.jpg'
import gamingCover1 from '../assets/needforspeed01.jpg'
import gamingCover2 from '../assets/needforspeed02.jpg'
import gamingCover3 from '../assets/needforspeed03.jpg'
import gamingCover4 from '../assets/needforspeed04.jpg'

const Recommended = () => {
  return (
    <div className="mx-[2rem] mt-[2rem] text-white text-[24px]">
      <p className='pb-3'>Recommended</p>
      <div className="flex bg-[#0f1922]">
        <div className="w-[70%]">
          <img src={gaming} alt="cover" className="w-full"/>
        </div>
        <div className="w-[30%] ml-2">
          <p className="flex justify-center px-3 pt-2">Need for speed unbound</p>
          <div className='flex flex-wrap gap-3 p-4'>
            <img src={gamingCover1} alt="image1" className='w-[55%]'/>
            <img src={gamingCover2} alt="image2" className='w-[35%]'/>
            <img src={gamingCover3} alt="image3" className='w-[55%]'/>
            <img src={gamingCover4} alt="image4" className='w-[35%]'/>
          </div>
          <div>
            <p className='text-[21px] pl-4'>Available</p>
            <p className='bg-[#ffffff33] inline-block ml-4 mt-2 py-1 px-3 rounded-full text-[11px]'>Top Seller</p>
          </div>
          <div>
            <p className='mt-10 p-2'>1600₴</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Recommended