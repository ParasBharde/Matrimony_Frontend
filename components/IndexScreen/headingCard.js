import React from 'react'
import Image from "next/image"
import logo from "@/assets/indexAssets/bestMatching.png"

const HeadingCard = ({desc}) => {
  return (
    <>
      <div className="bg-white py-8 mx-3 rounded shadow-2xl max-md:w-full">
        <div className="flex justify-center max-md:">
          <Image src={logo} alt="logo" />
        </div>
        <p className="text-dark text-[18px] font-medium text-center max-md:text-4xl max-md:pb-5">
          Best Matching
        </p>
        <p className="text-dark text-[14px] font-normal text-center  max-md:text-2xl">
          ipsum dolor sit amet consectetur.
          <br />
          Nec auctor non eu proin nulla <br />
          mattis sed in. Tincidunt dui neque
          <br />
          duis porttitor
        </p>
      </div>
    </>
  );
}

export default HeadingCard