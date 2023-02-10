import React from 'react'
import SuccessStoriesCard from './successStoriesCard'

const SuccessStories = (props) => {
  return (
    <div className='bg-[#E0E0E0] py-20 '>
        <p className='text-center font-[600] text-[30px] text-dark mb-3 '>Success Stories</p>
        <p className='text-center font-[400] text-[14px] text-dark break-normal md:break-all '>{props.homedata.Success_Story_desc}</p>
        <div className='flex justify-center items-center mt-10'>
            <SuccessStoriesCard />
            <SuccessStoriesCard />
            <SuccessStoriesCard />
            <SuccessStoriesCard />
        </div>
       </div>
  )
}

export default SuccessStories