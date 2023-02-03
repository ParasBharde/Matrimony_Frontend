import React from 'react'
import HeadingCard from './headingCard'

const Heading = () => {
  return (
    <div className='bg-[#E0E0E0] py-20'>
        <p className='text-center text-dark text-[30px] font-[600] mb-5'>Trusted Matrimony & Matchmaking Service</p>
        <p className='text-center text-dark text-[14px] font-[400]'>Lorem ipsum dolor sit amet consectetur. Id nisl at mauris neque phasellus vel risus.<br/>Tristique quis vivamus diam lectus quis sollicitudin.</p>
        <div className='flex justify-center items-center mt-10'>
            <HeadingCard/>
            <HeadingCard/>
            <HeadingCard/> 
        </div>
       </div>
  )
}

export default Heading