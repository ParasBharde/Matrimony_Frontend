import React, { useState } from 'react'
import Image from 'next/image'
import a2 from "@/assets/signUpAssets/a2.png"
import { useRouter } from 'next/router'
import axios from "axios"
import { toast } from "react-toastify"

const Right = () => {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe,setRememberMe]=useState(false)

  const login = () => {

    var data = JSON.stringify({
      "identifier": email,
      "password": password
    });

    var config = {
      method: 'post',
      url: 'http://172.105.57.17:1337/api/auth/local',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

var config2 = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'http://172.105.57.17:1337/api/users/me?populate=user_profile',
  headers: { 
    'Authorization': 'Bearer '+response.data.jwt
  }
};

axios(config2)
.then(function (response) {

  if(rememberMe)
  {
    localStorage.setItem("user",JSON.stringify(response.data))
  }
  else
  {
    sessionStorage.setItem("user",JSON.stringify(response.data))
  }
  
  toast.success("Successfully Logged In")
  router.push("/profiledetail/" + response.data.user_profile.id)
})
.catch(function (error) {
  toast.error(error.response.data.error.message)
});

        
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.error.message)
      });
  }

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validate = () => {
    if (!(email && password)) {
      toast.error("Enter All Fields")
      return false
    }

    if (!emailRegex.test(email)) {
      toast.error("Enter Valid Email")
      return false
    }

    if (password.length < 8) {
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
      </div>
      {/* <div className="xl:w-[40%] lg:w-[50%] sm:w-[60%] w-full flex flex-col justify-center items-center">
          <Image src={a2} alt="a2" />
          <p className="text-dark font-[600] text-[24px] mt-10 ">
            Welcome Back
          </p>
          <p className="text-dark font-[500] text-[14px] opacity-50">
            Welcome back! Please enter your details
          </p> */}

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
          <input type="checkbox" name="rememberMe" value={rememberMe} onChange={(e)=>{setRememberMe(e.target.checked)}} />
          <label htmlFor="rememberMe" className="text-[#B6B3BE] ml-2">
            Remember Me
          </label>
        </div>

        <div className="lg:w-[250px] sm:w-[300px] w-[90%] mx-auto flex justify-between items-center">
          <p
            className="text-[#B6B3BE] cursor-pointer ml-32"
            onClick={() => {
              router.push("/setNewPassword");
            }}
          >
            Forgot Password
          </p>
        </div>
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


  );
}

export default Right