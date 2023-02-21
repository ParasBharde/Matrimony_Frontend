import React from 'react'
import Image from 'next/image'

const SnpHeader = ({image}) => {
  return (
    <div className=' max-md:pt-10'>
    <div>
      <Image src={image} alt="snpLogo" className='mx-auto max-md:pt-10'/>
    </div>
    <p className='font-[600] text-[18px] text-dark text-center my-3'>Set New Password</p>
    <p className='text-dark opacity-50 font-[500] text-[14px] text-center'>Your new password must be different to<br/>previously used passwords.</p>
  </div>
    
  )
}

export default SnpHeader