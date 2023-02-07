import React from 'react'

const RegisterForm1 = () => {
  return (
    <>
    <div className='w-[400px] mx-auto'>
          <p className='font-[600] text-[18px]'>Account Information</p>
        </div>
        <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>User*</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Email*</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Password*</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Confirm Password*</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='w-[400px] mx-auto mb-12'>
      <input type="checkbox" name="rememberMe" value="true" className='mr-2'/>
          <label htmlFor="rememberMe" className='text-[#B6B3BE]'>I have read and accept Terms & Conditions</label>
      </div>
    </>
  )
}

export default RegisterForm1