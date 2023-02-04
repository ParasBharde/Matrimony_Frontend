import React from "react";
import Dashboard from "@/components/customerpanel/dashboard";
import Sidenav from "@/components/customerpanel/sidenav";
import Topnav from "@/components/customerpanel/topnav";

const Adminpanel = () => {
  return (
    <>
      {/* Side Navbar */}
      <Sidenav />

      {/* Top NavBar */}
      {/* <div className="flex flex-col ml-60">
        <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
          <ul className="flex items-center">
            <li>
              <h1
                style={{ color: "#1E1E1E" }}
                className="ml-60 lg:pl-0 sm:ml-60"
              >
                Welcome 👋 Jenny Wilson
              </h1>
            </li>
          </ul>

          <ul className="flex items-center">
            <li className="pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </li>
            <li className="h-10 w-10">
              <img
                className="h-full w-full rounded-full mx-auto"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="profile woman"
              />
            </li>
          </ul>
        </nav>
      </div> */}
      <Topnav/>

      {/* Hedader Data */}
      <Dashboard />

      <style jsx>{`
        button {
          background: #f98b1d;
        }
        button:hover {
          background: #f98b1d;
          opacity: 0.7;
        }
        .user{
          color: black;
          disp
    
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
};
export default Adminpanel;
