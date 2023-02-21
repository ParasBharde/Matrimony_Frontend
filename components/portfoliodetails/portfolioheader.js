import React,{useState} from "react";
import Breadcrumb from "@/components/breadcrumb";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Portfolioheader = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");


  return (
    <>
      <Breadcrumb screens={["Home", "Search"]} />
      {/* this part for search button for responsive  */}
      <form
        className="hidden max-md:block max-md:bg-[
#FFFFFF] max-md:pt-8 max-md:pb-8"
      >
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </form>
      {/* this part hidden for responsive  */}

      <div className="portfolio_header max-md:hidden">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2  ">
          <div className="grid lg:grid-cols-5 sm:grid-cols-1">
            <div className="text-center grid">
              <h6 className="text-lg text-grey-400"> {"I'm"} looking for a</h6>
              <div className="font-bold">
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
            <div className="text-center grid">
              <h6 className="text-lg text-grey-400">Star</h6>
              <div className="font-bold">
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
            <div className="text-center grid">
              <h6 className="text-lg text-grey-400">Age</h6>
              <div className="font-bold">
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
            <div className="text-center grid">
              <h6 className="text-lg text-grey-400">Marriage Status</h6>
              <div className="font-bold">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button className="" aria-label="Customise options">
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
            <div className="text-center grid">
              <span className="text-white">b</span>
              <div className="">
                <button className="port_button">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolioheader;
