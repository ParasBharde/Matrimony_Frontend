import React from "react";
import Image from "next/image";
import profile from "@/assets/profile.png";
import Link from "next/link";

const Topnav = () => {
  return (
    <>
      {/* <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          

          <div className="flex justify-end relative h-16  space-x-99">
          
            <h1 classNameName="txt_top flex justify-start items-center ">
              Welcome 👋 Jenny Wilson
            </h1>
        
            <div className="search_download absolute inset-y-0 right-0 flex justify-end items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              <div className="relative ml-3">
                <div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      <nav
        class="
        top_navv

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
        <div class="container-fluid w-full px-6 container flex flex-wrap items-center justify-between mx-auto">
          <h1 classNameName="flex justify-start items-center ">
            Welcome 👋 Jenny Wilson
          </h1>

          <div className="flex items-center">
            <div class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 ">
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
            </div>

            <div class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4">
              <button
                type="button"
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                data-dropdown-toggle="language-dropdown-menu"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>

              <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
                <ul class="py-2" role="none">
                  <li>
                    <Link
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                   
                        English (US)
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                   
                        Deutsch
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                       
                        Italiano
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                    
                        中文 (繁體)
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Topnav;
