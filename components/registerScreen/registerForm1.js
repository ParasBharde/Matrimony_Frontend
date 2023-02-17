/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'

const RegisterForm1 = ({screen,setScreen}) => {

  const [user,setUser]=useState("")
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const [confirmPass,setConfirmPass]=useState("")

  useEffect(() => {
    const rg=sessionStorage.getItem("rg1")
    if(rg)
    {
      const jrg=JSON.parse(rg)
      setUser(jrg.user)
      setEmail(jrg.email)
      setPass(jrg.pass)
    }
  }, []);

  const beforeNextScreen=()=>{
    const rg1={user,email,pass}
    sessionStorage.setItem("rg1",JSON.stringify(rg1))
  }


  return (
    <>
    <div className='w-[400px] mx-auto'>
          <p className='font-[600] text-[18px]'>Account Information</p>
        </div>
        <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>User*</p>
        <input placeholder='Enter Your Name'  value={user} onChange={(e)=>{setUser(e.target.value)}} type={"text"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Email*</p>
        <input placeholder='Enter Your Name' value={email} onChange={(e)=>{setEmail(e.target.value)}} type={"email"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Password*</p>
        <input placeholder='Enter Your Name' value={pass} onChange={(e)=>{setPass(e.target.value)}} type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Confirm Password*</p>
        <input placeholder='Enter Your Name' value={confirmPass} onChange={(e)=>{setConfirmPass(e.target.value)}} type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='w-[400px] mx-auto mb-12'>
      <input type="checkbox" name="rememberMe" value="true" className='mr-2'/>
          <label htmlFor="rememberMe" className='text-[#B6B3BE]'>I have read and accept Terms & Conditions</label>
      </div>
      <div className={`${screen!=1?"w-[800px]":"w-[400px]"} mx-auto flex justify-end my-3 gap-2`}>
        {screen!=1&&<p className='text-main bg-white border-2 border-main py-2 px-5 rounded-md cursor-pointer max-w-max' onClick={()=>{setScreen(screen-1)}}>Back</p>}
            <p className='text-white bg-main py-2 px-5 rounded-md cursor-pointer max-w-max' onClick={()=>{if(screen<=3){ setScreen(screen+1)}
          beforeNextScreen()
          }}>Next</p>
      </div>
    </>
  )
}

export default RegisterForm1