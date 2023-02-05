import React from 'react'

const Footer = () => {
  return (
    <div className='footer_main bg-main flex justify-between items-center h-[70px] px-20'>
        <p className='text-white text-[16px]'>
        Copyright © Trichy Vayalur Road Reddy Trust All rights reserved. Theme Anews by themeuniver
        </p>
        <div className='flex justify-between text-white items-center'>
        <i className="fa-brands fa-facebook mx-3"></i>
        <i className="fa-brands fa-twitter mx-3"></i>
        <i className="fa-brands fa-instagram mx-3"></i>
        </div>
    </div>
  )
}

export default Footer