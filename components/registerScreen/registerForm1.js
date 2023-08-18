/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";

const RegisterForm1 = ({ screen, setScreen }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealconPwd, setIsRevealconPwd] = useState(false);
  const [profiles, setprofiles] = useState([]);
  const [isValidusername, setIsValidusername] = useState(true);
  const [isValidemail, setIsValidemail] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
const router = useRouter()

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    const rg = sessionStorage.getItem("rg1");
    if (rg) {
      const jrg = JSON.parse(rg);
      setUser(jrg.user);
      setEmail(jrg.email);
      setPass(jrg.pass);
    }
  }, []);

  const beforeNextScreen = () => {
    const rg1 = { user, email, pass };
    sessionStorage.setItem("rg1", JSON.stringify(rg1));
  };

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneRegex = /^(?:(?:(?:\+|0{0,2})91(\s*[\-\s]\s*)?|[0]?)?[789]\d{9})$/;

  const validate = () => {
    if (!(user && email && pass && confirmPass)) {
      toast.error("Please Input all fields");
      return false;
    }

    if (!phoneRegex.test(user)) {
      toast.error("Please enter a valid phone number");
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please Enter a valid email");
      return false;
    }

    if (pass.length < 8) {
      toast.error("Password must contain 8 or more characters");
      return false;
    }

    if (pass != confirmPass) {
      toast.error("Password is not equal to Confirm Password");
      return false;
    }

    if (!isChecked) {
      toast.error("Please accept Terms and Conditions");
      return false;
    }

    return true;
  };

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
  // console.log("profiles", profiles);
  useEffect(() => {
    getUser();
  }, []);

  const validateUserName = (event) => {
    const uname = event.target.value;
    if (profiles) {
      for (let profileData of profiles) {
        if (profileData.attributes.username === uname) {
          setIsValidusername(false);
          return false;
        } else {
          setIsValidusername(true);
          setUser(uname);
        }
      }
    }
  };

  const validateEmail = (event) => {
    const uemail = event.target.value;
    if (profiles) {
      for (let profileData of profiles) {
        if (profileData.attributes.email === uemail) {
          // toast.error("Email is already registered");
          setIsValidemail(false);
          return false;
        } else {
          setIsValidemail(true);
          setEmail(uemail);
        }
      }
    }
  };

  return (
    <>
      <div className="w-[400px] mx-auto max-md:ml-5">
        <p className="font-[600] text-[18px]">Account Information</p>
      </div>
      <div className="mt-5 max-w-min mx-auto">
        <p className="text-dark font-[500] text-[14px] mb-2">Username*</p>
        <input
          placeholder="Enter Mobile Number"
          value={user}
          onChange={validateUserName}
          onWheel={(event) => event.currentTarget.blur()}
          type={"number"}
          className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
        />
        {!isValidusername && (
          <p style={{ color: "red", marginTop: "-1rem" }}>
            Username already taken.
          </p>
        )}
      </div>
      <div className="mt-5 max-w-min mx-auto">
        <p className="text-dark font-[500] text-[14px] mb-2">Email*</p>
        <input
          placeholder="Enter Your Email"
          value={email}
          onChange={validateEmail}
          type={"email"}
          className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
        />
        {!isValidemail && (
          <p style={{ color: "red", marginTop: "-1rem" }}>
            Email Id already used.
          </p>
        )}
      </div>
      <div className="mt-5 max-w-min mx-auto">
        <p className="text-dark font-[500] text-[14px] mb-2">Password*</p>
        <div className="flex relative" style={{ width: "100%" }}>
          <input
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            type={isRevealPwd ? "text" : "password"}
            className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              height: "100%",
              top: "-6px",
              right: "0",
              // paddingRight: "1px",
            }}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
          >
            {!isRevealPwd ? (
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5778 13.6334C16.2396 12.1831 15.9738 10.4133 14.7803 9.21976C13.5868 8.02628 11.817 7.76042 10.3667 8.4222L11.5537 9.60918C12.315 9.46778 13.1307 9.69153 13.7196 10.2804C14.3085 10.8693 14.5323 11.6851 14.3909 12.4464L15.5778 13.6334Z"
                  fill="#BDCDD6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.86339 7.80781C5.60443 8.02054 5.35893 8.23562 5.12798 8.44832C4.28009 9.22922 3.59623 10.0078 3.1244 10.5906C2.88801 10.8825 2.70365 11.1268 2.57733 11.2997C2.51414 11.3862 2.46539 11.4549 2.43184 11.5029C2.41506 11.5269 2.40207 11.5457 2.39297 11.559L2.38224 11.5747L2.37908 11.5794L2.37806 11.5809L2.09656 12L2.37741 12.4181L2.37806 12.4191L2.37908 12.4206L2.38224 12.4253L2.39297 12.441C2.40207 12.4543 2.41506 12.4731 2.43184 12.4971C2.46539 12.5451 2.51414 12.6138 2.57733 12.7003C2.70365 12.8732 2.88801 13.1175 3.1244 13.4094C3.59623 13.9922 4.28009 14.7708 5.12798 15.5517C6.79696 17.0888 9.22583 18.75 12 18.75C13.3694 18.75 14.6547 18.3452 15.806 17.7504L14.6832 16.6277C13.8289 17.0123 12.9256 17.25 12 17.25C9.80366 17.25 7.73254 15.9112 6.14416 14.4483C5.36337 13.7292 4.72921 13.0078 4.29019 12.4656C4.14681 12.2885 4.02475 12.1311 3.92572 12C4.02475 11.8689 4.14681 11.7115 4.29019 11.5344C4.72921 10.9922 5.36337 10.2708 6.14416 9.55168C6.39447 9.32114 6.65677 9.09369 6.92965 8.87408L5.86339 7.80781ZM17.0705 15.1258C17.3434 14.9063 17.6056 14.6788 17.8559 14.4483C18.6367 13.7292 19.2708 13.0078 19.7099 12.4656C19.8532 12.2885 19.9753 12.1311 20.0743 12C19.9753 11.8689 19.8532 11.7115 19.7099 11.5344C19.2708 10.9922 18.6367 10.2708 17.8559 9.55168C16.2675 8.08879 14.1964 6.75 12 6.75C11.0745 6.75 10.1712 6.98772 9.31694 7.37228L8.1942 6.24954C9.34544 5.65475 10.6307 5.25 12 5.25C14.7742 5.25 17.2031 6.91121 18.8721 8.44832C19.72 9.22922 20.4038 10.0078 20.8757 10.5906C21.112 10.8825 21.2964 11.1268 21.4227 11.2997C21.4859 11.3862 21.5347 11.4549 21.5682 11.5029C21.585 11.5269 21.598 11.5457 21.6071 11.559L21.6178 11.5747L21.621 11.5794L21.622 11.5809L21.9035 12L21.6224 12.4186L21.621 12.4206L21.6178 12.4253L21.6071 12.441C21.598 12.4543 21.585 12.4731 21.5682 12.4971C21.5347 12.5451 21.4859 12.6138 21.4227 12.7003C21.2964 12.8732 21.112 13.1175 20.8757 13.4094C20.4038 13.9922 19.72 14.7708 18.8721 15.5517C18.6412 15.7644 18.3957 15.9794 18.1368 16.1921L17.0705 15.1258Z"
                  fill="#BDCDD6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.75 19.8107L3.75 4.81066L4.81066 3.75L19.8107 18.75L18.75 19.8107Z"
                  fill="#BDCDD6"
                />
              </svg>
            ) : (
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0001 5.25C9.22586 5.25 6.79699 6.91121 5.12801 8.44832C4.28012 9.22922 3.59626 10.0078 3.12442 10.5906C2.88804 10.8825 2.70368 11.1268 2.57736 11.2997C2.51417 11.3862 2.46542 11.4549 2.43187 11.5029C2.41509 11.5269 2.4021 11.5457 2.393 11.559L2.38227 11.5747L2.37911 11.5794L2.10547 12.0132L2.37809 12.4191L2.37911 12.4206L2.38227 12.4253L2.393 12.441C2.4021 12.4543 2.41509 12.4731 2.43187 12.4971C2.46542 12.5451 2.51417 12.6138 2.57736 12.7003C2.70368 12.8732 2.88804 13.1175 3.12442 13.4094C3.59626 13.9922 4.28012 14.7708 5.12801 15.5517C6.79699 17.0888 9.22586 18.75 12.0001 18.75C14.7743 18.75 17.2031 17.0888 18.8721 15.5517C19.72 14.7708 20.4039 13.9922 20.8757 13.4094C21.1121 13.1175 21.2964 12.8732 21.4228 12.7003C21.4859 12.6138 21.5347 12.5451 21.5682 12.4971C21.585 12.4731 21.598 12.4543 21.6071 12.441L21.6178 12.4253L21.621 12.4206L21.6224 12.4186L21.9035 12L21.622 11.5809L21.621 11.5794L21.6178 11.5747L21.6071 11.559C21.598 11.5457 21.585 11.5269 21.5682 11.5029C21.5347 11.4549 21.4859 11.3862 21.4228 11.2997C21.2964 11.1268 21.1121 10.8825 20.8757 10.5906C20.4039 10.0078 19.72 9.22922 18.8721 8.44832C17.2031 6.91121 14.7743 5.25 12.0001 5.25ZM4.29022 12.4656C4.14684 12.2885 4.02478 12.1311 3.92575 12C4.02478 11.8689 4.14684 11.7115 4.29022 11.5344C4.72924 10.9922 5.36339 10.2708 6.14419 9.55168C7.73256 8.08879 9.80369 6.75 12.0001 6.75C14.1964 6.75 16.2676 8.08879 17.8559 9.55168C18.6367 10.2708 19.2709 10.9922 19.7099 11.5344C19.8533 11.7115 19.9753 11.8689 20.0744 12C19.9753 12.1311 19.8533 12.2885 19.7099 12.4656C19.2709 13.0078 18.6367 13.7292 17.8559 14.4483C16.2676 15.9112 14.1964 17.25 12.0001 17.25C9.80369 17.25 7.73256 15.9112 6.14419 14.4483C5.36339 13.7292 4.72924 13.0078 4.29022 12.4656ZM14.25 12C14.25 13.2426 13.2427 14.25 12 14.25C10.7574 14.25 9.75005 13.2426 9.75005 12C9.75005 10.7574 10.7574 9.75 12 9.75C13.2427 9.75 14.25 10.7574 14.25 12ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92898 15.75 8.25005 14.0711 8.25005 12C8.25005 9.92893 9.92898 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
                  fill="#BDCDD6"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 max-w-min mx-auto">
        <p className="text-dark font-[500] text-[14px] mb-2">
          Confirm Password*
        </p>
        <div className="flex relative" style={{ width: "100%" }}>
          <input
            placeholder="Confirm Your Password"
            value={confirmPass}
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
            type={isRevealconPwd ? "text" : "password"}
            className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              height: "100%",
              top: "-6px",
              right: "0",
              // paddingRight: "1px",
            }}
            onClick={() => setIsRevealconPwd((prevState) => !prevState)}
          >
            {!isRevealconPwd ? (
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5778 13.6334C16.2396 12.1831 15.9738 10.4133 14.7803 9.21976C13.5868 8.02628 11.817 7.76042 10.3667 8.4222L11.5537 9.60918C12.315 9.46778 13.1307 9.69153 13.7196 10.2804C14.3085 10.8693 14.5323 11.6851 14.3909 12.4464L15.5778 13.6334Z"
                  fill="#BDCDD6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.86339 7.80781C5.60443 8.02054 5.35893 8.23562 5.12798 8.44832C4.28009 9.22922 3.59623 10.0078 3.1244 10.5906C2.88801 10.8825 2.70365 11.1268 2.57733 11.2997C2.51414 11.3862 2.46539 11.4549 2.43184 11.5029C2.41506 11.5269 2.40207 11.5457 2.39297 11.559L2.38224 11.5747L2.37908 11.5794L2.37806 11.5809L2.09656 12L2.37741 12.4181L2.37806 12.4191L2.37908 12.4206L2.38224 12.4253L2.39297 12.441C2.40207 12.4543 2.41506 12.4731 2.43184 12.4971C2.46539 12.5451 2.51414 12.6138 2.57733 12.7003C2.70365 12.8732 2.88801 13.1175 3.1244 13.4094C3.59623 13.9922 4.28009 14.7708 5.12798 15.5517C6.79696 17.0888 9.22583 18.75 12 18.75C13.3694 18.75 14.6547 18.3452 15.806 17.7504L14.6832 16.6277C13.8289 17.0123 12.9256 17.25 12 17.25C9.80366 17.25 7.73254 15.9112 6.14416 14.4483C5.36337 13.7292 4.72921 13.0078 4.29019 12.4656C4.14681 12.2885 4.02475 12.1311 3.92572 12C4.02475 11.8689 4.14681 11.7115 4.29019 11.5344C4.72921 10.9922 5.36337 10.2708 6.14416 9.55168C6.39447 9.32114 6.65677 9.09369 6.92965 8.87408L5.86339 7.80781ZM17.0705 15.1258C17.3434 14.9063 17.6056 14.6788 17.8559 14.4483C18.6367 13.7292 19.2708 13.0078 19.7099 12.4656C19.8532 12.2885 19.9753 12.1311 20.0743 12C19.9753 11.8689 19.8532 11.7115 19.7099 11.5344C19.2708 10.9922 18.6367 10.2708 17.8559 9.55168C16.2675 8.08879 14.1964 6.75 12 6.75C11.0745 6.75 10.1712 6.98772 9.31694 7.37228L8.1942 6.24954C9.34544 5.65475 10.6307 5.25 12 5.25C14.7742 5.25 17.2031 6.91121 18.8721 8.44832C19.72 9.22922 20.4038 10.0078 20.8757 10.5906C21.112 10.8825 21.2964 11.1268 21.4227 11.2997C21.4859 11.3862 21.5347 11.4549 21.5682 11.5029C21.585 11.5269 21.598 11.5457 21.6071 11.559L21.6178 11.5747L21.621 11.5794L21.622 11.5809L21.9035 12L21.6224 12.4186L21.621 12.4206L21.6178 12.4253L21.6071 12.441C21.598 12.4543 21.585 12.4731 21.5682 12.4971C21.5347 12.5451 21.4859 12.6138 21.4227 12.7003C21.2964 12.8732 21.112 13.1175 20.8757 13.4094C20.4038 13.9922 19.72 14.7708 18.8721 15.5517C18.6412 15.7644 18.3957 15.9794 18.1368 16.1921L17.0705 15.1258Z"
                  fill="#BDCDD6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.75 19.8107L3.75 4.81066L4.81066 3.75L19.8107 18.75L18.75 19.8107Z"
                  fill="#BDCDD6"
                />
              </svg>
            ) : (
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0001 5.25C9.22586 5.25 6.79699 6.91121 5.12801 8.44832C4.28012 9.22922 3.59626 10.0078 3.12442 10.5906C2.88804 10.8825 2.70368 11.1268 2.57736 11.2997C2.51417 11.3862 2.46542 11.4549 2.43187 11.5029C2.41509 11.5269 2.4021 11.5457 2.393 11.559L2.38227 11.5747L2.37911 11.5794L2.10547 12.0132L2.37809 12.4191L2.37911 12.4206L2.38227 12.4253L2.393 12.441C2.4021 12.4543 2.41509 12.4731 2.43187 12.4971C2.46542 12.5451 2.51417 12.6138 2.57736 12.7003C2.70368 12.8732 2.88804 13.1175 3.12442 13.4094C3.59626 13.9922 4.28012 14.7708 5.12801 15.5517C6.79699 17.0888 9.22586 18.75 12.0001 18.75C14.7743 18.75 17.2031 17.0888 18.8721 15.5517C19.72 14.7708 20.4039 13.9922 20.8757 13.4094C21.1121 13.1175 21.2964 12.8732 21.4228 12.7003C21.4859 12.6138 21.5347 12.5451 21.5682 12.4971C21.585 12.4731 21.598 12.4543 21.6071 12.441L21.6178 12.4253L21.621 12.4206L21.6224 12.4186L21.9035 12L21.622 11.5809L21.621 11.5794L21.6178 11.5747L21.6071 11.559C21.598 11.5457 21.585 11.5269 21.5682 11.5029C21.5347 11.4549 21.4859 11.3862 21.4228 11.2997C21.2964 11.1268 21.1121 10.8825 20.8757 10.5906C20.4039 10.0078 19.72 9.22922 18.8721 8.44832C17.2031 6.91121 14.7743 5.25 12.0001 5.25ZM4.29022 12.4656C4.14684 12.2885 4.02478 12.1311 3.92575 12C4.02478 11.8689 4.14684 11.7115 4.29022 11.5344C4.72924 10.9922 5.36339 10.2708 6.14419 9.55168C7.73256 8.08879 9.80369 6.75 12.0001 6.75C14.1964 6.75 16.2676 8.08879 17.8559 9.55168C18.6367 10.2708 19.2709 10.9922 19.7099 11.5344C19.8533 11.7115 19.9753 11.8689 20.0744 12C19.9753 12.1311 19.8533 12.2885 19.7099 12.4656C19.2709 13.0078 18.6367 13.7292 17.8559 14.4483C16.2676 15.9112 14.1964 17.25 12.0001 17.25C9.80369 17.25 7.73256 15.9112 6.14419 14.4483C5.36339 13.7292 4.72924 13.0078 4.29022 12.4656ZM14.25 12C14.25 13.2426 13.2427 14.25 12 14.25C10.7574 14.25 9.75005 13.2426 9.75005 12C9.75005 10.7574 10.7574 9.75 12 9.75C13.2427 9.75 14.25 10.7574 14.25 12ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92898 15.75 8.25005 14.0711 8.25005 12C8.25005 9.92893 9.92898 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
                  fill="#BDCDD6"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="checkbox-container" >
      <div onClick={handleCheckboxChange} className={`checkbox${isChecked ? ' checked' : ''}`}>
        {isChecked && (
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"/></svg>
        )}
      </div>
      <a  onClick={() => {
                  router.push("/termCondition");
                }}className="ml-2 self-start">I agree to the terms and conditions</a>
    </div>
      <div
        className={`${
          screen != 1 ? "w-[800px]" : "w-[400px]"
        } mx-auto flex justify-end my-3 gap-2`}
      >
        {screen != 1 && (
          <p
            className="text-main bg-white border-2 border-main py-2 px-5 rounded-md cursor-pointer max-w-max"
            onClick={() => {
              setScreen(screen - 1);
            }}
          >
            Back
          </p>
        )}
        <p
          className="text-white bg-main py-2 px-5 rounded-md cursor-pointer max-w-max"
          onClick={() => {
            if (validate()) {
              if (screen <= 3) {
                setScreen(screen + 1);
              }
              beforeNextScreen();
            }
          }}
        >
          Next
        </p>
      </div>
    </>
  );
};

export default RegisterForm1;
