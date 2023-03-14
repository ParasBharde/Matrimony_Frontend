import React from 'react'
import Image from 'next/image'
import a2 from "@/assets/signUpAssets/a2.png"
import Stepper from '@/components/registerScreen/stepper'

const EditProfileHeader = ({index}) => {
  return (
    <>
      <div className="max-md:flex-col max-md:auto m-5 ">
        <Image src={a2} alt="a2" className="mx-auto mb-8 " />
        <p className="text-center text-dark font-[600] text-[24px] ">
          Edit Your Profile
        </p>
        <Stepper className="max-md:flex max-md:justify-center" index={index} limit={4}  />
      </div>
    </>
  );
}

export default EditProfileHeader