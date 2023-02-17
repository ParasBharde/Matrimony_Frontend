import React from 'react'
import Left from '@/components/signInScreen/left'
import Right from '@/components/signInScreen/right'


const SignIn = () => {
  return (
    <>
      <div className="flex justify-center items-center overflow-y-hidden max-lg:hidden">
        <Left />
        <Right />
      </div>

      {/* dublicate for responsive designing  */}

      <div className="max-md:min-w-fit hidden max-lg:block">
        {/* create test for manually testing purpose  */}

        <div className="w-full bg-auto">
          <Left />
        </div>

        <div className="absolute top-[2rem] left-[3rem] m-4 max-md:text-white">
          <div className="max-lg:text-4xl font-medium max-lg:mb-7">
            <p>We Bring People Together,Love Unites Them....</p>
          </div>
          <Right />
        </div>
      </div>
    </>
  );
}

export default SignIn