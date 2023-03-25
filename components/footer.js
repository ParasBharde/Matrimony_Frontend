import React from 'react'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  return (
    <>
      {router.pathname === "/portfolio/portfolioprofile" ||
      router.pathname === "/portfolio/portfolio" ||
      router.pathname === "/likedprofile/[id]" ||
      router.pathname === "/pricingPlan" ||
      router.pathname === "/register" ||
      router.pathname === "/setNewPassword" ||
      router.pathname === "/contactus" ? (
        <div className="footer_main_1 bg-main flex flex-wrap justify-between items-center px-20  z-50 w-auto">
          {/* w-max */}
          <p className="text-white text-base">
            Copyright © Trichy Vayalur Road Reddy Trust All rights reserved.
            Made by Shubhchintak. <a href="https://shubhchintak.co/">https://shubhchintak.co/</a>
          </p>
          <div className="flex justify-between text-white items-center text-2xl">
            <i className="fa-brands fa-facebook mx-3"></i>
            <i className="fa-brands fa-twitter mx-3"></i>
            <i className="fa-brands fa-instagram mx-3"></i>
          </div>
        </div>
      ) : (
        <div className="footer_main  bg-main  flex flex-wrap max-md:pb-5;">
          <p className="text-white text-base flex-3 pl-15 max-md:text-3xl">
            Copyright © Trichy Vayalur Road Reddy Trust All rights reserved.
            Made by Shubhchintak.   <a href="https://shubhchintak.co/"> https://shubhchintak.co/</a>
          </p>
          <div className=" text-white text-2xl flex-1 max-md:absolute left-[4rem] max-md:text-3xl max-md:mb-44 max-md:flex flex-row pl-[30%] ">
            <i className="fa-brands fa-facebook mx-3"></i>
            <i className="fa-brands fa-twitter mx-3"></i>
            <i className="fa-brands fa-instagram mx-3"></i>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer