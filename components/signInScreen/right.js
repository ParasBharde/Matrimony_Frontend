import React from 'react'
import Image from 'next/image'
import a2 from "@/assets/signUpAssets/a2.png"
import { useRouter } from 'next/router'

const Right = () => {

  const router=useRouter()

  return (
    <div className='w-[40%] flex flex-col justify-center items-center'>
    <Image src={a2} alt="a2" />
    <p className='text-dark font-[600] text-[24px] mt-10 '>Welcome Back</p>
    <p className='text-dark font-[500] text-[14px] opacity-50'>Welcome back! Please enter your details</p>
    <div className='mt-7'>
        <p className='text-dark font-[500] text-[14px]'>Username*</p>
        <input placeholder='Enter Your Name' className='border border-[#E1E1E1] w-[400px] py-2 px-8 rounded-md'/>
    </div>
    <div className='mt-3'>
        <p className='text-dark font-[500] text-[14px]'>Password*</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-[#E1E1E1] w-[400px] py-2 px-8 rounded-md'/>
    </div>
    <div className='w-[400px] mx-auto flex justify-between items-center mt-2'>
      <div>
          <input type="checkbox" name="rememberMe" value="true"/>
          <label for="rememberMe" className='text-[#B6B3BE]'>Remember Me</label>
      </div>
      <p className='text-[#B6B3BE] cursor-pointer' onClick={()=>{router.push("/setNewPassword")}}>Forgot Password</p>
    </div>
    <p className='text-white bg-main py-2 px-5 rounded-md cursor-pointer  w-[400px] text-center my-5'>Login</p>
    <p className='text-main bg-white border border-main py-2 px-5 rounded-md cursor-pointer w-[400px] text-center'>New User Register Here</p> 
</div>
  )
}

export default Right