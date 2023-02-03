import React from 'react'
import Image from 'next/image'
import contactInfo from "@/assets/indexAssets/contactInfo.png"

const ContactInformation = () => {
  return (
    <div className='flex justify-center items-center py-20 gap-44 '>
    <div>
      <Image src={contactInfo} alt="Contact Info"/>
    </div>
    <div>
      <p className='text-dark text-[30px] font-semibold '>Contact Information</p>
      <div className='flex  items-center mt-5 '>
         <i className="fa-solid fa-phone text-main text-2xl"></i>
         <div className='border-l border-[#D9D9D9] py-2 pl-8 ml-8'>
           <p className='text-dark text-[18px] font-semibold'>Phone :</p>
           <p className='text-dark opacity-50'>+91 1234567890 / 0987654321</p>
         </div>
      </div>
      <div className='flex  items-center mt-5 '>
         <i className="fa-solid fa-envelope text-main text-2xl"></i>
         <div className='border-l border-[#D9D9D9] py-2 pl-8 ml-8'>
           <p className='text-dark text-[18px] font-semibold'>Email :</p>
           <p className='text-dark opacity-50'>vrrmatrimony@gmail.com</p>
         </div>
      </div>
      <div className='flex  items-center mt-5 '>
         <i className="fa-solid fa-clock text-main text-2xl"></i>
         <div className='border-l border-[#D9D9D9] py-2 pl-8 ml-8'>
           <p className='text-dark text-[18px] font-semibold'>Working Hours :</p>
           <p className='text-dark opacity-50'>Monday to Sunday 10PM - 6PM</p>
         </div>
      </div>
      <div className='flex  items-center mt-5 '>
         <i className="fa-solid fa-location-dot text-main text-3xl"></i>
         <div className='border-l border-[#D9D9D9] py-2 pl-8 ml-8'>
           <p className='text-dark text-[18px] font-semibold'>ADDRESS:</p>
           <p className='text-dark opacity-50'>Trichy Vayalur Road Reddy Matrimony,<br/>
No:1 ,Geetha Nagar, Vayalur Road,<br/>
Trichy - 620017.</p>
         </div>
      </div>
    </div>
   </div>
  )
}

export default ContactInformation