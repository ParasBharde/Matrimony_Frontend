import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/breadcrumb";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import { useStorage } from "@/hooks/useStorage";

const languages = [
  { label: "Tamil", value: "/auto/ta" },
  { label: "English", value: "/auto/en" },
];
const Portfolioheader = ({ handleFilterQuery }) => {
  const storageData = useStorage();
  const [star, setStar] = useState("Choose");
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [looking, setlooking] = useState("Choose");
  const [marriageStatus, setMarriageStatus] = useState("Choose");
  const [searchin, setSearch] = useState("");

  const stars = [
    "Choose",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpius",
    "Sagittarius",
    "Capricornus",
    "Aquarius",
    "Pisces",
  ];

  const ages = ["Choose", "18-25", "26-35", "36-45", "46-55", "56-65"];
  const lookingfor = ["Choose", "Groom", "Bride"];
  const marriageStatuses = [
    "Choose",
    "Single",
    "Married",
    "Widowed",
    "Divorced",
    "Separated",
    "Registerd-Partnership",
  ];
  const [isPremiumUser, setPremiumUser] = useState([]);

  const search = () => {
    const query = {
      looking,
      star,
      ageFrom,
      ageTo,
      marriageStatus,
    };
    handleFilterQuery(query);
    console.log(query);
  };

console.log(storageData)
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const check = storageData?.user_profile?.id != undefined ? storageData?.user_profile?.id  : storageData?.id;
  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch(
          `http://172.105.57.17:1337/api/user-active-plans?filters[user_id]=${check}`
        );
        const data = await response.json();
       
          setUserData(data.data);
      
        // setUserData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(true);
      }
    }

    fetchData();
  }, [storageData,check]);

  console.log("userData", userData);

  return (
    <>
      <div className="flex justify-between mb-5 ">
        <Breadcrumb screens={["Home", "Search"]} />
        {!loading ? (
          <p>Loading...</p>
        ) : (userData?.length > 0 && (
            <div className="grid items-center px-24 max-md:mt-5">
              <span className="font-medium max-md:text-sm">
                Total number profile view:{" "}
                {userData[0]?.attributes.member_display_limit}
              </span>
              <span className="font-medium max-md:text-sm">
                Viewed Profile: {userData[0]?.attributes.member_viewed}
              </span>
              <span className="font-medium max-md:text-sm">
                Remaining Profile:{" "}
                {userData[0]?.attributes.member_display_limit -
                  userData[0]?.attributes.member_viewed}
              </span>
            </div>
          )
        )}
        {/* {isPremiumUser?.length > 0 &&  (
         
        )} */}
      </div>
      <form className="hidden max-md:block max-md:bg-[#FFFFFF] max-md:pt-8 max-md:pb-8">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-sm   "
            placeholder="Search Mockups, Logos..."
            value={searchin}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
      {/* this part hidden for responsive  */}

      <div className="portfolio_header max-md:hidden ">
        <div className="flex justify-around px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2  ">
          <div className="grid lg:grid-cols-5 sm:grid-cols-1">
            <div className="mt-5 text-center grid max-w-min mx-10">
              <p className="text-dark text-left font-[500] text-[14px] mb-2">
                I’m looking for a
              </p>
              <select
                value={looking}
                onChange={(e) => {
                  setlooking(e.target.value);
                }}
                className="border-gray-200 w-[200px] py-2 mb-3 text-violet11 h-[2.5rem] rounded bg-white border-2 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px]"
              >
                {lookingfor.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mt-5 text-center grid max-w-min mx-10">
              <p className="text-dark text-left font-[500] text-[14px] mb-2">
                Star
              </p>
              <select
                value={star}
                onChange={(e) => {
                  setStar(e.target.value);
                }}
                className="border-gray-200 w-[200px] py-2 mb-3 text-violet11 h-[2.5rem] rounded bg-white border-2 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px]"
              >
                {stars.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mt-5 text-center grid max-w-min mx-10">
              <p className="text-dark text-left font-[500] text-[14px] mb-2">
                Age
              </p>
              <div className="flex justify-around ">
                <input
                  type="text"
                  placeholder="From"
                  value={ageFrom}
                  onChange={(e) => {
                    const reg = /^[0-9\b]+$/;
                    if (e.target.value === "" || reg.test(e.target.value)) {
                      setAgeFrom(e.target.value);
                    }
                  }}
                  className="border-gray-200 w-[100px] mx-1 py-2 px-2 mb-3 text-violet11 h-[2.5rem] rounded bg-white border-2 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px]"
                />
                <input
                  type="text"
                  placeholder="To"
                  value={ageTo}
                  onChange={(e) => {
                    const reg = /^[0-9\b]+$/;
                    if (e.target.value === "" || reg.test(e.target.value)) {
                      setAgeTo(e.target.value);
                    }
                  }}
                  className="border-gray-200 w-[100px] py-2 px-2 mb-3 text-violet11 h-[2.5rem] rounded bg-white border-2 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px]"
                />
              </div>
            </div>
            <div className="mt-5 text-center grid max-w-min mx-10">
              <p className="text-dark text-left font-[500] text-[14px] mb-2">
                Marriage Status
              </p>
              <select
                value={marriageStatus}
                onChange={(e) => {
                  setMarriageStatus(e.target.value);
                }}
                className="border-gray-200 w-[200px] py-2 mb-3 text-violet11 h-[2.5rem] rounded bg-white border-2 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px]"
              >
                {marriageStatuses.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mt-3 text-center grid max-w-min mx-10">
              <span className="text-white">b</span>
              <div className="">
                <button className="port_button" onClick={search}>
                  Search
                </button>
              </div>
            </div>
            {/* <div className="text-center grid">
              <span className="text-white">b</span>
              <div className="">
                <button className="port_button">Search</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolioheader;
