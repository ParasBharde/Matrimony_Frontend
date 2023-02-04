import React from 'react'
import Image from 'next/image'
import a2 from "@/assets/signUpAssets/a2.png"
import Stepper from '@/components/registerScreen/stepper'

const Register = () => {
  return (
    <div className='bg-[#E0E0E0] py-10 w-full'>
      <div className='bg-white w-[85%] mx-auto pt-12 pb-10'>
        <Image src={a2} alt="a2" className='mx-auto mb-8'/>
        <p className='text-center text-dark font-[600] text-[24px]'>Register Your Account</p>
        <Stepper/>
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
          <label for="rememberMe" className='text-[#B6B3BE]'>I have read and accept Terms & Conditions</label>

      </div>
      <div className='w-[400px] mx-auto flex justify-end'>
            <p className='text-white bg-main py-2 px-5 rounded-md cursor-pointer max-w-max'>Next</p>
      </div>
      </div>
    </div>
  )
}

export default Register