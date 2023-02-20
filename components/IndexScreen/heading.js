import React from "react";
import HeadingCard from "./headingCard";

const Heading = ({ homedata }) => {
  return (
    <div className="bg-[#E0E0E0] py-20  max-md:w-full">
      <p className="text-center text-dark text-[30px] font-semibold mb-5">
        Trusted Matrimony & Matchmaking Service
      </p>
      <p className="text-center text-dark text-sm font-normal">
        {homedata.Section2_Title_Description}
      </p>
      {/* <div className='flex justify-center items-center mt-10 max-sm:flex-col'> */}
      <div className="grid grid-cols-12 md:px-10 px-5 my-4">
        <div className="col-span-4 max-md:col-span-6 max-sm:col-span-12 max-md:my-3">
          <HeadingCard desc={homedata.Section2_Card1_desc} />
        </div>
        <div className="col-span-4 max-md:col-span-6 max-sm:col-span-12 max-md:my-3">
          <HeadingCard desc={homedata.Section2_Card2_desc} />
        </div>
        <div className="col-span-4 max-md:col-span-6 max-sm:col-span-12 max-md:my-3">
          <HeadingCard desc={homedata.Section2_Card3_desc} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
