import React from "react";
import Image from "next/image";
import profile from "@/assets/profile.png";
import Link from "next/link";
import { useOnHoverOutside } from "@/hooks/useOnHoverOutside";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const Topnav = () => {
  return (
    <>
      <nav
        className="top_navv flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700
        focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light "
      >
        <div className="container-fluid w-full px-6  flex flex-wrap items-center justify-between mx-auto ">
          <span className="flex justify-start items-center ">
            Welcome 👋 Jenny Wilson
          </span>

          <div className="flex items-center">
            {/* <div className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 ">
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
                  fillOpacity="0.5"
                />
              </svg>
            </div> */}

            <div className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4">
              <div className="group relative dropdown">
                <div
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  data-dropdown-toggle="language-dropdown-menu"
                >
                  {/* <Image
                    className="h-8 w-8 rounded-full hover:border-5"
                    src={profile}
                    width={100}
                    height={100}
                    alt=""
                  /> */}

                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.9997 15.3333C14.3009 15.3333 16.1663 13.4679 16.1663 11.1667C16.1663 8.86548 14.3009 7 11.9997 7C9.69849 7 7.83301 8.86548 7.83301 11.1667C7.83301 13.4679 9.69849 15.3333 11.9997 15.3333Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.3125 19.4374C5.93949 18.2025 6.89621 17.1652 8.07661 16.4407C9.257 15.7162 10.615 15.3326 12 15.3326C13.385 15.3326 14.743 15.7162 15.9234 16.4407C17.1038 17.1652 18.0605 18.2025 18.6875 19.4374"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="group-hover:block dropdown-menu hidden absolute right-2 bg-white">
                  <p
                    className="m-3 cursor-pointer flex items-center"
                    variant="contained"
                    onClick={() => signOut()}
                  >
                    <i className="fa-solid fa-right-from-bracket mr-5 text-main"></i>
                    Logout
                  </p>
                </div>
              </div>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                id="language-dropdown-menu"
              >
                <ul className="py-2" role="none">
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        English (US)
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">Deutsch</div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">Italiano</div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
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
