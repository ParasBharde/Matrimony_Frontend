/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { toast } from "react-toastify"

const EditProfileForm1 = ({ screen, setScreen, userData }) => {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    console.log("userData",userData);
    setUser(userData?.username);
    setEmail(userData?.email);
  },[userData]);

  useEffect(() => {
    const edit = sessionStorage.getItem("edit1")
    if (edit) {
      const userEdit = JSON.parse(edit)
      setUser(userEdit.user)
      setEmail(userEdit.email)
    }
  }, []);

  const beforeNextScreen = () => {
    const edit1 = { user, email }
    sessionStorage.setItem("edit1", JSON.stringify(edit1))
  }

  return (
    <>
    <div className='w-[400px] mx-auto max-md:ml-5'>
          <p className='font-[600] text-[18px]'>Account Information</p>
        </div>
        <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Username*</p>
        <input readOnly placeholder='Enter Username' value={user} type={"text"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 cursor-not-allowed' />
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Email*</p>
        <input readOnly placeholder='Enter Your Email' value={email} type={"email"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 cursor-not-allowed' />
      </div>
      
      <div className={`${screen != 1 ? "w-[800px]" : "w-[400px]"} mx-auto flex justify-end my-3 gap-2`}>
        {screen != 1 && <p className='text-main bg-white border-2 border-main py-2 px-5 rounded-md cursor-pointer max-w-max' onClick={() => { setScreen(screen - 1) }}>Back</p>}
        <p className='text-white bg-main py-2 px-5 rounded-md cursor-pointer max-w-max' onClick={() => {

          if (screen <= 3) { setScreen(screen + 1) }
          beforeNextScreen()
        }}>Next</p>
      </div>
    </>
  )
}

export default EditProfileForm1