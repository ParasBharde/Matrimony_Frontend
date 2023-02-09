import React from "react";
import Image from "next/image";
import headerLogo from "@/assets/headerLogo.png";
import avatar from "@/assets/avatar.png";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between items-center mx-20 py-3">
      <Link href="/">
        <div>
          <Image src={headerLogo} alt={"Header Logo"} />
        </div>
      </Link>
      <div className="flex justify-center items-center gap-16 ">
        <div className="flex justify-center items-center text-[16px] font-[400] gap-10 ">
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

          <p className="cursor-pointer">EN</p>
        </div>
        <Image src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
