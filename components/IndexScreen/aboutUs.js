import React from "react";

const AboutUs = (props) => {
  console.log("props", props);
  return (
    <div className="aboutusbg break-all">
      <div className="pt-40 pl-24">
        <p className="font-[600] text-[30px]">About Us</p>
        <p className="text-dark font-[400] w-[36rem] text-[14px] my-4 relative inline-flex">
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
