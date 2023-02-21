import React from 'react'

const SnpForm = () => {
  return (
    <>
    <div className='mt-10 max-w-min mx-auto  '>
        <p className='text-dark font-[500] text-[14px] mb-2'>Password</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 max-md:w-[22rem]'/>
        <p className='font-[400] text-[14px] opacity-50'>Must be at least 8 characters</p>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Confirm Password</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 max-md:w-[22rem]'/>
      </div>
      <p className='text-white bg-main py-2 px-5 rounded-md cursor-pointer mt-5  w-[400px] text-center mx-auto max-md:w-[22rem]'>Reset Password</p>
    </>
  )
}

export default SnpForm