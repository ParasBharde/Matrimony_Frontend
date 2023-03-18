/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import profile from "@/assets/profile.png";
import { useRouter } from "next/router";
// import { useStorage } from "@/hooks/useStorage";

const Manageuserdash = () => {
  const router = useRouter();
  // const storage = useStorage();

  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");
  const [profileToShow, setProfileToShow] = useState([]);

  const [length, setLength] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadedProfile, setDownloadedProfile] = useState([]);

  const getAllProfiles = () => {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/profiles?populate=%2A",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setProfiles(response.data.data);
        setProfileToShow(response.data.data);
        setLength(Math.ceil(response.data.data.length / 10));
        setTotal(response.data.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // fetch downloded profiles
  useEffect(() => {
    // console.log("storage", id);
    axios
      .get(
        "http://172.105.57.17:1337/api/download-profiles?populate=*&populete=user_profiles"
      )
      .then((response) => {
        let data = response.data.data;
        // console.log("setDownloadedProfile", data);
        setDownloadedProfile(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  // get downloded profiles count
  const getDownlodCount = (id) => {
    let count = 0;
    if (downloadedProfile.length > 0) {
      for (let i = 0; i < downloadedProfile.length; i++) {
        if (downloadedProfile[i].attributes.user_profiles?.data?.[0]?.id == id) {
          count++;
        }
      }
    }
    return count;
  };
  // console.log("getDownlodCount", getDownlodCount(25));

  useEffect(() => {
    getAllProfiles();
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
      setProfileToShow(a);
    }
  }, [search]);

  const [selectedRows, setSelectedRows] = useState(
    Array(profileToShow.length).fill(false)
  );

  console.log("hello",selectedRows)
  const handleHeaderCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setSelectedRows(Array(profileToShow.length).fill(isChecked));
  if(isChecked){getAllIds()}

    // console.log("welcome ",event.target.id);
  };



  const [ids, setIds ]=useState([]);

  const handleUserlist = () => {
    router.push({
      pathname: "/userdatanew/datanew",
      query: { ids },
    },"/userdatanew/datanew");
  }
  
  const getIds=(id)=>{
    let totalprofile=[...ids, id];
    setIds(totalprofile);
  }

    
  const getAllIds=()=>{
    let Ids=profileToShow.map((item)=>{
      return item.id
    })
    setIds(Ids);
    console.log("this is all ids",Ids);
  }

  // console.log(getIds);

  return (
    <>
      <div className="lg:txt lg:flex md:flex justify-around mx-10 relative mt-10 ">
        <span>Manage Users</span>
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
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                id="voice-search"
                className="bg-gray-50  px-5 border-orange-300 text-gray-900 text-sm rounded  focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5"
                placeholder="Search..."
              />
            </div>
          </form>

          <button className="px-5 rounded bg-orange-400 py-2"  onClick={handleUserlist}>

            <span className="flex text-white" href="#">
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
            </span>
          </button>
        </div>
      </div>
      <div className="user_dash relative overflow-x-auto mt-8 ">
        <table className="text-sm text-left text-gray-500 overflow-y-scroll">
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
                  name="chk"
                  id="header-checkbox"
                  className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white focus:outline-none  focus:ring-2  focus:ring-gray-400"
                  onChange={handleHeaderCheckboxChange}

                  // onClick={() => {
                  //       router.push({
                  //         pathname: "/userdatanew/datanew/",
                  //         // query: { id: item.id },
                  //       });             
                  //     }}

                  // onClick={getIds}

                />
                
              </th>
              <th scope="col" className="px-6 py-3">
                Reg.No
              </th>
              <th scope="col" className="px-6 py-3">
                Profile
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Father Name
              </th>
              <th scope="col" className="px-6 py-3">
                DOB
              </th>
              <th scope="col" className="px-6 py-3">
                Contact.No
              </th>
              <th scope="col" className="px-6 py-3">
                Downloads
              </th>
              <th scope="col" className="px-6 py-3">
                Action
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
                      type="checkbox"
                      className="row-checkbox cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white focus:outline-none focus:ring-2  focus:ring-gray-400"
                      checked={selectedRows[index]}
                      onChange={() => {
                        const newSelectedRows = [...selectedRows];
                        newSelectedRows[index] = !newSelectedRows[index];
                        setSelectedRows(newSelectedRows);
                        getIds(item.id);

                      }}
                      

                      // onClick={pdfdata} // this is for testing.

                      // onClick={() => {
                      //   router.push({
                      //     pathname: "/userdatanew/data1",
                      //     // pathname: "/profiledetail/[id]",
                      //     query: { id: item.id }, 
                      //   }); }
                      // }
                      
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
                          alt="logo"
                          className="w-6 h-6 rounded-full"
                          src={`http://172.105.57.17:1337${item.attributes.profile_photo.data[0].attributes.url}`}
                          width={100}
                          height={100}
                        />
                      </div>
                      <Link href="profile">
                        <span>
                          {item.attributes.first_name +
                            " " +
                            item.attributes.last_name}
                        </span>
                      </Link>
                    </div>
                  </td>
                  {/* <td className="px-20 py-4">Sliver</td> */}
                  <td className="px-6 py-4">
                    {item.attributes.Chooese_groom_bride == "Bride"
                      ? "Female"
                      : "Male"}
                  </td>
                  <td className="px-6 py-4">{item.attributes.father_name}</td>
                  <td className="px-6 py-4">{item.attributes.date_of_birth}</td>
                  <td className="px-6 py-4">{item.attributes.phone_number}</td>
                  <td className="px-6 py-4 ">
                    {getDownlodCount(item.id)}
                  </td>

                  <td className="px-6 py-4 flex items-center justify-evenly">
                    <svg
                      className="cursor-pointer"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        router.push({
                          pathname: "/admin/profile",
                          query: { id: item.id, prevUrl: router.pathname }
                        },"/admin/profile");
                      }}
                    >
                      <path
                        d="M12 6.5C13.8387 6.49389 15.6419 7.00678 17.2021 7.97973C18.7624 8.95267 20.0164 10.3462 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C3.98362 10.3462 5.23763 8.95267 6.79788 7.97973C8.35813 7.00678 10.1613 6.49389 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C12.663 9.5 13.2989 9.76339 13.7678 10.2322C14.2366 10.7011 14.5 11.337 14.5 12C14.5 12.663 14.2366 13.2989 13.7678 13.7678C13.2989 14.2366 12.663 14.5 12 14.5C11.337 14.5 10.7011 14.2366 10.2322 13.7678C9.76339 13.2989 9.5 12.663 9.5 12C9.5 11.337 9.76339 10.7011 10.2322 10.2322C10.7011 9.76339 11.337 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"
                        fill="#F98B1D"
                      />
                    </svg>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
        
                      // onClick={() => {
                      //   router.push({
                      //     pathname:"/userdatanew/datanew/",
                      //     query: { id: item.id },
                      //   });
                      // }}
                    >
                      <path
                        d="M12.0007 9.4987V11.9987H2.00065V9.4987H0.333984V11.9987C0.333984 12.9154 1.08398 13.6654 2.00065 13.6654H12.0007C12.9173 13.6654 13.6673 12.9154 13.6673 11.9987V9.4987H12.0007ZM11.1673 6.16536L9.99232 4.99036L7.83398 7.14036V0.332031H6.16732V7.14036L4.00898 4.99036L2.83398 6.16536L7.00065 10.332L11.1673 6.16536Z"
                        fill="#F98B1D"
                      />
                    </svg>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
                <span className="font-semibold text-gray-900">of</span> {total}{" "}
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
                <Link
                  href="#"
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
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manageuserdash;
