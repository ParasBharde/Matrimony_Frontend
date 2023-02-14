import React from 'react'
import Image from 'next/image'
import fileInputImage from "@/assets/fileInputBig.png"

import Files from "react-files";

const RegisterForm4 = () => {

  function  onFilesChange(files) {
    console.log(files)
  }

   function onFilesError(error, file) {
    console.log('error code ' + error.code + ': ' + error.message)
  }


  return (
    <>
    <div className='w-[820px] mx-auto'>
      <p className='font-[600] text-[18px]'>Horoscope Information</p>
    </div>
  
    <div className='flex justify-center items-center gap-5'>
  
      <div className='mt-5'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Zodiac Sign *</p>
        <input placeholder='Enter Your Name' type={"password"}
          className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
      </div>
      <div className='mt-5'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Tamil Year *</p>
        <input placeholder='Enter Your Name' type={"password"}
          className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
      </div>
  
    </div>
  
    <div className='flex justify-center items-center gap-5'>
  
      <div className='mt-5'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Tamil Month*</p>
        <input placeholder='Enter Your Name' type={"password"}
          className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
      </div>
      <div className='mt-5'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Udayati Nazhikai *</p>
        <input placeholder='Enter Your Name' type={"password"}
          className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
      </div>
  
    </div>
  
    <div className='flex justify-center items-center gap-5'>
  
      <div className='mt-5'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Day *</p>
        <input placeholder='Enter Your Name' type={"password"}
          className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
      </div>
      <div className='mt-5'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Birth Time *</p>
        <input placeholder='Enter Your Name' type={"password"}
          className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
      </div>
  
    </div>
  
    <div className='flex justify-center items-center gap-5'>
  
      <div className='mt-5'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Star / Foot *</p>
        <input placeholder='Enter Your Name' type={"password"}
          className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
      </div>
      <div className='mt-5'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Ascendant (Laknam) *</p>
        <input placeholder='Enter Your Name' type={"password"}
          className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
      </div>
  
    </div>

    <div className='flex justify-center items-center gap-5'>
  
  <div className='mt-5'>
    <p className='text-dark font-[500] text-[14px] mb-2'>Birthplace*</p>
    <input placeholder='Enter Your Name' type={"password"}
      className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
  </div>
  <div className='mt-5'>
    <p className='text-dark font-[500] text-[14px] mb-2'>Presence of natal Direction *</p>
    <input placeholder='Enter Your Name' type={"password"}
      className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
  </div>

</div>

<div className='w-[820px] mx-auto mt-5'>
  <div className='w-full flex justify-between items-center'>
    <p className='text-dark font-[500] text-[14px]'>Horoscope Doucment</p>
    <p className='text-main font-[400] text-[14px]'>Add more</p>
  </div>
  <div className='w-full flex justify-between items-center mt-3'>

  <Files
          className='files-dropzone cursor-pointer'
          onChange={onFilesChange}
          onError={onFilesError}
          accepts={['image/png', 'image/jpg']}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
  <Image src={fileInputImage} alt={"File Input Image"}/>
  </Files>
  <Files
          className='files-dropzone cursor-pointer'
          onChange={onFilesChange}
          onError={onFilesError}
          accepts={['image/png', 'image/jpg']}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
  <Image src={fileInputImage} alt={"File Input Image"}/>
  </Files>

  </div>

</div>


    </>
  )
}

export default RegisterForm4