import React from 'react'
import SuccessStoriesCard from './successStoriesCard'

const SuccessStories = () => {
  return (
    <div className='bg-[#E0E0E0] py-20 '>
        <p className='text-center font-[600] text-[30px] text-dark mb-3 '>Success Stories</p>
        <p className='text-center font-[400] text-[14px] text-dark'>Lorem ipsum dolor sit amet consectetur. Id nisl at mauris neque phasellus vel risus.<br/>Tristique quis vivamus diam lectus quis sollicitudin.</p>
        <div className='flex justify-center items-center mt-10'>
            <SuccessStoriesCard/>
            <SuccessStoriesCard/>
            <SuccessStoriesCard/>
            <SuccessStoriesCard/>
        </div>
       </div>
  )
}

export default SuccessStories