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
      router.pathname === "/aboutus" ||
      router.pathname === "/downloadProfile" ||
      router.pathname === "/profile" ||
      router.pathname === "/editProfile" ||
      router.pathname === "/contactus" || 
      router.pathname === "/orderHistory"      ? (
        <div className="footer_main_1 bg-main flex flex-wrap justify-between items-center z-50">
          {/* w-max */}
          <p className="text-white text-base">
            Made by Shubhchintak. <a href="https://shubhchintak.co/">https://shubhchintak.co/</a>
          </p>
          <div className="flex justify-between text-white items-center text-2xl">
            <i className="fa-brands fa-facebook mx-3"></i>
            <i className="fa-brands fa-twitter mx-3"></i>
            <i className="fa-brands fa-instagram mx-3"></i>
          </div>
        </div>
      ) : (
        <div className="footer_main  bg-main">
          <p className="text-white text-base ">
            Made by Shubhchintak. <a href="https://shubhchintak.co/"> https://shubhchintak.co/</a>
          </p>
          <div className="footer_icon text-white text-2xl  ">
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