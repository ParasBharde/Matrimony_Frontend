/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { toast } from "react-toastify"
import axios from "axios";

const RegisterForm1 = ({ screen, setScreen }) => {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")

  const [accept, setAccept] = useState(false)

  const [profiles, setprofiles] = useState([]);

  useEffect(() => {
    const rg = sessionStorage.getItem("rg1")
    if (rg) {
      const jrg = JSON.parse(rg)
      setUser(jrg.user)
      setEmail(jrg.email)
      setPass(jrg.pass)
    }
  }, []);

  const beforeNextScreen = () => {
    const rg1 = { user, email, pass }
    sessionStorage.setItem("rg1", JSON.stringify(rg1))
  }

  var nameRegex = /\d/g;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneRegex = /^(?:(?:(?:\+|0{0,2})91(\s*[\-\s]\s*)?|[0]?)?[789]\d{9})$/;

  const validate = () => {

    if (!(user && email && pass && confirmPass)) {
      toast.error("Please Input all fields")
      return false;
    }

    if (!phoneRegex.test(user)) {
      toast.error("Please enter a valid phone number");
      return false;
    }

    if (!(emailRegex.test(email))) {
      toast.error("Please Enter a valid email")
      return false
    }

    if (pass.length < 8) {
      toast.error("Password must contain 8 or more characters")
      return false
    }

    if (pass != confirmPass) {
      toast.error("Password is not equal to Confirm Password")
      return false
    }

    if (!accept) {
      toast.error("Please accept Terms and Conditions")
      return false
    }

    return true
  }

  async function getUser() {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/profiles/?populate=%2A",
      headers: {
        Authorization:
          "Bearer Bearer 3ad527b6e04e45a25b5c7a57d8e796af06f0853e2fa7c4551566c2096b18b80500bdaf2fc61dace337df1dc8c2a0026075026b10589f9c9d009a72165635b72012c305bf52929b73a79c97e1e5a53e7193f812604f83fa679731fa19540e9ecd7112dc224f0cccd4624294b05ec2864b552bdf7905d65736410f0cf2774c3994",
      },
    };

    axios(config)
      .then(function (response) {
        setprofiles(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //console.log("profiles", profiles);
  useEffect(() => {
    getUser();
  }, []);

  const validateUserNameEmail = () => {
    if(profiles) {
      for(let profileData of profiles) {
        if(profileData.attributes.username == user) {
          toast.error("UserName is already taken");
          return false;
        }
        if(profileData.attributes.email == email) {
          toast.error("Email is already registered");
          return false;
        }
      }
      return true;
    }
  }

  return (
    <>
    <div className='w-[400px] mx-auto max-md:ml-5'>
          <p className='font-[600] text-[18px]'>Account Information</p>
        </div>
        <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Username*</p>
        <input placeholder='Enter Mobile Number' value={user} onChange={(e) => { setUser(e.target.value) }} type={"number"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Email*</p>
        <input placeholder='Enter Your Email' value={email} onChange={(e) => { setEmail(e.target.value) }} type={"email"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Password*</p>
        <input placeholder='Enter Password' value={pass} onChange={(e) => { setPass(e.target.value) }} type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Confirm Password*</p>
        <input placeholder='Confirm Your Password' value={confirmPass} onChange={(e) => { setConfirmPass(e.target.value) }} type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
      </div>
      <div className='w-[400px] mx-auto mb-12'>
        <input type="checkbox" checked={accept} onChange={(e) => { setAccept(e.target.checked) }} name="rememberMe" value="true" className='mr-2' />
        <label htmlFor="rememberMe" className='text-[#B6B3BE]'>I have read and accept Terms & Conditions</label>
      </div>
      <div className={`${screen != 1 ? "w-[800px]" : "w-[400px]"} mx-auto flex justify-end my-3 gap-2`}>
        {screen != 1 && <p className='text-main bg-white border-2 border-main py-2 px-5 rounded-md cursor-pointer max-w-max' onClick={() => { setScreen(screen - 1) }}>Back</p>}
        <p className='text-white bg-main py-2 px-5 rounded-md cursor-pointer max-w-max' onClick={() => {

          if (validate()) {
            if(validateUserNameEmail()) {
              if (screen <= 3) { setScreen(screen + 1) }
              beforeNextScreen()
            }
          }
        }}>Next</p>
      </div>
    </>
  )
}

export default RegisterForm1