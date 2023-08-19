import React from 'react'
import SuccessStoriesCard from './successStoriesCard'

const SuccessStories = (props) => {
  return (
    <>
      <div className=" py-20 max-md:min-w-fit max-md:hidden ">
      {/* bg-[#E0E0E0]  */}
        <p className="text-center font-semibold text-[30px] text-dark mb-3 ">
          Success Stories
        </p>
        <p className="text-center font-normal text-sm text-dark break-normal md:break-all ">
          {props.homedata.Success_Story_desc}
        </p>
        <div className="flex justify-center items-center mt-10 max-md:flex-row">
          <SuccessStoriesCard />
          <SuccessStoriesCard />
          <SuccessStoriesCard />
          <SuccessStoriesCard />
        </div>
      </div>

      {/* using carousel create responsive successStoriesCard .....  */}

      <div className=" bg-white py-10 md:hidden ">
         {/* bg-[#E0E0E0] */}
        <p className="text-center font-semibold text-[30px] text-dark mb-3 ">
          Success Stories
        </p>
        <p className="text-center font-normal text-sm text-dark break-normal md:break-all ">
          {props.homedata.Success_Story_desc}
        </p>
        <div className="flex justify-start items-center carousel space-x-4 mt-10 max-md:flex-row max-md:overflow-x-auto">
          <div className="max-md:w-[40rem] max-md:mr-9 max-md: overflow-x-auto">
            <div className='flex w-[260%] overflow-x-auto'>
              <SuccessStoriesCard className="" />
              <SuccessStoriesCard />
              <SuccessStoriesCard />
            </div>
           
            {/* <div className="max-md:w-[40rem]">
              <SuccessStoriesCard />
            </div>
            <div className="max-md:min-w-full">
              <SuccessStoriesCard />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessStories