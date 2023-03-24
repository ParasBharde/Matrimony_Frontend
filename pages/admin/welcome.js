import React from "react";
import Link from "next/link";

 const Welcome = () => {
  return (
    <>
      <div className="max-w-lg mx-auto my-28 bg-white p-8 rounded-none shadow shadow-slate-300">
        <h1 className="text-2xl font-medium">Welcome Back</h1>
        <p className="text-slate-500 my-2">
          Welcome back! Please enter your details
        </p>

        <form action="" className="my-8">
          <div className="flex flex-col space-y-5">
            <label for="txt">
              <p className="font-medium text-slate-700 pb-2">Name*</p>
              <input
                id="text"
                name="text"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter Your Name"
              />
            </label>
            <label for="pass">
              <p className="font-medium text-slate-700 pb-2">Password*</p>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter Your Password"
              />
            </label>
            <div className=" flex justify-between" >
              <label className="block my-0">
                <input type="checkbox" className="leading-loose" style={{width:'1.5rem', height:'1rem'}}/>
                <span style={{color:'#B6B3BE', fontSize:'1.1rem',}} className="py-2 text-sm leading-snug">{" "}Remember me{" "}</span>
              </label>
              <label className=" my-0">
                <Link
                  href="#"
                  className="cursor-pointer"
                >
                  <span style={{color:'#B6B3BE',fontSize:'1.1rem'}}>Forgot Password</span>
                </Link>
              </label>
            </div>
            <button className=" w-full py-3 font-medium text-white rounded-lg  hover:shadow inline-flex space-x-2 items-center justify-center">
              <span>Sign in</span>
            </button>
            <p className="text-center">
              {"Don't "} have an account ?{" "}
              <Link
                href="#"
                className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
              >
                <span style={{color: "#F98B1D"}} >Sign up </span>
              </Link>
            </p>
          </div>
        </form>
      </div>


      <style jsx>{`
        button {
          background: #f98b1d;
        }
        button:hover {
          background: #f98b1d;
          opacity: 0.7;
        }
        @media (max-width: 600px) {
          div {
            // background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: #e0e0e0;
        }
      `}</style>
    </>
  );
}
export default Welcome