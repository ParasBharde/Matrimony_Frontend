/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import profile from "@/assets/profile.png";
import Link from "next/link";
import axios from "axios";

const Managelistdash = () => {
  const [profiles, setprofiles] = useState([]);
  const [search, setSearch] = useState("");
  const [profileToShow, setProfileToShow] = useState([])

  const [length,setLength]=useState(0)
  const [total,setTotal]=useState(0)

  const [currentPage,setCurrentPage]=useState(1)

  useEffect(() => {
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
          setprofiles(response.data.data);
          setProfileToShow(response.data.data);
          setLength(Math.ceil(response.data.data.length/10))
          setTotal(response.data.data.length)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    console.log("profiles", profiles);
    getUser();
  }, []);

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

  function Selects() {
    const headerCheckbox = document.getElementById("header-checkbox");
    const rowCheckboxes = document.querySelectorAll(".row-checkbox");
    headerCheckbox.addEventListener("click", function () {
      if (headerCheckbox.checked) {
        rowCheckboxes.forEach(function (rowCheckbox) {
          rowCheckbox.checked = true;
        });
      } else {
        rowCheckboxes.forEach(function (rowCheckbox) {
          rowCheckbox.checked = false;
        });
      }
    });
  }
  return (
    <>
      <div className="txt flex justify-around  relative">
        <span className="font-medium">Members Lists</span>
        <div className="search_download flex space-x-2 items-center">
          <form>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="bg-gray-50 border px-5 border-gray-300 text-gray-900 text-sm rounded  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </form>
          <button className="px-5 rounded bg-orange-400 py-2">
            <Link href="#" className="flex text-white" >
              <svg
                className="mr-2 mt-1"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 11V14H2.5V11H0.5V14C0.5 15.1 1.4 16 2.5 16H14.5C15.6 16 16.5 15.1 16.5 14V11H14.5ZM13.5 7L12.09 5.59L9.5 8.17V0H7.5V8.17L4.91 5.59L3.5 7L8.5 12L13.5 7Z"
                  fill="white"
                />
              </svg>
              Download
            </Link>
          </button>
        </div>
      </div>
      <div className="user_dash relative overflow-x-auto">
        <table className="text-sm text-left text-gray-500">
          <thead
            style={{ color: "rgba(30, 30, 30, 0.5)", fontWeight: "400" }}
            className="text-xs  uppercase "
          >
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-gray-600font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <input
                  placeholder="check box"
                  type="checkbox"
                  className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 focus:outline-none  focus:ring-2  focus:ring-gray-400"
                  id="header-checkbox"
                  onClick={(e) => Selects(e)}
                />
              </th>
              <th scope="col" className="px-6 py-3 ">
                Reg.No
              </th>
              <th scope="col" className="px-6 py-3">
                Profile
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Contact.No
              </th>
              <th scope="col" className="px-6 py-3">
                Purchase Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {profileToShow.map((item, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">
                    <input
                      placeholder="check box"
                      className="row-checkbox cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white focus:outline-none  focus:ring-2  focus:ring-gray-400"
                      type="checkbox"
                      onClick={Selects()}
                    />
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.id}
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <div className="mr-2 hover:transform hover:scale-150 duration-300">
                        <img
                          alt="user image"
                          className="w-6 h-6 rounded-full"
                          src={`http://172.105.57.17:1337${item.attributes.profile_photo.data[0].attributes.url}`}
                          width={100}
                          height={100}
                        />
                      </div>
                      <span>
                        {item.attributes.first_name +
                          " " +
                          item.attributes.last_name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {item.attributes.Chooese_groom_bride == "Bride"
                      ? "Female"
                      : "Male"}
                  </td>
                  <td className="px-6 py-4">{item.attributes.email}</td>
                  <td className="px-6 py-4">{item.attributes.phone_number}</td>
                  <td className="px-6 py-4">23/04/2002</td>
                  <td className="font-medium text-left px-2 py-4">
                    <span className="bg-purple-200 text-purple-600 py-2 px-4 rounded text-base cursor-pointer">
                      Active
                    </span>
                  </td>
                </tr>
              );
            }, [])}
          </tbody>
        </table>
        <div className="flex items-center justify-between  px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <p

              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </p>
            <p

              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </p>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <span className="text-sm text-gray-700">
              {currentPage==1?"1":`${((currentPage-1)*10)+1}`}-{total<=(currentPage*10)?total:(currentPage*10)}{" "}
                <span className="font-semibold text-gray-900">
                  of
                </span>{" "}
                {total}{" "}
                <span className="font-semibold text-gray-900">
                  Pages
                </span>
              </span>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px  rounded-md shadow-sm "
                aria-label="Pagination"
              >
                <p

                  className="relative inline-flex items-center rounded-l-md border border-gray-400  px-2 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20"
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
                </p>
                {Array(length).fill(0).map((item,index)=>{
                  return(
                    <p
                    key={index}
                    aria-current="page"
                    className="relative z-10 inline-flex items-center border border-gray-400 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20"
                  >
                    {index+1}
                  </p>
                  )
                })}    
                <p

                  className="relative inline-flex items-center rounded-r-md border border-gray-400  px-2 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20"
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
                </p>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Managelistdash;
