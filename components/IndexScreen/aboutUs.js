import React from "react";

const AboutUs = (props) => {
  //console.log("props", props);
  return (
    <div className="aboutusbg break-all ">
      <div className="pt-40 pl-24 md: w-[40rem]  ">
        <p className="font-semibold text-3xl">About Us</p>
        <p className="text-dark font-normal text-sm my-4 relative inline-flex max-md:w-52">
          {props.homedata.About_desc}
        </p>
        <p className="text-white bg-main py-2 px-5 rounded-md cursor-pointer max-w-max">
          Read More
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
