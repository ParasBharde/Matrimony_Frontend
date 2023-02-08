import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Link from "next/link";
import Breadcrumb from '@/components/breadcrumb'
const Portfolioheader = () => {
  const options = ["one", "two", "three"];
  const defaultOption = "Choose";
  return (
    <>
      {/* <div className="button_top">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          <Link href="#">
          <button  className="text-gray-400 hover:text-main text-lg ">Home</button></Link>
          <span className="font-semibold text-gray-900 dark:text-white">
            {" > "}
          </span>{" "}
          <Link href="#">
          <button className="text-main hover:text-main text-lg " aria-current="page">Search</button></Link>{" "}
        </span>
      </div> */}
      <Breadcrumb screens={["Home","Search"]}/>
      <div className="portfolio_header">
        <table className="port_table">
          <thead>
            <tr>
              <th>
                <span className="header_gen">I’m looking for a</span>
              </th>
              <th>
                <span className="header_star">Star</span>
              </th>
              <th>
                <span className="header_age">Age</span>
              </th>
              <th>
                <span className="header_status">Marriage Status</span>
              </th>
            </tr>
          </thead>
          <tbody className="body">
            <tr>
              <th>
                <span className="px-8 py-4 ">
                  <Dropdown
                    className="drpd border-2  rounded"
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                  />
                </span>
              </th>
              <th>
                <span className="px-6 py-4">
                  <Dropdown
                    className="drpd border-2  rounded"
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                  />
                </span>
              </th>
              <th>
                <span className="flex justify-evenly">
                  <input
                    type="text"
                    className="border-2  rounded w-28 py-2"
                    placeholder="From"
                  />
                  <input
                    type="text"
                    className="border-2 w-28 rounded"
                    placeholder="From"
                  />
                </span>
              </th>
              <th>
                <span className="px-8 py-4">
                  <Dropdown
                    className="drpd border-2  rounded"
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                  />
                </span>
              </th>
              <th className="">
                <button className="port_button px-6 py-4">Search</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row_data flex justify-between px-24 ">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-57
          </span>{" "}
          out{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Profile
          </span>
        </span>
        <div className="flex">
          <span className="px-2">View by :</span>
          <div className="flex">
            <svg
              className="svg_port"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z"
                fill="#F98B1D"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_62_21301)">
                <path
                  d="M19 13H5C3.9 13 3 13.9 3 15V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V15C21 13.9 20.1 13 19 13ZM19 19H5V15H19V19Z"
                  fill="#1E1E1E"
                  fill-opacity="0.5"
                />
                <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V9C3 10.1 3.9 11 5 11H19C20.1 11 21 10.1 21 9V5C21 3.9 20.1 3 19 3ZM19 9H5V5H19V9Z"
                  fill="#1E1E1E"
                  fill-opacity="0.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_62_21301">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      {/* <div className=" flex justify-between px-36">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            1-10{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              of
            </span>{" "}
            50{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Pages
            </span>
          </span>
          <div className="flex ">
            <span>View:</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM0 16H4V12H0V16ZM0 10H4V6H0V10ZM6 10H10V6H6V10ZM12 0V4H16V0H12ZM6 4H10V0H6V4ZM12 10H16V6H12V10ZM12 16H16V12H12V16Z"
                fill="#F98B1D"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_62_21301)">
                <path
                  d="M19 13H5C3.9 13 3 13.9 3 15V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V15C21 13.9 20.1 13 19 13ZM19 19H5V15H19V19Z"
                  fill="#1E1E1E"
                  fill-opacity="0.5"
                />
                <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V9C3 10.1 3.9 11 5 11H19C20.1 11 21 10.1 21 9V5C21 3.9 20.1 3 19 3ZM19 9H5V5H19V9Z"
                  fill="#1E1E1E"
                  fill-opacity="0.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_62_21301">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div> */}
    </>
  );
};

export default Portfolioheader;
