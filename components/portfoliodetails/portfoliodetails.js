import React, { useState, useEffect, useRef } from "react";
import profile from "@/assets/profile.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useOnHoverOutside } from "@/hooks/useOnHoverOutside";
import Redheart from "@/assets/redheart.png";

const Portfoliodetails = ({ postId }) => {
  const router = useRouter();
  const dropdownRef = useRef(null);

  const closeHoverMenu = () => {
    setActive(false);
  };
  useOnHoverOutside(dropdownRef, closeHoverMenu);

  const [profiles, setprofiles] = useState([]);
  const [active, setActive] = useState(false);

  const [isList, issetList] = useState(false);
  const [isGrid, issetGrid] = useState(false);

  async function getUser() {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/profiles/?populate=%2A",
      headers: {
        Authorization:
          "Bearer Bearer 3ad527b6e04e45a25b5c7a57d8e796af06f0853e2fa7c4551566c2096b18b80500bdaf2fc61dace337df1dc8c2a0026075026b10589f9c9d009a72165635b72012c305bf52929b73a79c97e1e5a53e7193f812604f83fa679731fa19540e9ecd7112dc224f0cccd4624294b05ec2864b552bdf7905d65736410f0cf2774c3994",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setprofiles(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //console.log("profiles", profiles);
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    issetList(false);
    issetGrid(true);
  }, []);
  return (
    <>
      <div class="flex items-center justify-between px-4  py-3 sm:px-[6rem]">
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
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
          </div>
          <div>
            <nav
              class="isolate inline-flex -space-x-px "
              aria-label="Pagination"
            >
              <span className="px-2">View by :</span>
              <button
                className="flex"
                onClick={() => {
                  issetList(!isList);
                  issetGrid(!isGrid);
                }}
              >
                {isGrid ? (
                  <>
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_62_22856)">
                        <rect
                          x="2"
                          y="2"
                          width="30"
                          height="30"
                          rx="2"
                          fill="white"
                        />
                        <g clip-path="url(#clip0_62_22856)">
                          <path
                            d="M9 13H13V9H9V13ZM15 25H19V21H15V25ZM9 25H13V21H9V25ZM9 19H13V15H9V19ZM15 19H19V15H15V19ZM21 9V13H25V9H21ZM15 13H19V9H15V13ZM21 19H25V15H21V19ZM21 25H25V21H21V25Z"
                            fill="#F98B1D"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_62_22856"
                          x="0"
                          y="0"
                          width="34"
                          height="34"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_62_22856"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_62_22856"
                            result="shape"
                          />
                        </filter>
                        <clipPath id="clip0_62_22856">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(5 5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_313_5302)">
                        <rect
                          x="2"
                          y="2"
                          width="30"
                          height="30"
                          rx="2"
                          fill="white"
                        />
                        <g clip-path="url(#clip0_313_5302)">
                          <path
                            d="M9 13H13V9H9V13ZM15 25H19V21H15V25ZM9 25H13V21H9V25ZM9 19H13V15H9V19ZM15 19H19V15H15V19ZM21 9V13H25V9H21ZM15 13H19V9H15V13ZM21 19H25V15H21V19ZM21 25H25V21H21V25Z"
                            fill="#8E8E8E"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_313_5302"
                          x="0"
                          y="0"
                          width="34"
                          height="34"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_313_5302"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_313_5302"
                            result="shape"
                          />
                        </filter>
                        <clipPath id="clip0_313_5302">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(5 5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  issetGrid(!isGrid);
                  issetList(!isList);
                }}
              >
                {isList ? (
                  <>
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_313_5306)">
                        <rect
                          x="2"
                          y="2"
                          width="30"
                          height="30"
                          rx="2"
                          fill="white"
                          shape-rendering="crispEdges"
                        />
                        <g clip-path="url(#clip0_313_5306)">
                          <path
                            d="M24 18H10C8.9 18 8 18.9 8 20V24C8 25.1 8.9 26 10 26H24C25.1 26 26 25.1 26 24V20C26 18.9 25.1 18 24 18ZM24 24H10V20H24V24Z"
                            fill="#F98B1D"
                          />
                          <path
                            d="M24 8H10C8.9 8 8 8.9 8 10V14C8 15.1 8.9 16 10 16H24C25.1 16 26 15.1 26 14V10C26 8.9 25.1 8 24 8ZM24 14H10V10H24V14Z"
                            fill="#F98B1D"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_313_5306"
                          x="0"
                          y="0"
                          width="34"
                          height="34"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_313_5306"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_313_5306"
                            result="shape"
                          />
                        </filter>
                        <clipPath id="clip0_313_5306">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(5 5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_62_22860)">
                        <rect
                          x="2"
                          y="2"
                          width="30"
                          height="30"
                          rx="2"
                          fill="white"
                          shape-rendering="crispEdges"
                        />
                        <g clip-path="url(#clip0_62_22860)">
                          <path
                            d="M24 18H10C8.9 18 8 18.9 8 20V24C8 25.1 8.9 26 10 26H24C25.1 26 26 25.1 26 24V20C26 18.9 25.1 18 24 18ZM24 24H10V20H24V24Z"
                            fill="#1E1E1E"
                            fill-opacity="0.5"
                          />
                          <path
                            d="M24 8H10C8.9 8 8 8.9 8 10V14C8 15.1 8.9 16 10 16H24C25.1 16 26 15.1 26 14V10C26 8.9 25.1 8 24 8ZM24 14H10V10H24V14Z"
                            fill="#1E1E1E"
                            fill-opacity="0.5"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_62_22860"
                          x="0"
                          y="0"
                          width="34"
                          height="34"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_62_22860"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_62_22860"
                            result="shape"
                          />
                        </filter>
                        <clipPath id="clip0_62_22860">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(5 5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </>
                )}
              </button>
            </nav>
          </div>
        </div>
      </div>

      <>
        {isList ? (
          <>
            <div className="list_data flex justify-center px-[5rem] pb-[4rem] ">
              <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
                <thead
                  style={{
                    color: "rgba(30, 30, 30, 0.5)",
                    fontWeight: "400",
                    backgroundColor: "#F98B1D",
                    height: "3rem",
                  }}
                  className="text-xs  uppercase"
                >
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                    >
                      <input
                        placeholder="check box"
                        type="checkbox"
                        className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 focus:outline-none  focus:ring-2  focus:ring-gray-400"
                        onclick="checkAll(this)"
                      />
                    </th>
                    <th scope="col" className="px-6 py-3">
                      S.No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Reg.No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Father Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Mobile Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date of Birth
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                {profiles.length > 0 &&
                  profiles.map((itms) => {
                    console.log("itmssss", itms);
                    return (
                      <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td className="px-6 py-4">
                            <input
                              placeholder="check box"
                              type="checkbox"
                              className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800  focus:outline-none focus:ring-2  focus:ring-gray-400"
                              onclick="checkAll(this)"
                            />
                          </td>
                          <td className="px-6 py-4">{itms.id}</td>
                          <td className="px-6 py-4">VRE223</td>

                          <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                              <div className="mr-2">
                                <img
                                  alt="logo"
                                  className="w-6 h-6 rounded-full"
                                  src={`http://172.105.57.17:1337${itms.attributes.profile_photo.data[0].attributes.url}`}
                                  width={100}
                                  height={100}
                                />
                              </div>
                              <span>{itms.attributes.first_name}{" "}
                            {itms.attributes.last_name}</span>
                            </div>
                          </td>
                          
                          <td className="px-6 py-4">
                            {itms.attributes.father_name}
                          </td>
                          <td className="px-6 py-4 ">
                            {itms.attributes.phone_number}
                          </td>
                          <td className="px-6 py-4 ">
                            {itms.attributes.date_of_birth}
                          </td>
                          <td className="px-4 py-4 flex items-center justify-evenly">
                        
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.0007 9.4987V11.9987H2.00065V9.4987H0.333984V11.9987C0.333984 12.9154 1.08398 13.6654 2.00065 13.6654H12.0007C12.9173 13.6654 13.6673 12.9154 13.6673 11.9987V9.4987H12.0007ZM11.1673 6.16536L9.99232 4.99036L7.83398 7.14036V0.332031H6.16732V7.14036L4.00898 4.99036L2.83398 6.16536L7.00065 10.332L11.1673 6.16536Z"
                                fill="#F98B1D"
                              />
                            </svg>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </>
        ) : (
          <>
            <div className="container_card inline-grid grid-cols-4 gap-4">
              {profiles.length > 0 &&
                profiles.map((itms) => {
                  console.log("itmssss", itms);
                  return (
                    <div className="max-w-xs mx-9 mb-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                      <div className="cards">
                        <div className="relative">
                          <picture>
                            <img
                              className="img_card block h-auto w-60"
                              src={`http://172.105.57.17:1337${itms.attributes.profile_photo.data[0].attributes.url}`}
                              alt=""
                            />
                          </picture>

                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              width: "30",
                              height: "25",
                              top: "10",
                              right: "10",
                            }}
                            // onClick={() =>
                            //   router.push({ pathname: "/likedprofile/[id]/" ,
                            //   query: { id: itms.id },
                            // })
                            // }

                            className="absolute top-0 right-0 m-2 rounded flex items-center justify-center w-10 h-11 text-white text-sm font-bold"
                          >
                            <svg
                              className="absolute rounded "
                              id="heart"
                              onmouseover='this.src="/assets/redheart.png"'
                              width="24"
                              height="21"
                              viewBox="0 0 24 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.8401 2.61085C20.3294 2.09985 19.7229 1.6945 19.0555 1.41793C18.388 1.14137 17.6726 0.999023 16.9501 0.999023C16.2276 0.999023 15.5122 1.14137 14.8448 1.41793C14.1773 1.6945 13.5709 2.09985 13.0601 2.61085L12.0001 3.67085L10.9401 2.61085C9.90843 1.57916 8.50915 0.999558 7.05012 0.999558C5.59109 0.999558 4.19181 1.57916 3.16012 2.61085C2.12843 3.64254 1.54883 5.04182 1.54883 6.50085C1.54883 7.95988 2.12843 9.35916 3.16012 10.3908L4.22012 11.4508L12.0001 19.2308L19.7801 11.4508L20.8401 10.3908C21.3511 9.88009 21.7565 9.27366 22.033 8.6062C22.3096 7.93875 22.4519 7.22334 22.4519 6.50085C22.4519 5.77836 22.3096 5.06295 22.033 4.39549C21.7565 3.72803 21.3511 3.12161 20.8401 2.61085V2.61085Z"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <header
                          className="coloumn items-center justify-between leading-tight p-2 md:p-4"
                          onClick={() => {
                            router.push({
                              pathname: "/profiledetail/[id]/",
                              query: { id: itms.id },
                            });
                          }}
                        >
                          <h1 className="text-lg">
                            <span
                              className="no-underline hover:underline text-black cursor-pointer"
                              href="#"
                            >
                              {itms.attributes.first_name}{" "}
                              {itms.attributes.last_name}
                            </span>
                          </h1>
                          <p
                            style={{ color: "rgba(30, 30, 30, 0.5)" }}
                            className="text-grey-darker text-sm"
                          >
                            {itms.attributes.educational_qualification}
                          </p>
                        </header>
                        <footer className="card flex items-center justify-evenly leading-none p-4 md:p-4 ">
                          <p className="ml-2 text-sm">
                            <svg
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 4.3475L8.7275 6.065L9.08 6.8975L9.98 6.9725L11.8325 7.13L10.4225 8.3525L9.74 8.945L9.9425 9.83L10.3625 11.6375L8.7725 10.6775L8 10.1975L7.2275 10.6625L5.6375 11.6225L6.0575 9.815L6.26 8.93L5.5775 8.3375L4.1675 7.115L6.02 6.9575L6.92 6.8825L7.2725 6.05L8 4.3475ZM8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5Z"
                                fill="#F98B1D"
                              />
                            </svg>
                          </p>

                          <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            {" "}
                            {itms.attributes.star}
                          </p>
                          <svg
                            width="2"
                            height="23"
                            viewBox="0 0 2 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1 0V23" stroke="#F98B1D" />
                          </svg>
                          <svg
                            width="14"
                            height="16"
                            viewBox="0 0 14 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.25 2H11.5V0.5H10V2H4V0.5H2.5V2H1.75C0.9175 2 0.2575 2.675 0.2575 3.5L0.25 14C0.25 14.825 0.9175 15.5 1.75 15.5H12.25C13.075 15.5 13.75 14.825 13.75 14V3.5C13.75 2.675 13.075 2 12.25 2ZM12.25 14H1.75V6.5H12.25V14ZM12.25 5H1.75V3.5H12.25V5ZM7 8.75H10.75V12.5H7V8.75Z"
                              fill="#F98B1D"
                            />
                          </svg>
                          <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            20 Years
                          </p>
                          <svg
                            width="2"
                            height="23"
                            viewBox="0 0 2 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1 0V23" stroke="#F98B1D" />
                          </svg>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 1.425C6.87 1.425 7.575 2.13 7.575 3C7.575 3.87 6.87 4.575 6 4.575C5.13 4.575 4.425 3.87 4.425 3C4.425 2.13 5.13 1.425 6 1.425ZM6 8.175C8.2275 8.175 10.575 9.27 10.575 9.75V10.575H1.425V9.75C1.425 9.27 3.7725 8.175 6 8.175ZM6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM6 6.75C3.9975 6.75 0 7.755 0 9.75V12H12V9.75C12 7.755 8.0025 6.75 6 6.75Z"
                              fill="#F98B1D"
                            />
                          </svg>
                          <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            {" "}
                            {itms.attributes.marriage_status}
                          </p>
                        </footer>
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </>
      <style jsx>{`
      .list_data{
        margin-bottom: 4rem;
      }

      `}</style>
    </>
  );
};

export default Portfoliodetails;
