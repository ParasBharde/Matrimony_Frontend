import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/indexAssets/headerLogo.png";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import Hamburger from "@/assets/SVG/Hamburger";
// import { FaBars } from "@radix-ui/react-icons";

const Hero = (props) => {
  //console.log('props',props)
  const router = useRouter();

  return (
    <div className="relative h-[829.2px]">
      <div className="indexbg absolute top-0 w-full h-[829.2px] -z-10 "></div>
      <div className="absolute top-0 w-full h-[829.2px] bg-black bg-opacity-60 -z-10"></div>
      <div className="flex justify-between items-center pt-10 px-16 z-10">
        <Link href="/">
          <div>
            <Image src={logo} alt={"logo"} />
          </div>
        </Link>
        <div className="text-white flex justify-center items-center text-[16px] font-[600] max-md:hidden">
          <p className="mx-10 cursor-pointer">Home</p>
          <p
            className="mx-10 cursor-pointer"
            onClick={() => {
              router.push("/pricingPlan");
            }}
          >
            Pricing Plan
          </p>
          <p
            className="mx-10 cursor-pointer"
            onClick={() => {
              router.push("/contactus");
            }}
          >
            Contact Us
          </p>
          <p
            className="mx-10 cursor-pointer"
            onClick={() => {
              router.push("/aboutus");
            }}
          >
            About Us
          </p>
          <p className="mx-10 cursor-pointer">EN</p>
        </div>
        <div></div>
        <div className="flex justify-center items-center  max-md:hidden">
          <p
            className="text-white bg-main py-2 px-5 rounded-md mx-2 cursor-pointer"
            onClick={() => {
              router.push("/signIn");
            }}
          >
            Login
          </p>
          <p
            className="text-main bg-white py-2 px-5 rounded-md mx-2 cursor-pointer"
            onClick={() => {
              router.push("/register");
            }}
          >
            Register
          </p>
        </div>
      </div>


      {/* dublicate div start here   */}
      <div className="flex justify-center items-center absolute bottom-[16rem] right-[12rem] px-6 md:hidden max-md:block max-md:flex">
        <p
          className="text-white bg-main py-2 px-5 rounded-md mx-2 cursor-pointer my-5"
          onClick={() => {
            router.push("/signIn");
          }}
        >
          Login
        </p>
        <p
          className="text-main bg-white py-2 px-5 rounded-md mx-2 cursor-pointer "
          onClick={() => {
            router.push("/register");
          }}
        >
          Register
        </p>
      </div>

    
      <div className="absolute right-10 top-14 hidden max-md:block max-sm:block">
        <Hamburger onClick={() => console.log("Clicked")} />
      </div>

      <p className="text-white font-[700] text-[4vw] text-center absolute top-[36%] w-full max-md:text-6xl  ">
        {props.homedata.Hero_Title}
      </p>
      {/* <div className="hidden max-md:block">
          <p className="text-white">dhfsgihdifjgutdg </p>
        </div> */}
    </div>
  );
};

export default Hero;
