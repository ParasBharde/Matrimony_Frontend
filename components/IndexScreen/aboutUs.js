import React from "react";
import { useRouter } from "next/router";

const AboutUs = (props) => {

  const router=useRouter()
  //console.log("props", props);
  return (
    <>
      <div className="aboutusbg break-all max-md:hidden">
        <div className="pt-40 pl-24 md: w-[40rem]  ">
          <p className="font-semibold text-3xl">About Us</p>
          <p className="text-dark font-normal text-sm my-4 relative inline-flex max-md:w-52">
            {props.homedata.About_desc}
          </p>
          <p className="text-white bg-main py-2 px-5 rounded-md cursor-pointer max-w-max" onClick={()=>{router.push("/aboutus")}}>
            Read More
          </p>
        </div>
      </div>
      {/* // dublicate div for responsive  */}

      <div className="aboutusresbg break-all hidden max-md:block max-md:bg-cover relative ">
        <div className="pt-50 p-10 md: w-[40rem] max-md:absolute max-md:bottom-7 max-md:w-[100%] ">
          <p className="font-semibold text-3xl md:max:text-4xl mt-10 ">
            About Us
          </p>
          <p className="text-dark font-normal text-sm my-4 relative inline-flex max-md:text-xl max-md:font-semibold">
            {props.homedata.About_desc}
          </p>
          <p className="text-white bg-main py-2 px-5 mt-6 rounded-md cursor-pointer max-w-max" onClick={()=>{router.push("/aboutus")}}>
            Read More
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
