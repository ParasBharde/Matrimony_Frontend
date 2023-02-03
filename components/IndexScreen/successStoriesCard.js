import React from 'react'


import Image from 'next/image'
import ss from "@/assets/ss.png"


const SuccessStoriesCard = () => {
  return (
    <div className='w-[20%] bg-white shadow-md rounded-md mx-5 '>
    <div className='w-[full]'>
      <Image width={420} src={ss} alt="ss"/>
    </div>
    <div className='flex justify-between items-center my-5 px-10'>
      <div>
        <p className='text-dark text-[16px] font-semibold'>Guna & Aadanya</p>
        <p className='text-[14px] text-dark'>12 apr 2020</p>
      </div>
      <p className='text-white bg-main py-2 px-5 rounded-md cursor-pointer max-w-max'>View</p>
    </div>
  </div>
  )
}

export default SuccessStoriesCard