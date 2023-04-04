/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useOnHoverOutside } from "@/hooks/useOnHoverOutside";
import axios from "axios";

import { useStorage } from "@/hooks/useStorage";
import { useCalculateAge } from "@/hooks/useCalculateAge";
import { useLikedProfiles } from "@/hooks/useLikedProfiles";
import { toast } from "react-toastify";

const Portfoliodetails = ({ allprofiles, total }) => {
  const router = useRouter();
  const dropdownRef = useRef(null);
  const storageData = useStorage();

  // console.log("allprofiles", allprofiles);
  const calculateAge = useCalculateAge();
  const [active, setActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilePerPage, setProfilePerPage] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [isList, issetList] = useState(false);
  const [isGrid, issetGrid] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [myLikedprofiles, setMyLikedprofiles] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const [currentLikes, setCurrentLikes] = useState([]);

  const [isPremiumUser, setIsPremiumUser] = useState(false);

  useEffect(() => {
    axios
      .get("http://172.105.57.17:1337/api/liked-profiles")
      .then((response) => {
        if (response.data.meta) {
          setPageCount(response.data.meta.pagination.pageCount);
          console.log("pagecount", response.data.meta.pagination.pageCount);
        }
      })
      .catch((error) => {
        console.log("liked profile error", error);
      });

    let allData = [];
    for (let i = 1; i <= pageCount; i++) {
      const getProfiles = () => {
        axios
          .get(
            `http://172.105.57.17:1337/api/liked-profiles?populate=user_permissions_user&populate=user_profile.profile_photo&pagination[page]=${i}`
          )
          .then((response) => {
            let data = response.data.data.filter((profile) => {
              return (
                profile?.attributes?.user_permissions_user?.data?.id ==
                storageData?.id
              );
            });
            allData = [...allData, ...data];
            setMyLikedprofiles(allData);
          })
          .catch((error) => {
            console.error("error", error);
          });
      };
      getProfiles();
    }
  }, [storageData, pageCount]);

  const getLikedProfiles = useCallback(() => {
    let allData = [];
    for (let i = 1; i <= pageCount; i++) {
      axios
        .get(
          `http://172.105.57.17:1337/api/liked-profiles?populate=user_permissions_user&populate=user_profile.profile_photo&pagination[page]=${i}`
        )
        .then((response) => {
          let data = response.data.data.filter((profile) => {
            return (
              profile?.attributes?.user_permissions_user?.data?.id ==
              storageData?.id
            );
          });
          allData = [...allData, ...data];
          setMyLikedprofiles(allData);
        })
        .catch((error) => {
          console.error("error", error);
        });
    }
  }, [storageData, pageCount]);

  // subscription code start
  useEffect(() => {
    if (storageData) {
      axios
        .get(
          `http://172.105.57.17:1337/api/profiles/${storageData?.user_profile?.id}?populate=%2A`
        )
        .then((response) => {
          // console.log("premium",response.data.data.attributes.subscriptions_detail.data.attributes.isTxnSuccessful);
          let subscription =
            response.data.data?.attributes?.subscriptions_detail?.data;
          if (subscription != null) {
            if (subscription?.attributes?.isTxnSuccessful) {
              setIsPremiumUser(subscription?.attributes?.isTxnSuccessful);
            }
          }
        })
        .catch((error) => {
          console.log("error fetching premium user", error);
        });
    }
  }, [storageData]);
  // subscription code end

  const closeHoverMenu = () => {
    setActive(false);
  };
  useOnHoverOutside(dropdownRef, closeHoverMenu);

  // check profile is liked or not
  const isProfileLiked = (id) => {
    for (let prop of myLikedprofiles) {
      if (prop.attributes?.user_profile?.data?.id == id || prop.id == id) {
        // console.log("idsss prop", prop.attributes, id);
        return true;
      }
    }
    return false;
  };

  //findLikedProfileId
  const findLikedProfileId = (id) => {
    for (let prop of myLikedprofiles) {
      if (prop.attributes.user_profile?.data?.id == id) {
        console.log("idsssss", prop.id, id);
        return prop.id;
      }
    }
  };

  // dislike function
  const handleDislike = (id) => {
    console.log("dislike profile id: ", id);
    let likedId = findLikedProfileId(id);
    console.log("dislike id: ", likedId);
    axios
      .delete(`http://172.105.57.17:1337/api/liked-profiles/${likedId}`)
      .then((response) => {
        console.log("dislike:", response);
        getLikedProfiles();
        // router.push(router.pathname);
      })
      .catch((error) => {
        console.error("dislike like error: ", error);
      });
  };

  // pagination code
  useEffect(() => {
    // console.log("allprofiles", allprofiles);
    if (allprofiles.length <= 0) {
      setTotalPage(0);
      setProfiles([]);
    }

    if (allprofiles.length > 0) {
      setTotalPage(Math.ceil(allprofiles.length / profilePerPage));
      let totalProfiles = allprofiles.slice(0, profilePerPage);
      setProfiles(totalProfiles);
    }
  }, [allprofiles, profilePerPage]);

  const handlePagination = (currentPage) => {
    let indexOfLastProfile = currentPage * profilePerPage;
    let indexOfFirstProfile = indexOfLastProfile - profilePerPage;
    setProfiles(allprofiles.slice(indexOfFirstProfile, indexOfLastProfile));
  };

  const nextPage = () => {
    console.log("nextpage");
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      handlePagination(currentPage + 1);
    }
  };

  const previousPage = () => {
    console.log("previousPage");
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      handlePagination(currentPage - 1);
    }
  };

  const handlePageNumberClick = (page) => {
    console.log("page number", page);
    setCurrentPage(page);
    handlePagination(page);
  };
  // pagination code end

  // like profile code start
  const handleLike = (itms, e) => {
    let data = JSON.stringify({
      data: {
        user_permissions_user: storageData.id,
        user_profile: itms.id,
      },
    });
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `http://172.105.57.17:1337/api/liked-profiles`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    let res = axios(config)
      .then((response) => {
        getLikedProfiles();
        console.log(response);
      })
      .catch((error) => {
        console.error("like error: ", error);
      });
    setCurrentLikes([...currentLikes, itms]);
    console.log("res ", res);
  };
  // like profile code end

  useEffect(() => {
    issetList(false);
    issetGrid(true);
  }, []);

  const [selectedRows, setSelectedRows] = useState(
    Array(profiles?.length).fill(false)
  );

  const handleHeaderCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setSelectedRows(Array(profiles.length).fill(isChecked));
  };

  if (profiles.length <= 0) {
    return (
      <>
        <div className=" px-4 py-5 sm:px-[6rem] h-[80vh]">
          <p className="text-center font-semibold text-xl mt-5">
            Don&apos;t have matching profiles!
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className=" px-4 py-3 sm:px-[6rem] ">
        <div className="lg:flex lg:flex-1 lg:items-center lg:justify-between sm:flex sm:flex-1 sm:items-center sm:justify-between ">
          <div>
            <span className="text-sm text-gray-700">
              {currentPage == 1 ? "1" : `${(currentPage - 1) * 10 + 1}`}-
              {total <= currentPage * 10 ? total : currentPage * 10}{" "}
              <span className="font-semibold text-gray-900">of</span>{" "}
              {totalPage}{" "}
              <span className="font-semibold text-gray-900">Pages</span>
            </span>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px max-md:relative max-md:top-[-2rem] left-[18rem] max-md:gap-2  "
              aria-label="Pagination"
            >
              <span className="px-2 py-1 max-md:hidden ">View by :</span>
              <button
                className="flex max-md:flex "
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
                          // className="max-md:bg-red-800"
                        />
                        <g clipPath="url(#clip0_62_22856)">
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
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
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
                        <g clipPath="url(#clip0_313_5302)">
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
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
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
                          shapeRendering="crispEdges"
                        />
                        <g clipPath="url(#clip0_313_5306)">
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
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
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
                          shapeRendering="crispEdges"
                        />
                        <g clipPath="url(#clip0_62_22860)">
                          <path
                            d="M24 18H10C8.9 18 8 18.9 8 20V24C8 25.1 8.9 26 10 26H24C25.1 26 26 25.1 26 24V20C26 18.9 25.1 18 24 18ZM24 24H10V20H24V24Z"
                            fill="#1E1E1E"
                            fillOpacity="0.5"
                          />
                          <path
                            d="M24 8H10C8.9 8 8 8.9 8 10V14C8 15.1 8.9 16 10 16H24C25.1 16 26 15.1 26 14V10C26 8.9 25.1 8 24 8ZM24 14H10V10H24V14Z"
                            fill="#1E1E1E"
                            fillOpacity="0.5"
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
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
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

        {isList ? (
          <div className="list_data flex justify-center mt-[2rem] pb-[4rem] ">
            <table className=" text-sm text-left text-gray-500 divide-y-4 divide-slate-400/[3rem] max-md:hidden  ">
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
                    className="px-6 py-3 text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4"
                  >
                    <input
                      placeholder="check box"
                      type="checkbox"
                      name="chk"
                      id="header-checkbox"
                      className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white focus:outline-none  focus:ring-2  focus:ring-gray-400"
                      onChange={handleHeaderCheckboxChange}
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
                profiles.map((itms, index) => {
                  console.log("itmssss", itms);
                  return (
                    <tbody key={index}>
                      <tr
                        className={`bg-white border-b ${
                          isPremiumUser
                            ? "cursor-pointer"
                            : "cursor-not-allowed"
                        }`}
                        onClick={() => {
                          if (isPremiumUser) {
                            router.push({
                              pathname: "/profiledetail/[id]/",
                              query: { id: itms.id },
                            });
                          }
                        }}
                      >
                        <td className="px-6 py-4">
                          <input
                            placeholder="check box"
                            type="checkbox"
                            className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white  focus:outline-none focus:ring-2  focus:ring-gray-400"
                            checked={selectedRows[index]}
                            onChange={() => {
                              const newSelectedRows = [...selectedRows];
                              newSelectedRows[index] = !newSelectedRows[index];
                              setSelectedRows(newSelectedRows);
                            }}
                          />
                        </td>
                        <td className="px-6 py-4">{itms.id}</td>
                        <td className="px-6 py-4">VRE223</td>

                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center">
                            <div className="mr-2 hover:transform hover:scale-150 duration-300">
                              <img
                                alt="logo"
                                className="w-6 h-6 rounded-full cusrsor-pointer "
                                src={`http://172.105.57.17:1337${itms.attributes.profile_photo.data[0].attributes.url}`}
                                width={100}
                                height={100}
                              />
                            </div>
                            <span className="cusrsor-pointer">
                              {itms.attributes.first_name}{" "}
                              {itms.attributes.last_name}
                            </span>
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
                        <td className="px-4 py-4 flex">
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
        ) : (
          <div className="container_card inline-grid grid-cols-4 gap-[4rem] max-w-screen-2xl max-lg:flex max-lg:flex-col max-lg:min-w-fit">
            {profiles.length > 0 &&
              profiles.map((itms, index) => {
                // console.log("itmssss", itms);
                const age = calculateAge(itms.attributes.date_of_birth);
                return (
                  <div
                    key={index}
                    className="relative mb-2 hover:transform hover:scale-105 duration-300 max-lg:min-w-fit"
                  >
                    <div className="cards relative min-h-[400px]">
                      {!isPremiumUser && (
                        <div className="absolute top-0 left-0 w-full h-full bg-black/[0.3] z-40"></div>
                      )}
                      <div className="relative h-3/5">
                        {!isPremiumUser && (
                          <div className="absolute top-0 left-0 z-40 w-full h-full backdrop-blur-sm"></div>
                        )}
                        <picture>
                          <img
                            className="img_card"
                            src={`http://172.105.57.17:1337${itms.attributes.profile_photo?.data?.[0]?.attributes.url}`}
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
                          className="absolute top-0 right-0 m-2 rounded flex items-center justify-center w-10 h-11 text-white text-sm font-bold"
                        >
                          <svg
                            className={`absolute rounded cursor-pointer fill-current hover:text-[#F98B1D] ${
                              isProfileLiked(itms.id) && "text-[#F98B1D]"
                            }`}
                            id="heart"
                            data-id="liked-profile"
                            onClick={(e) => {
                              if (storageData != null) {
                                let res = isProfileLiked(itms.id);
                                console.log("res", res);
                                if (res != true) {
                                  handleLike(itms);
                                  // e.target.classList.add("text-[#F98B1D]");
                                } else {
                                  handleDislike(itms.id);
                                }
                              } else {
                                toast.error("You must be login first!");
                                router.push("/signIn");
                              }
                            }}
                            width="24"
                            height="21"
                            viewBox="0 0 24 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className={`${
                                isProfileLiked(itms.id) && "text-[#F98B1D]"
                              }`}
                              d="M20.8401 2.61085C20.3294 2.09985 19.7229 1.6945 19.0555 1.41793C18.388 1.14137 17.6726 0.999023 16.9501 0.999023C16.2276 0.999023 15.5122 1.14137 14.8448 1.41793C14.1773 1.6945 13.5709 2.09985 13.0601 2.61085L12.0001 3.67085L10.9401 2.61085C9.90843 1.57916 8.50915 0.999558 7.05012 0.999558C5.59109 0.999558 4.19181 1.57916 3.16012 2.61085C2.12843 3.64254 1.54883 5.04182 1.54883 6.50085C1.54883 7.95988 2.12843 9.35916 3.16012 10.3908L4.22012 11.4508L12.0001 19.2308L19.7801 11.4508L20.8401 10.3908C21.3511 9.88009 21.7565 9.27366 22.033 8.6062C22.3096 7.93875 22.4519 7.22334 22.4519 6.50085C22.4519 5.77836 22.3096 5.06295 22.033 4.39549C21.7565 3.72803 21.3511 3.12161 20.8401 2.61085V2.61085Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <header
                        className="coloumn items-center justify-between leading-tight p-2 md:p-4"
                        onClick={() => {
                          router.push({
                            pathname: "/profiledetail/[id]/",
                            query: {
                              id: itms.id,
                              isLiked: isProfileLiked(itms.id),
                            },
                          });
                        }}
                      >
                        <h1 className="text-lg">
                          <span className="no-underline hover:underline text-black cursor-pointer">
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
                      <footer className="card flex items-center justify-evenly leading-none p-4 md:p-4">
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
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>{age}</p>
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
                    {!isPremiumUser && (
                      <div className="absolute grid place-items-center top-32 ml-16 z-50">
                        <svg
                          className="  flex justify-center items-center w-8 h-12 text-white"
                          viewBox="0 0 26 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.49967 33.833C2.62884 33.833 1.88362 33.5232 1.26401 32.9036C0.643341 32.2829 0.333008 31.5372 0.333008 30.6663V14.833C0.333008 13.9622 0.643341 13.2164 1.26401 12.5958C1.88362 11.9761 2.62884 11.6663 3.49967 11.6663H5.08301V8.49967C5.08301 6.3094 5.85515 4.44212 7.39942 2.89784C8.94265 1.35462 10.8094 0.583008 12.9997 0.583008C15.19 0.583008 17.0572 1.35462 18.6015 2.89784C20.1447 4.44212 20.9163 6.3094 20.9163 8.49967V11.6663H22.4997C23.3705 11.6663 24.1163 11.9761 24.7369 12.5958C25.3565 13.2164 25.6663 13.9622 25.6663 14.833V30.6663C25.6663 31.5372 25.3565 32.2829 24.7369 32.9036C24.1163 33.5232 23.3705 33.833 22.4997 33.833H3.49967ZM12.9997 25.9163C13.8705 25.9163 14.6163 25.6065 15.2369 24.9869C15.8565 24.3663 16.1663 23.6205 16.1663 22.7497C16.1663 21.8788 15.8565 21.1331 15.2369 20.5124C14.6163 19.8928 13.8705 19.583 12.9997 19.583C12.1288 19.583 11.3836 19.8928 10.764 20.5124C10.1433 21.1331 9.83301 21.8788 9.83301 22.7497C9.83301 23.6205 10.1433 24.3663 10.764 24.9869C11.3836 25.6065 12.1288 25.9163 12.9997 25.9163ZM8.24967 11.6663H17.7497V8.49967C17.7497 7.18023 17.2879 6.0587 16.3643 5.13509C15.4406 4.21148 14.3191 3.74967 12.9997 3.74967C11.6802 3.74967 10.5587 4.21148 9.63509 5.13509C8.71148 6.0587 8.24967 7.18023 8.24967 8.49967V11.6663Z"
                            fill="#F98B1D"
                          />
                        </svg>
                        <button
                          className="border-2 border-main bg-main rounded mt-5 flex justify-center items-center  h-10 p-4 text-white"
                          onClick={() => router.push("/pricingPlan/")}
                        >
                          Purchase Plan
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}
        {/* ............ this is for pagination for responsive part ...  */}

        <div className="flex items-center px-4 py-[2rem] sm:px-6 mb-[2rem]">
          <div className="flex flex-1 justify-between sm:hidden">
            <Link
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </Link>
            <Link
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </Link>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <span className="text-sm text-gray-700">
                {currentPage == 1 ? "1" : `${(currentPage - 1) * 10 + 1}`}-
                {total <= currentPage * 10 ? total : currentPage * 10}{" "}
                <span className="font-semibold text-gray-900">of</span>{" "}
                {totalPage}{" "}
                <span className="font-semibold text-gray-900">Pages</span>
              </span>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px  rounded-md shadow-sm "
                aria-label="Pagination"
              >
                <Link
                  href="#"
                  className="relative inline-flex items-center rounded-l-md border border-gray-400  px-2 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20"
                  onClick={previousPage}
                >
                  <span className="sr-only">Previous</span>

                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {Array(Math.ceil(total / 10))
                  .fill(0)
                  .map((item, index) => {
                    return (
                      <p
                        key={index}
                        aria-current="page"
                        onClick={() => handlePageNumberClick(index + 1)}
                        className="relative z-10 inline-flex items-center border border-gray-400 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20"
                      >
                        <span>{index + 1}</span>
                      </p>
                    );
                  })}

                <Link
                  href="#"
                  className="relative inline-flex items-center rounded-r-md border border-gray-400  px-2 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20"
                  onClick={nextPage}
                >
                  <span className="sr-only">Next</span>

                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .list_data {
          margin-bottom: 4rem;
        }
      `}</style>
    </>
  );
};

export default Portfoliodetails;
