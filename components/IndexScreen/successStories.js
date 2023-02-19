import React from 'react'
import SuccessStoriesCard from './successStoriesCard'

const SuccessStories = (props) => {
  return (
    <>
      <div className="bg-[#E0E0E0] py-20 max-md:min-w-fit max-md:hidden ">
        <p className="text-center font-semibold text-[30px] text-dark mb-3 ">
          Success Stories
        </p>
        <p className="text-center font-normal text-sm text-dark break-normal md:break-all ">
          {props.homedata.Success_Story_desc}
        </p>
        <div className="flex justify-center items-center mt-10 max-md:flex-row ">
          <SuccessStoriesCard />
          <SuccessStoriesCard />
          <SuccessStoriesCard />
          <SuccessStoriesCard />
        </div>
      </div>

      {/* using carousel create responsive successStoriesCard .....  */}

      <div className="bg-[#E0E0E0] py-20  bg-[#E0E0E0] md:hidden">
        <p className="text-center font-semibold text-[30px] text-dark mb-3 ">
          Success Stories
        </p>
        <p className="text-center font-normal text-sm text-dark break-normal md:break-all ">
          {props.homedata.Success_Story_desc}
        </p>
        <div className="flex justify-center items-center mt-10 max-md:flex-row">
          <SuccessStoriesCard />
          {/* <SuccessStoriesCard /> */}
          {/* <SuccessStoriesCard /> */}
          {/* <SuccessStoriesCard /> */}
        </div>
      </div>
    </>
  );
}

export default SuccessStories