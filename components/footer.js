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
      router.pathname === "/register" ? (
        <div className="footer_main_1 bg-main flex flex-wrap justify-between items-center px-20  ">
          <p className="text-white text-base">
            Copyright © Trichy Vayalur Road Reddy Trust All rights reserved.
            Theme Anews by themeuniver
          </p>
          <div className="flex justify-between text-white items-center">
            <i className="fa-brands fa-facebook mx-3"></i>
            <i className="fa-brands fa-twitter mx-3"></i>
            <i className="fa-brands fa-instagram mx-3"></i>
          </div>
        </div>
      ) : (
        <div className="footer_main bg-main flex max-md:pb-5;">
          <p className="text-white text-base flex-3 pl-15 max-md:text-3xl max-md:">
            Copyright © Trichy Vayalur Road Reddy Trust All rights reserved.
            Theme Anews by themeuniver
          </p>
          <div className=" text-white text-2xl flex-1 max-md:absolute left-[15rem] max-md:text-3xl max-md:mb-44 max-md:flex flex-row">
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