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
      <div className="portfolio_header">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
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
