import React from 'react'
import Image from 'next/image'
import a2 from "@/assets/signUpAssets/a2.png"
import { useRouter } from 'next/router'

const Right = () => {

  const router=useRouter()

  return (
    <div className='xl:w-[40%] lg:w-[50%] sm:w-[60%] w-full flex flex-col justify-center items-center'>
    <Image src={a2} alt="a2" />
    <p className='text-dark font-[600] text-[24px] mt-10 '>Welcome Back</p>
    <p className='text-dark font-[500] text-[14px] opacity-50'>Welcome back! Please enter your details</p>
    <div className='mt-7 lg:w-[400px] sm:w-[300px] w-[90%]'>
        <p className='text-dark font-[500] text-[14px]'>Username*</p>
        <input placeholder='Enter Your Name' className='border border-[#E1E1E1] lg:w-[400px] sm:w-[300px] w-[100%] py-2 px-8 rounded-md'/>
    </div>
    <div className='mt-3 lg:w-[400px] sm:w-[300px] w-[90%] '>
        <p className='text-dark font-[500] text-[14px]'>Password*</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-[#E1E1E1] lg:w-[400px] sm:w-[300px] w-[100%] py-2 px-8 rounded-md'/>
    </div>
    <div className='lg:w-[400px] sm:w-[300px] w-[90%] mx-auto flex justify-between items-center mt-2'>
      <div>
          <input type="checkbox" name="rememberMe" value="true"/>
          <label for="rememberMe" className='text-[#B6B3BE]'>Remember Me</label>
      </div>
      <p className='text-[#B6B3BE] cursor-pointer' onClick={()=>{router.push("/setNewPassword")}}>Forgot Password</p>
    </div>
    <p className='text-white bg-main py-2 px-5 rounded-md cursor-pointer  lg:w-[400px] sm:w-[300px] w-[90%] text-center my-5'>Login</p>
    <p className='text-main bg-white border border-main py-2 px-5 rounded-md cursor-pointer lg:w-[400px] sm:w-[300px] w-[90%] text-center'>New User Register Here</p> 
</div>
  )
}

export default Right