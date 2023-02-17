import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import headerLogo from "@/assets/headerLogo.png";
import avatar from "@/assets/avatar.png";
import { useRouter } from "next/router";
import Link from "next/link";

import downloadIcon from "@/assets/SVG/downloadlogo.svg"

import { useOnHoverOutside } from "@/hooks/useOnHoverOutside";

const Header = () => {
  const router = useRouter();

  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  const [isMenuDropDownOpen1, setMenuDropDownOpen1] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);

  };
  const closeHoverMenu1 = () => {

    setMenuDropDownOpen1(false);
  };
  useOnHoverOutside(dropdownRef, closeHoverMenu);
  useOnHoverOutside(dropdownRef1, closeHoverMenu1);


  return (
    <div className="flex flex-row justify-between items-center mx-20 py-3">
      <Link href="/">
        <div>
          <Image src={headerLogo} alt={"Header Logo"} />
        </div>
      </Link>
      <div className="flex justify-center items-center gap-16 ">
        <div className="flex justify-center items-center text-[16px] font-[400] gap-10">
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
          <div ref={dropdownRef1} className="relative">
            <p className="drop cursor-pointer" onMouseOver={() => setMenuDropDownOpen1(true)}>EN</p>
            {!isMenuDropDownOpen1 && (
            <div className="absolute bg-white right-2 shadow-lg top-12">
              <p className="m-3 w-[100px] cursor-pointer">
                <i className=" mr-5 text-main text-center"></i>
                TA
              </p>
              
            </div>
          )}
          </div>
        </div>
        <div ref={dropdownRef} className="relative">
          <Image
            className="drop"
            // src={avatar}
            alt="avatar"
            onMouseOver={() => setMenuDropDownOpen(true)}
          />
          {isMenuDropDownOpen && (
            <div className="absolute bg-white right-2 shadow-lg top-12">
              <p className="m-3 w-[200px] cursor-pointer">
                <i className="fa-regular fa-circle-user mr-5 text-main"></i>
                Profile
              </p>
              <p className="m-3 w-[200px] cursor-pointer">
                <i className="fa-regular fa-heart mr-5 text-main"></i>Liked Profile
              </p>
              <p className="m-3 w-[200px] cursor-pointer">
                  <i class="fa-solid fa-download mr-5 text-main"></i> Download Profile
              </p>
              <p className="m-3 w-[200px] cursor-pointer">
              <i class="fa-solid fa-lock mr-5 text-main"></i> Change Password
              </p>
              <p className="m-3 w-[200px] cursor-pointer">
                <i className="fa-solid fa-right-from-bracket mr-5 text-main"></i>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
