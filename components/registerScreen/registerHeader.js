import React from 'react'
import Image from 'next/image'
import a2 from "@/assets/signUpAssets/a2.png"
import Stepper from '@/components/registerScreen/stepper'

const RegisterHeader = ({index}) => {
  return (
    <>
     <Image src={a2} alt="a2" className='mx-auto mb-8'/>
        <p className='text-center text-dark font-[600] text-[24px]'>Register Your Account</p>
        <Stepper index={index} limit={4}/>
    </>
  )
}

export default RegisterHeader