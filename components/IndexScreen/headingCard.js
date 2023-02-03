import React from 'react'

import Image from "next/image"
import logo from "@/assets/bestMatching.png"

const HeadingCard = () => {
  return (
    <div className='w-[28%] bg-white py-8 mx-3 rounded shadow-md'>
    <div className='flex justify-center'>
      <Image src={logo} alt="logo"/>
    </div>
    <p className='text-dark text-[18px] font-[500] text-center'>Best Matching</p>
    <p className='text-dark text-[14px] font-[400] text-center'>
    Lorem ipsum dolor sit amet consectetur.<br/>Nec auctor non eu proin nulla lorem<br/>mattis sed in. Tincidunt dui neque<br/>duis porttitor 
    </p>
  </div>
  )
}

export default HeadingCard