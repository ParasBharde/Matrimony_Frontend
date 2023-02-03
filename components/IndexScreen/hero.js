import React from 'react'
import Image from 'next/image'

import logo from "@/assets/headerLogo.png";

const Hero = () => {
  return (
    <div className='relative h-[829.2px]'>
      <div className='indexbg absolute top-0 w-full h-[829.2px] -z-10'>
      </div>
      <div className='absolute top-0 w-full h-[829.2px] bg-black bg-opacity-60 -z-10'>
      </div>
      <div className='flex justify-between items-center pt-10 px-16 z-10'>
        <div>
          <Image src={logo} alt={"logo"}/>
        </div>
        <div className='text-white flex justify-center items-center text-[16px] font-[600]'>
          <p className='mx-10 cursor-pointer'>Home</p>
          <p className='mx-10 cursor-pointer'>Pricing Plan</p>
          <p className='mx-10 cursor-pointer'>Contact Us</p>
          <p className='mx-10 cursor-pointer'>About Us</p>
          <p className='mx-10 cursor-pointer'>EN</p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-white bg-main py-2 px-5 rounded-md mx-2 cursor-pointer'>Login</p>
          <p className='text-main bg-white py-2 px-5 rounded-md mx-2 cursor-pointer'>Register</p>
        </div>
      </div>
      <p className='text-white font-[700] text-[60px] text-center absolute top-[36%] w-full'>
       We Bring people together, Love<br/>unites them..
      </p>
    </div>
  )
}

export default Hero