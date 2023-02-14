import React from "react";
import Breadcrumb from "@/components/breadcrumb";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Portfolioheader = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");
  return (
    <>
      <Breadcrumb screens={["Home", "Search"]} />
      <div className="portfolio_header">
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
          <div class="grid lg:grid-cols-5 sm:grid-cols-1">
            <div class="text-center grid">
              <h6 class="text-lg text-grey-400">Im looking for a</h6>
              <div class="font-bold">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button
                      className="w-[5rem] h-[35px] inline-flex items-center justify-center text-violet11 shadow-blackA7 outline-none hover:bg-violet3 "
                      aria-label="Customise options"
                    >
                      <input
                        type="text"
                        value="Choose "
                        className="text-violet11 h-[2.5rem] rounded bg-white border-2 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px]"
                      />
                    </button>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                      sideOffset={5}
                    >
                      <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                        New Tab{" "}
                        
                      </DropdownMenu.Item>

                      <DropdownMenu.Arrow className="fill-white" />
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
            </div>
            <div class="text-center grid">
              <h6 class="text-lg text-grey-400">Star</h6>
              <div class="font-bold">
              <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button
                      className="w-[5rem] h-[35px] inline-flex items-center justify-center text-violet11 shadow-blackA7 outline-none hover:bg-violet3 "
                      aria-label="Customise options"
                    >
                      <input
                        type="text"
                        value="Choose "
                        className="text-violet11 h-[2.5rem] rounded bg-white border-2 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px]"
                      />
                    </button>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                      sideOffset={5}
                    >
                      <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                        New Tab{" "}
                      </DropdownMenu.Item>

                      <DropdownMenu.Arrow className="fill-white" />
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
            </div>
            <div class="text-center grid">
              <h6 class="text-lg text-grey-400">Age</h6>
              <div class="font-bold">
                <input
                  type="text"
                  className="border-2  rounded w-28 py-2"
                  placeholder="From"
                />
                <input
                  type="text"
                  className="border-2 w-28 py-2 rounded"
                  placeholder="From"
                />
              </div>
            </div>
            <div class="text-center grid">
              <h6 class="text-lg text-grey-400">Marriage Status</h6>
              <div class="font-bold">
              <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button
                      className=""
                      aria-label="Customise options"
                    >
                      <input
                        type="text"
                        value="Choose "
                        className="text-violet11 h-[2.5rem] rounded bg-white border-2 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px]"
                      />
                    </button>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                      sideOffset={5}
                    >
                      <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                        New Tab{" "}
                      </DropdownMenu.Item>

                      <DropdownMenu.Arrow className="fill-white" />
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
            </div>
            <div class="text-center grid">
              <span class="text-white">b</span>
              <div className="">
                <button className="port_button">Search</button>
              </div>
            </div>
          </div>
        </div>
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
