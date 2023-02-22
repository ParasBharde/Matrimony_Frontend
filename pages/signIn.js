/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react'
import Left from '@/components/signInScreen/left'
import Right from '@/components/signInScreen/right'
import { useRouter } from 'next/router'
import { useStorage } from '@/hooks/useStorage'
import {toast} from "react-toastify"


const SignIn = () => {

  const router=useRouter()
  const storageData=useStorage()

  useEffect(()=>{
    if(storageData)
    {
      toast.info("User Already Logged In")
      router.push("/profiledetail/" + storageData.user_profile.id)
    }
  },[storageData])

  return (
    <>
      <div className="flex justify-center items-center overflow-y-hidden max-lg:hidden">
        <Left />
        <Right />
      </div>

      {/* dublicate for responsive designing  */}

      <div className="max-md:min-w-fit hidden max-lg:block">
        {/* create test for manually testing purpose  */}

        <div className="w-full bg-auto">
          <Left />
        </div>

        <div className="absolute top-[2rem] left-[2.5rem] mr-5 max-md:text-white">
          <div className="max-lg:text-4xl font-medium max-lg:mb-7 ml-3">
            <p>We Bring People Together,Love Unites Them....</p>
          </div>
          <Right />
        </div>
      </div>
    </>
  );
}

export default SignIn