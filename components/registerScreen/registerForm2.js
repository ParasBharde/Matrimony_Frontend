import React from 'react'
import Image from 'next/image'
import fileInputImage from "@/assets/fileInput.png"

import Files from "react-files";

const RegisterForm2 = () => {

  function  onFilesChange(files) {
    console.log(files)
  }

   function onFilesError(error, file) {
    console.log('error code ' + error.code + ': ' + error.message)
  }


  return (
    <div className='flex justify-center items-center gap-5'>
        <div>
        <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>First Name *</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>

      <div>
        <p className='my-4'>Choose your type</p>
      <div className='flex items-center gap-[60px]'>
        <div className='flex items-center gap-[10px]'>
            <input type={"radio"} className="h-[20px] w-[20px]"/>
            <label>Groom</label>
        </div>
        <div className='flex items-center gap-[10px]'>
            <input type={"radio"}  className="h-[20px] w-[20px]"/>
            <label>Bride</label>
        </div>
      </div>

      </div>

      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Date Of Birth *</p>
        <input placeholder='Enter Your Name' type={"date"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Height *</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Educational Qualification *</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>

      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Salary / Monthly Earnings *</p>
        <input placeholder='Enter Your Name' type={"date"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Expectation *</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Caste *</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>

      <div>
        <p className='h-[10px] my-6'>Profile Photo *</p>
        <div className='flex justify-between items-center'>

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



        </div>



        <div>



        <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Last Name *</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>

      <div>
        <p className='my-4'>Choose your type</p>
       <div className='flex items-center gap-[60px]'>
        <div className='flex items-center gap-[10px]'>
            <input type={"radio"} className="h-[20px] w-[20px]"/>
            <label>Vegetarian</label>
        </div>
        <div className='flex items-center gap-[10px]'>
            <input type={"radio"}  className="h-[20px] w-[20px]"/>
            <label>Non - Vegetarian</label>
        </div>
      </div>
      </div>

      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Star *</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Color *</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Career Details *</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>


      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Family Property Details *</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Phone Number *</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>
      <div className='mt-5 max-w-min mx-auto'>
        <p className='text-dark font-[500] text-[14px] mb-2'>Marriage Status *</p>
        <input placeholder='Enter Your Name' type={"password"} className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3'/>
      </div>


      <div>
        <p className='h-[10px] my-6'></p>
        <div className='flex justify-between items-center'>
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

        </div>

       
      
      </div>
  )
}

export default RegisterForm2