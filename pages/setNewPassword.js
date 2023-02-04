import React, { useState } from 'react'
import Breadcrumb from '@/components/breadcrumb'
import SnpHeader from '@/components/setNewPasswordScreen/snpHeader'

import snpH from "@/assets/setNewPasswordAssets/snpHeadingLogo.png"
import snpL from "@/assets/setNewPasswordAssets/snpLogo.png"



const SetNewPassword = () => {

  const [nextScreen,setNextScreen]=useState(false)
  return (

    <div className='bg-[#E0E0E0] pb-16'>
      <Breadcrumb screens={["Home","Change Password"]}/>
      {!nextScreen?(
        <>
        <SnpHeader image={snpH}/>
        <p className='text-white bg-main py-2 px-5 rounded-md cursor-pointer mt-5  w-[400px] text-center mx-auto' onClick={()=>{setNextScreen(true)}}>Continue</p></>
      )
      :
      (
      <>
      <SnpHeader image={snpL}/>
      <div className='mt-10 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Password</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
        <p className='font-[400] text-[14px] opacity-50'>Must be at least 8 characters</p>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Confirm Password</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <p className='text-white bg-main py-2 px-5 rounded-md cursor-pointer mt-5  w-[400px] text-center mx-auto'>Reset Password</p></>
      )
      }
    </div>
  )
}

export default SetNewPassword