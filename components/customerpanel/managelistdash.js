import React, { useState, useEffect } from "react";
import Image from "next/image";
import profile from "@/assets/profile.png";
import Link from "next/link";
import axios from "axios";

const Managelistdash = () => {

  const [profiles, setProfiles] = useState([])

  const getAllProfiles = () => {

    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://172.105.57.17:1337/api/profiles',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setProfiles(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  useEffect(() => {
    getAllProfiles()
  }, [])


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
                className="bg-gray-50 border px-5 border-gray-300 text-gray-900 text-sm rounded  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
            </div>
          </form>
          <button className="px-5 rounded bg-orange-400 py-2">
            <Link href={"#"} className="flex text-white" >
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
      <div className="user_dash relative overflow-x-auto mt-8">
        <table className="text-sm text-left text-gray-500">
          <thead
            style={{ color: "rgba(30, 30, 30, 0.5)", fontWeight: "400" }}
            className="text-xs  uppercase "
          >
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4"
              >
                <input
                  placeholder="check box"
                  type="checkbox"
                  className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-whitefocus:outline-none  focus:ring-2  focus:ring-gray-400"
                  onclick="checkAll(this)"
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
            {
              profiles.map((item, index) => {
                return (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4">
                      <input
                        placeholder="check box"
                        type="checkbox"
                        className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white focus:outline-none  focus:ring-2  focus:ring-gray-400"
                        onclick="checkAll(this)"
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
                        <div className="mr-2">
                          <Image
                            alt='user image'
                            className="w-6 h-6 rounded-full"
                            src={profile}
                            width={100}
                            height={100}
                          />
                        </div>
                        <span>{item.attributes.first_name + " " + item.attributes.last_name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{item.attributes.Chooese_groom_bride == "Bride" ? "Female" : "Male"}</td>
                    <td className="px-6 py-4">{item.attributes.email}</td>
                    <td className="px-6 py-4">{item.attributes.phone_number}</td>
                    <td className="px-6 py-4">23/04/2002</td>
                    <td className="font-medium text-left px-2 py-4">
                      <span className="bg-purple-200 text-purple-600 py-2 px-4 rounded text-base">
                        Active
                      </span>
                    </td>
                  </tr>
                )

              }, [])
            }
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
                1-10{" "}
                <span className="font-semibold text-gray-900">
                  of
                </span>{" "}
                50{" "}
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
                <p

                  aria-current="page"
                  className="relative z-10 inline-flex items-center border border-gray-400 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20"
                >
                  1
                </p>
                <p

                  className="relative inline-flex items-center border border-gray-400  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20"
                >
                  2
                </p>
                <p

                  className="relative hidden items-center border border-gray-400  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20 md:inline-flex"
                >
                  3
                </p>
                <span className="relative inline-flex items-center border border-gray-400  px-4 py-2 text-sm font-medium text-gray-700">
                  ...
                </span>
                <p

                  className="relative hidden items-center border border-gray-400  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20 md:inline-flex"
                >
                  8
                </p>
                <p

                  className="relative inline-flex items-center border border-gray-400  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20"
                >
                  9
                </p>
                <p

                  className="relative inline-flex items-center border border-gray-400  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-orange-400 focus:z-20"
                >
                  10
                </p>
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
