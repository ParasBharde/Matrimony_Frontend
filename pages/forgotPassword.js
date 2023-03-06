import React, { useState } from "react";
import Image from "next/image";
import a2 from "@/assets/signUpAssets/a2.png";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validateEmail = (email) => {
    if (!(emailRegex.test(email))) {
        toast.error("Please Enter a valid email")
        return false
      }
    return true;
  }

  const handleSendEmail = (email) => {
    var data = JSON.stringify({
        "email": email
      });
  
      var config = {
        method: "post",
        url: "http://172.105.57.17:1337/api/auth/forgot-password",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
    axios(config)
    .then((response) => {
        console.log("response", response);
        toast.success("Email sent on registered email address");
    })
    .catch((error) => {
        console.error("error", error);
        toast.error("Something went wrong");
    })
  }

  return (
    <div className="xl:w-[40%] lg:w-[50%] sm:w-[60%] w-full flex flex-col justify-center items-center ">
      <Image src={a2} alt="a2" />
      <p className="text-dark font-[600] text-[24px] mt-10 max-lg:text-white">
        Welcome Back
      </p>
      <p className="text-dark font-[500] text-[14px] opacity-50 max-lg:text-white">
        Welcome back! Please enter your email
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
      <p
        className="text-white bg-main py-2 px-5 rounded-md cursor-pointer  lg:w-[400px] sm:w-[300px] w-[90%] text-center my-5"
        onClick={() => {
            if(validateEmail(email)) {
                console.log("email validate", email);
                handleSendEmail(email);
            }
        }}
      >
        Send Email
      </p>
    </div>
  );
};

export default ForgotPassword;
