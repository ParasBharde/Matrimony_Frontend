import React from 'react'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()

  return (
    <>
      {router.pathname === "/portfolio/portfolioprofile" ||
      router.pathname === "/portfolio/portfolio" ||
      router.pathname === "/likedprofile/[id]" ? (
        <div className="footer_main_1 bg-main flex flex-wrap justify-between items-center px-20">
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
        <div className="footer_main bg-main flex flex-wrap justify-between items-center px-20 max-md:min-w-fit">
          <p className="text-white text-base py-2 max-md:order-2 max-md:mt-4 ">
            Copyright © Trichy Vayalur Road Reddy Trust All rights reserved.
            Theme Anews by themeuniver
          </p>
          <div className="flex justify-between text-white items-center max-md:order-1 max-sm:order-1 max-md:mt-2 max-sm:text-center max-md:text-2xl max-md:ml-36">
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