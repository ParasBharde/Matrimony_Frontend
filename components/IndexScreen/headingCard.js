import React from 'react'
import Image from "next/image"
import logo from "@/assets/indexAssets/bestMatching.png"

const HeadingCard = ({desc}) => {
  return (
    <div className='bg-white py-8 mx-3 rounded shadow-md'>
    <div className='flex justify-center'>
      <Image src={logo} alt="logo"/>
    </div>
    <p className='text-dark text-[18px] font-medium text-center'>Best Matching</p>
    <p className='text-dark text-[14px] font-normal text-center'>
     ipsum dolor sit amet consectetur.<br/>Nec auctor non eu proin nulla <br/>mattis sed in. Tincidunt dui neque<br/>duis porttitor 
    </p>
  </div>
  )
}

export default HeadingCard