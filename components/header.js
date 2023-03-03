import React, { useState,useRef } from "react";
import Image from "next/image";
import headerLogo from "@/assets/headerLogo.png";
import avatar from "@/assets/avatar.png";
import { useRouter } from "next/router";
import Link from "next/link";
import Hamburger from "@/assets/SVG/Hamburger";

import { useOnHoverOutside } from "@/hooks/useOnHoverOutside";
import { useStorage } from "@/hooks/useStorage";

import {toast} from "react-toastify"

const Header = () => {
  const router = useRouter();

  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  const [isMenuDropDownOpen1, setMenuDropDownOpen1] = useState(false);

  // const closeHoverMenu = () => {
  //   setMenuDropDownOpen(false);
  // };

  const closeHoverMenu1 = () => {
    setMenuDropDownOpen1(false);
  };

  // useOnHoverOutside(dropdownRef, closeHoverMenu);
  useOnHoverOutside(dropdownRef1, closeHoverMenu1);

  const data=useStorage()

  const logout=()=>{
    localStorage.clear()
    sessionStorage.clear()
    toast.success("Logged Out")
    router.push("/")
  }


  return (
    <div className="flex flex-row justify-between items-center  max-md:pt-5 py-3 max-md:w-auto max-md:border-solid border-y-2 max-md:px-5">
      <Link href="/">
        <div>
          <Image src={headerLogo} alt={"Header Logo"} className="pl-5"/>
        </div>
      </Link>
      <div className="flex justify-center items-center gap-16 pr-10">
        <div className="flex justify-center items-center text-[16px] font-[400] gap-10 max-md:hidden">
          <p
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              router.push("/portfolio/portfolio");
            }}
          >
            Search
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              router.push("/pricingPlan");
            }}
          >
            Pricing Plan
          </p>

          <p
            className="cursor-pointer"
            onClick={() => {
              router.push("/contactus");
            }}
          >
            Contact Us
          </p>
          <div ref={dropdownRef1} className="relative max-md:block max-md:text-2xl">
            <p
              className="drop cursor-pointer"
              onMouseOver={() => setMenuDropDownOpen1(true)}
            >
              EN
            </p>
            {isMenuDropDownOpen1 && (
              <div className="absolute bg-white right-2 shadow-lg top-5">
                <p className="m-3 w-[100px] cursor-pointer">
                  <i className=" mr-5 text-main text-center"></i>
                  TA
                </p>
              </div>
            )}
          </div>
        </div>

        {/* add for responsive screen  */}
        <div className="absolute right-2 hidden max-md:block max-sm:block max-md:bg-black">
          <Hamburger onClick={() => console.log("Clicked")} />
        </div>
        {/* ..................   */}
        {data && <div ref={dropdownRef} className="relative max-md:right-10 right-[2rem]">
          <Image
            className="drop "
            src={avatar}
            alt="avatar"
            onMouseOver={() => setMenuDropDownOpen(true)}
          />
          {isMenuDropDownOpen && (
            <div 
              className="absolute bg-white right-2 shadow-lg top-11 z-50"
              onMouseLeave={() => setMenuDropDownOpen(false)}
            >
              <p className="m-3 w-[200px] cursor-pointer" 
              //onClick={() => router.push('/profile/')}
                onClick={() => 
                  {
                    router.push("/profiledetail/" + data.user_profile.id)
                    // setMenuDropDownOpen(false)
                  }
                }
              >
                <i className="fa-regular fa-circle-user mr-5 text-main"></i>
                Profile
              </p>
              <p className="m-3 w-[200px] cursor-pointer"
                onClick={()=>{router.push("/likedprofile/"+data.id)}}
              >
                <i className="fa-regular fa-heart mr-5 text-main"></i>
                Liked Profile
              </p>
              <p className="m-3 w-[200px] cursor-pointer">
                <i className="fa-solid fa-download mr-5 text-main"></i> 
                Download Profile
              </p>
              <p className="m-3 w-[200px] cursor-pointer" onClick={() => router.push('/setNewPassword/')}>
                <i className="fa-solid fa-lock mr-5 text-main"></i> Change Password
              </p>
              <p className="m-3 w-[200px] cursor-pointer"
              onClick={logout}
              >
                <i className="fa-solid fa-right-from-bracket mr-5 text-main"></i>
                Logout
              </p>
            </div>
          )}
        </div>}
      </div>
    </div>
  );
};

export default Header;
