import React from "react";

const Topnavbar = () => {
  return (
    <>
    
      <nav
        class="
        top_navbar
      
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
      >
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        
           
            <h1 classNameName="flex justify-start items-center ">
              Welcome 👋 Jenny Wilson
            </h1>
          
         <div className="flex items-center">
         <a
              class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 "
              href="#"
            >
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 20C7.46957 20 6.96086 19.7893 6.58579 19.4142C6.21071 19.0391 6 18.5304 6 18H10C10 18.5304 9.78929 19.0391 9.41421 19.4142C9.03914 19.7893 8.53043 20 8 20ZM16 17H0V15L2 14V8.5C2 5.038 3.421 2.793 6 2.18V0H10V2.18C12.579 2.792 14 5.036 14 8.5V14L16 15V17ZM8 3.75C7.39943 3.71122 6.79871 3.82362 6.2528 4.07693C5.70688 4.33024 5.23317 4.71636 4.875 5.2C4.25255 6.18456 3.94714 7.33638 4 8.5V15H12V8.5C12.0528 7.33639 11.7474 6.18458 11.125 5.2C10.7668 4.71636 10.2931 4.33024 9.7472 4.07693C9.20129 3.82362 8.60057 3.71122 8 3.75Z"
                  fill="#1E1E1E"
                  fill-opacity="0.5"
                />
              </svg>
            </a>
            <a
              class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4"
              href="#"
            >
              <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
            </a>
         </div>
          </div>
        
      </nav>
    </>
  );
};
export default Topnavbar;
