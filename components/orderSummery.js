/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import profile from "@/assets/profile.png";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useStorage } from "@/hooks/useStorage";
import { toast } from "react-toastify";

const Managelistdash = () => {
  const [profiles, setprofiles] = useState([]);
  const [search, setSearch] = useState("");
  const [profileToShow, setProfileToShow] = useState([]);
  const [length, setLength] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [ids, setIds] = useState([]);
  const [isPremiumUser, setIsPremiumUser] = useState(["Yuppp Not Data Found!"]);
  const [checkactive, setcheckactive] = useState([]);
  const storage = useStorage();
  console.log(storage);

  useEffect(() => {
    const getUser = () => {
      var config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://172.105.57.17:1337/api/profiles/?populate=%2A&user",
        headers: {
          Authorization:
            "Bearer Bearer 3ad527b6e04e45a25b5c7a57d8e796af06f0853e2fa7c4551566c2096b18b80500bdaf2fc61dace337df1dc8c2a0026075026b10589f9c9d009a72165635b72012c305bf52929b73a79c97e1e5a53e7193f812604f83fa679731fa19540e9ecd7112dc224f0cccd4624294b05ec2864b552bdf7905d65736410f0cf2774c3994",
        },
      };

      axios(config)
        .then(function (response) {
          setprofiles(response.data.data);
          setProfileToShow(response.data.data);
          setLength(Math.ceil(response.data.data.length / 10));
          setTotal(response.data.data.length);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getUser();
  }, []);

  // getData
  useEffect(() => {
    const subscription = () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://172.105.57.17:1337/api/order-histories?populate=user_id.profile_photo.user",
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          console.log(response.data.data);
          let sub = response.data.data
            .filter((u) => u.attributes.user_id.data.id === storage?.user_profile?.id)
            .map((u) => u);
          setIsPremiumUser(sub);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    subscription();
  }, [profileToShow]);

  useEffect(() => {
    if (!search) {
      setProfileToShow(profiles);
    } else {
      let a = [];
      for (let i = 0; i < profiles.length; i++) {
        if (profiles[i].attributes.first_name) {
          console.log(
            profiles[i].attributes.first_name
              .toLowerCase()
              .includes(search.toLowerCase()),
            "first_name"
          );
          if (
            profiles[i].attributes.first_name
              .toLowerCase()
              .includes(search.toLowerCase())
          ) {
            a.push(profiles[i]);
          }
        }
      }
      console.log("Filtered Vendors", a);
      setProfileToShow(a);
    }
  }, [search]);

  const [selectedRows, setSelectedRows] = useState(
    Array(profileToShow.length).fill(false)
  );

  const [stDate, setstDate] = useState("");
  const [expiry, setExpiry] = useState("");

  useEffect(() => {
    //Today Date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const dateOnly = `${year}-${month}-${day}`;
    setstDate(dateOnly);
    // Expiry
    const oneMonthFromToday = new Date();
    oneMonthFromToday.setMonth(oneMonthFromToday.getMonth() + 1);
    const year1 = oneMonthFromToday.getFullYear();
    const month1 = String(oneMonthFromToday.getMonth() + 1).padStart(2, "0");
    const day1 = String(oneMonthFromToday.getDate()).padStart(2, "0");
    const dateOnly1 = `${year1}-${month1}-${day1}`;
    setExpiry(dateOnly1);
  }, []);

  // UpperCase
  function capitalizeFirstLetter(word) {
    return word?.charAt(0).toUpperCase() + word?.slice(1);
  }

  return (
    <>
      <div className="lg:txt lg:flex md:flex relative mt-5 mx-14 justify-between lg:items-center">
        <span className="font-medium ml-60 max-md:ml-0">Order History</span>
      </div>
      {isPremiumUser.length > 0 ? (
        <>
        <div className="user_dash relative overflow-x-auto mt-6">
          <table className="text-sm text-left text-gray-500 overflow-y-scroll">
            <thead
              style={{ color: "rgba(30, 30, 30, 0.5)", fontWeight: "400" }}
              className="text-xs  uppercase "
            >
              <tr>
                <th scope="col" className="px-6 py-3">
                  Reg.No
                </th>
                <th scope="col" className="px-6 py-3">
                  Profile
                </th>
                <th scope="col" className="px-6 py-3">
                  Plan
                </th>
                <th scope="col" className="px-6 py-3">
                  Start Date
                </th>
                <th scope="col" className="px-6 py-3">
                  End Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Marriage Fix Status
                </th>
                {/* <th scope="col" className="px-6 py-3">
                Status
              </th> */}
              </tr>
            </thead>
            <tbody>
              {isPremiumUser &&
                isPremiumUser.map((item, index) => {
                  console.log(item);
                  // start Date
                  const dateStringFromBackend =
                    item?.attributes?.subscription_start_date;
                  const dateFromBackend = new Date(dateStringFromBackend);
                  const year = dateFromBackend.getFullYear();
                  const month = dateFromBackend.getMonth() + 1; // Months are 0-indexed, so add 1
                  const day = dateFromBackend.getDate();
                  const formattedDate = `${year}-${
                    month < 10 ? "0" : ""
                  }${month}-${day < 10 ? "0" : ""}${day}`;

                  // End Date
                  const dateStringFromBackend1 =
                    item?.attributes?.subscription_end_date;
                  const dateFromBackend1 = new Date(dateStringFromBackend1);
                  const year1 = dateFromBackend1.getFullYear();
                  const month1 = dateFromBackend1.getMonth() + 1; // Months are 0-indexed, so add 1
                  const day1 = dateFromBackend1.getDate();
                  const formattedDate1 = `${year1}-${
                    month1 < 10 ? "0" : ""
                  }${month1}-${day1 < 10 ? "0" : ""}${day1}`;

                  // upperCase
                  const plan = item?.attributes?.purchase_plan;
                  const capitalizedWord = capitalizeFirstLetter(plan);
                  return (
                    <tr key={index} className="bg-white border-b">
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {item?.attributes?.user_id?.data.id}
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2 hover:transform hover:scale-150 duration-300">
                            <img
                              alt="user image"
                              className="w-6 h-6 rounded-full"
                              src={`http://172.105.57.17:1337${item?.attributes?.user_id?.data?.attributes?.profile_photo?.data[0]?.attributes?.url}`}
                              width={100}
                              height={100}
                            />
                          </div>
                          <span>
                            {item?.attributes?.user_id?.data?.attributes
                              ?.first_name +
                              " " +
                              item?.attributes?.user_id?.data?.attributes
                                ?.last_name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">{capitalizedWord}</td>
                      <td className="px-6 py-4">
                        {item.attributes?.subscription_start_date
                          ? formattedDate
                          : "--/--"}
                      </td>
                      <td className="px-6 py-4">
                        {item.attributes?.subscription_start_date
                          ? formattedDate1
                          : "--/--"}
                      </td>

                      <td className="px-6 py-4"> {item.attributes?.price} </td>
                      <td className="px-6 py-4">
                        {" "}
                        {item.attributes?.marriage_fixed === false
                          ? "No"
                          : "Yes"}{" "}
                      </td>
                      {/* <td className="font-medium text-left px-2 py-4">
                    {item?.attributes?.status === "active" ? (
                      <span className="bg-green-600 text-white py-2 px-6 rounded text-base ">
                        Active
                      </span>
                    ) : (
                      <span className="bg-red-600 text-white py-2 px-4 rounded text-base ">
                        Expaired
                      </span>
                    )}
                  </td> */}
                    </tr>
                  );
                }, [])}
            </tbody>
          </table>

        </div>
        <div className="flex items-center justify-between  px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <p className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Previous
              </p>
              <p className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </p>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between mb-20">
              <div>
                <span className="text-sm text-gray-700">
                  {currentPage == 1 ? "1" : `${(currentPage - 1) * 10 + 1}`}-
                  {total <= currentPage * 10 ? total : currentPage * 10}{" "}
                  <span className="font-semibold text-gray-900">of</span>{" "}
                  {total}{" "}
                  <span className="font-semibold text-gray-900">Pages</span>
                </span>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px  rounded-md shadow-sm "
                  aria-label="Pagination"
                >
                  <p className="relative inline-flex items-center rounded-l-md border border-gray-400  px-2 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20">
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
                  </p>
                  {Array(length)
                    .fill(0)
                    .map((item, index) => {
                      return (
                        <p
                          key={index}
                          aria-current="page"
                          className="relative z-10 inline-flex items-center border border-gray-400 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20"
                        >
                          {index + 1}
                        </p>
                      );
                    })}
                  <p className="relative inline-flex items-center rounded-r-md border border-gray-400  px-2 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20">
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
                  </p>
                </nav>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className=" px-4 py-3 sm:px-[6rem] h-[80vh]">
          <p className="text-center font-semibold text-xl mt-5">
            Oh! You haven&apos;t purchase any subscription yet!
          </p>
        </div>
      )}
    </>
  );
};
export default Managelistdash;
