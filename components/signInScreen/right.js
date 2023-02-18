import React, { useState } from 'react'
import Image from 'next/image'
import a2 from "@/assets/signUpAssets/a2.png"
import { useRouter } from 'next/router'
import axios from "axios"
import {toast} from "react-toastify"

const Right = () => {

  const router=useRouter()

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const login=()=>{

var data = JSON.stringify({
  "data": {
    "email": email,
    "password": password
  }
});

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'http://172.105.57.17:1337/api/user-logins',
  headers: { 
    'Authorization': 'Bearer 3ad527b6e04e45a25b5c7a57d8e796af06f0853e2fa7c4551566c2096b18b80500bdaf2fc61dace337df1dc8c2a0026075026b10589f9c9d009a72165635b72012c305bf52929b73a79c97e1e5a53e7193f812604f83fa679731fa19540e9ecd7112dc224f0cccd4624294b05ec2864b552bdf7905d65736410f0cf2774c3994', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  toast.success("Successfully Logged In")
  router.push("/profiledetail/"+3)
})
.catch(function (error) {
  console.log(error);
  toast.error("Some error occured")
});

  }

  var emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validate=()=>{
    if(!(email&&password))
    {
      toast.error("Enter All Fields")
      return false
    }

    if(!emailRegex.test(email))
    {
      toast.error("Enter Valid Email")
      return false
    }

    if(password.length<8)
    {
      toast.error("Password must contain 8 or more characters")
      return false
    }

    return true
  }

  return (
    <div className="xl:w-[40%] lg:w-[50%] sm:w-[60%] w-full flex flex-col justify-center items-center ">
      <Image src={a2} alt="a2" />
      <p className="text-dark font-[600] text-[24px] mt-10 max-lg:text-white">
        Welcome Back
      </p>
      <p className="text-dark font-[500] text-[14px] opacity-50 max-lg:text-white">
        Welcome back! Please enter your details
      </p>
      <div className="mt-7 lg:w-[400px] sm:w-[300px] w-[90%]">
        <p className="text-dark font-[500] text-[14px] max-lg:text-white">
          Username*
        </p>
        <input
          placeholder="Enter Your Name"
          className="border border-[#E1E1E1] lg:w-[400px] sm:w-[300px] w-[100%] py-2 px-8 rounded-md"
        />
        <div className="xl:w-[40%] lg:w-[50%] sm:w-[60%] w-full flex flex-col justify-center items-center">
          <Image src={a2} alt="a2" />
          <p className="text-dark font-[600] text-[24px] mt-10 ">
            Welcome Back
          </p>
          <p className="text-dark font-[500] text-[14px] opacity-50">
            Welcome back! Please enter your details
          </p>
          <div className="mt-7 lg:w-[400px] sm:w-[300px] w-[90%]">
            <p className="text-dark font-[500] text-[14px]">Email*</p>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Your Email"
              className="border border-[#E1E1E1] lg:w-[400px] sm:w-[300px] w-[100%] py-2 px-8 rounded-md"
            />
          </div>
          <div className="mt-3 lg:w-[400px] sm:w-[300px] w-[90%] ">
            <p className="text-dark font-[500] text-[14px]">Password*</p>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter Your Password"
              type={"password"}
              className="border border-[#E1E1E1] lg:w-[400px] sm:w-[300px] w-[100%] py-2 px-8 rounded-md"
            />
          </div>
          <div className="lg:w-[400px] sm:w-[300px] w-[90%] mx-auto flex justify-between items-center mt-2">
            <div>
              <input type="checkbox" name="rememberMe" value="true" />
              <label for="rememberMe" className="text-[#B6B3BE]">
                Remember Me
              </label>
            </div>
            <div className="mt-3 lg:w-[400px] sm:w-[300px] w-[90%] ">
              <p className="text-dark font-[500] text-[14px] max-lg:text-white">
                Password*
              </p>
              <input
                placeholder="Enter Your Name"
                type={"password"}
                className="border border-[#E1E1E1] lg:w-[400px] sm:w-[300px] w-[100%] py-2 px-8 rounded-md"
              />
            </div>
            <div className="lg:w-[400px] sm:w-[300px] w-[90%] mx-auto flex justify-between items-center mt-2">
              <div>
                <input type="checkbox" name="rememberMe" value="true" />
                <label for="rememberMe" className="text-[#B6B3BE]">
                  Remember Me
                </label>
              </div>
              <p
                className="text-[#B6B3BE] cursor-pointer"
                onClick={() => {
                  router.push("/setNewPassword");
                }}
              >
                Forgot Password
              </p>
            </div>
            <p className="text-white bg-main py-2 px-5 rounded-md cursor-pointer  lg:w-[400px] sm:w-[300px] w-[90%] text-center my-5">
              Login
            </p>
            <p
              className="text-main bg-white border border-main py-2 px-5 rounded-md cursor-pointer lg:w-[400px] sm:w-[300px] w-[90%] text-center"
              onClick={() => {
                router.push("/register");
              }}
            >
              New User Register Here
            </p>
          </div>
          <p
            className="text-white bg-main py-2 px-5 rounded-md cursor-pointer  lg:w-[400px] sm:w-[300px] w-[90%] text-center my-5"
            onClick={() => {
              if (validate()) {
                login();
              }
            }}
          >
            Login
          </p>
          <p
            className="text-main bg-white border border-main py-2 px-5 rounded-md cursor-pointer lg:w-[400px] sm:w-[300px] w-[90%] text-center"
            onClick={() => {
              router.push("/register");
            }}
          >
            New User Register Here
          </p>
        </div>
      </div>
    </div>
  );
}

export default Right