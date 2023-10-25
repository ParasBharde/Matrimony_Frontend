import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "@/assets/indexAssets/updatedLogo.png";
import Image from "next/image";
import headerLogo from "@/assets/orangeUpdatedLogo.png";

const Sidenav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const defaultPage = "admin";
  const isActive = (page) => {
    return router.pathname === `/${page}`;
  };

  return (
    <>
      <div className="">
        <button
          onClick={() => setIsOpen(!isOpen)}
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        {/* -translate-x-full sm:translate-x-0 */}
        <aside
          id="default-sidebar"
          className={`side_nav fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
            !isOpen && "-translate-x-full"
          } sm:translate-x-0`}
          aria-label="Sidebar"
          onClick={() => setIsOpen(false)}
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/admin"
                  className="flex justify-center items-center p-2 text-base font-normal"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={logo}
                      alt={"Header Logo"}
                      className="pl-0 sm:pl-0 md:pl-5 lg:pl-5 "
                    />
                    <label className="self-center text-xl font-semibold whitespace-nowrap">
                      Matrimony
                    </label>
                  </div>
                </Link>
              </li>
              <li
                className={
                  isActive(defaultPage)
                    ? "flex items-center p-2 text-base rounded text-black bg-white left-0 right-[1196px] bottom-[664px] top-[228px] font-bold"
                    : "flex items-center p-2 text-base font-normal text-white rounded hover:text-white"
                }
              >
                <Link href={`/${defaultPage}`} className=" ">
                  <span
                    onClick={() => setIsOpen(false)}
                    className="flex-1 ml-3 whitespace-nowrap"
                  >
                    Dashboard
                  </span>
                </Link>
              </li>
              <li
                className={
                  isActive("admin/manageuser")
                    ? "flex items-center p-2 text-base rounded text-black bg-white left-0 right-[1196px] bottom-[664px] top-[228px] font-bold"
                    : "flex items-center p-2 text-base font-normal text-white rounded hover:text-white"
                }
              >
                <Link href="/admin/manageuser">
                  <span
                    onClick={() => setIsOpen(false)}
                    className="flex-1 ml-3 whitespace-nowrap"
                  >
                    Manage Users
                  </span>
                </Link>
              </li>
              <li
                className={
                  isActive("admin/managelist")
                    ? "flex items-center p-2 text-base rounded text-black bg-white left-0 right-[1196px] bottom-[664px] top-[228px] font-bold"
                    : "flex items-center p-2 text-base font-normal text-white rounded hover:text-white"
                }
              >
                <Link href="/admin/managelist">
                  <span
                    onClick={() => setIsOpen(false)}
                    className="flex-1 ml-3 whitespace-nowrap"
                  >
                    Members List
                  </span>
                </Link>
              </li>
              <li
                className={
                  isActive("admin/orderHistory")
                    ? "flex items-center p-2 text-base rounded text-black bg-white left-0 right-[1196px] bottom-[664px] top-[228px] font-bold"
                    : "flex items-center p-2 text-base font-normal text-white rounded hover:text-white"
                }
              >
                <Link href="/admin/orderHistory">
                  <span
                    onClick={() => setIsOpen(false)}
                    className="flex-1 ml-3 whitespace-nowrap"
                  >
                    Order History
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <style jsx>{`
        @media (max-width: 600px) {
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

export default Sidenav;
