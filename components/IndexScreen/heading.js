import React from 'react'
import HeadingCard from './headingCard'

const Heading = ({homedata}) => {
  return (
    <div className='bg-[#E0E0E0] py-20'>
        <p className='text-center text-dark text-[30px] font-[600] mb-5'>Trusted Matrimony & Matchmaking Service</p>
        <p className='text-center text-dark text-[14px] font-[400]'>{homedata.Section2_Title_Description}</p>
        <div className='flex justify-center items-center mt-10'>
            <HeadingCard desc={homedata.Section2_Card1_desc}/>
            <HeadingCard desc={homedata.Section2_Card2_desc}/>
            <HeadingCard desc={homedata.Section2_Card3_desc}/> 
        </div>
        
       </div>
  )
}

export default Heading