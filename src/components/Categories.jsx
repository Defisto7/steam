import React from 'react'

const Categories = () => {
  return (
    <div className='flex justify-between gradient mx-[2rem] px-4 mt-8'>
      <ul className="text-white flex items-center gap-8 py-1.5 text-[13px]">
        <li>
          <p>Your Store</p>
        </li>
        <li>
          <p>New</p>
        </li>
        <li>
          <p>Categories</p>
        </li>
        <li>
          <p>Points Shop</p>
        </li>
        <li>
          <p>News</p>
        </li>
        <li>
          <p>Labs</p>
        </li>
      </ul>
     <input type="search" placeholder="search" className="pl-4 pr-2 m-[1px] rounded-full placeholder:text-black bg-[#5a8cb6]"></input>
    </div>
  );
}

export default Categories