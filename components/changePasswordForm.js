import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useStorage } from "@/hooks/useStorage";

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const storage = useStorage();
  console.log(storage)
  useEffect(() => {
    if(storage) {
      setEmail(storage.attributes.email?storage.attributes.email:storage.user_profile.email);
      console.log("storage", storage.attributes.email);
    }
  },[storage])

  const changePassword = (email, currentPassword, pass, confirmPass) => {

    let loginData = JSON.stringify({
      identifier: email,
      password: currentPassword,
    });

    var config = {
      method: "POST",
      url: "http://172.105.57.17:1337/api/auth/local",
      headers: {
        "Content-Type": "application/json",
      },
      data: loginData,
    };

    axios(config)
    .then((response) => {
      console.log("response", response.data.jwt);
      if(response.data.jwt) {
        var values = JSON.stringify({
          username: response.data.user.username,
          email: response.data.user.email,
          password: pass
        });

        var config = {
          method: "PUT",
          maxBodyLength: Infinity,
          url: `http://172.105.57.17:1337/api/users/${response.data.user.id}`,
          headers: {
            Authorization: "Bearer " + response.data.jwt,
            "Content-Type": "application/json",
          },
          data: values,
        };

        axios(config)
          .then((response) => {
            console.log("change password", response);
            toast.success("Password Changed successfully");
            router.push("/profile");
          })
          .catch((error) => {
            console.error("change password error: ", error);
            toast.error("Error in Change Password");
          });
      }

    })
    .catch((error) => {
      console.log("error in getting jwt", error);
      toast.error("Password Incorrect");
    })
  };

  const validate = () => {
    if (pass.length < 8) {
      toast.error("Password must contain 8 or more characters");
      return false;
    }
    if (pass != confirmPass) {
      toast.error("Password is not equal to Confirm Password");
      return false;
    }
    if(pass == currentPassword) {
      toast.error("Please Enter New Password");
      return false;
    }
    console.log(currentPassword, pass, confirmPass);
    changePassword(email, currentPassword, pass, confirmPass);
  };

  return (
    <>
      <div className="mt-10 max-w-min mx-auto">
        <p className="text-dark font-[500] text-[14px] mb-2">Current Password</p>
        <input
          placeholder="Current Password"
          type={"password"}
          className="border border-gray-400 w-[400px] py-2 px-8 rounded-md max-md:w-[22rem]"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        {/* <p className="font-[400] text-[14px] opacity-50">
          Must be at least 8 characters
        </p> */}
      </div>
      <div className="mt-5 max-w-min mx-auto  ">
        <p className="text-dark font-[500] text-[14px] mb-2">Password</p>
        <input
          placeholder="Enter New Password"
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
          placeholder="Confirm Password"
          type={"password"}
          className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 max-md:w-[22rem]"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
      </div>
      <p onClick={validate} className="text-white bg-main py-2 px-5 rounded-md cursor-pointer mt-5  w-[400px] text-center mx-auto max-md:w-[22rem]">
        Change Password
      </p>
    </>
  );
};

export default ChangePasswordForm;
