import React from "react";

const Customerpofile = () => {
  return (
    <>
      <div className="parent">
        <table className="child table-fixed">
          <div className="table_header flex ">
            <thead className="block">
              <tr>Paras Bharde</tr>
              <tr style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                Reg- No : VRE223
              </tr>
            </thead>
            <thead className="flex space-x-2 mt-2">
              <button className="px-5 rounded  bg-orange-400 py-1.5">
                <a className="flex text-white" href="#">
                  <svg
                    className="mr-2 mt-1"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 11V14H2.5V11H0.5V14C0.5 15.1 1.4 16 2.5 16H14.5C15.6 16 16.5 15.1 16.5 14V11H14.5ZM13.5 7L12.09 5.59L9.5 8.17V0H7.5V8.17L4.91 5.59L3.5 7L8.5 12L13.5 7Z"
                      fill="white"
                    />
                  </svg>
                  Download
                </a>
              </button>
              <button className="px-5 rounded bg-orange-600 py-1.5">
                <a className="flex text-white" href="#">
                  <svg
                    className="mr-2 mt-1"
                    width="17"
                    height="16"
                    viewBox="0 0 15 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 16C1.5 17.1 2.4 18 3.5 18H11.5C12.6 18 13.5 17.1 13.5 16V4H1.5V16ZM14.5 1H11L10 0H5L4 1H0.5V3H14.5V1Z"
                      fill="white"
                    />
                  </svg>
                  Delete
                </a>
              </button>
            </thead>
          </div>
          <div className="first_content p-4 sm:ml-64 ">
            <div className="p-4 ">
              <div className="grid grid-cols-4 gap-10 ">
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
              </div>
             
            </div>
          </div>
          </table>
         
      
      </div>
    </>
  );
};
export default Customerpofile;
