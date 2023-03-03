import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify"

// import axios from 'axios';

const SnpForm = () => {
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [code, setCode] = useState("zertyoaizndoianzodianzdonaizdoinaozdnia");

  const resetPassword = (pass, confirmPass) => {
    var values = JSON.stringify({
      "password": pass,
      "passwordConfirmation": confirmPass,
      "code": code
    });

    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://172.105.57.17:1337/api/auth/reset-password',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : values
    };

    axios(config)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error("reset password error: ",error);
    })

  }

  const validate = () => {
    if (pass.length < 8) {
      toast.error("Password must contain 8 or more characters")
      return false
    }

    if (pass != confirmPass) {
      toast.error("Password is not equal to Confirm Password")
      return false
    }
    console.log(pass, confirmPass);
    resetPassword(pass, confirmPass);
  }
  return (
    <>
      <div className="mt-10 max-w-min mx-auto  ">
        <p className="text-dark font-[500] text-[14px] mb-2">Password</p>
        <input
          placeholder="Enter Your Name"
          type={"password"}
          className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 max-md:w-[22rem]"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <p className="font-[400] text-[14px] opacity-50">
          Must be at least 8 characters
        </p>
      </div>
      <div className="mt-5 max-w-min mx-auto">
        <p className="text-dark font-[500] text-[14px] mb-2">
          Confirm Password
        </p>
        <input
          placeholder="Enter Your Name"
          type={"password"}
          className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 max-md:w-[22rem]"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
      </div>
      <p onClick={validate} className="text-white bg-main py-2 px-5 rounded-md cursor-pointer mt-5  w-[400px] text-center mx-auto max-md:w-[22rem]">
        Reset Password
      </p>
    </>
  );
};

export default SnpForm;
