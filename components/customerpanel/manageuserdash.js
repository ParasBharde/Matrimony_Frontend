/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
// Orderhistory
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import axios from "axios";
import profile from "@/assets/profile.png";
import { useRouter } from "next/router";
import { useCalculateAge } from "@/hooks/useCalculateAge";

import jsPDF from "jspdf";
import "jspdf-autotable";

const Manageuserdash = ({ handleFilterQuery,allprofiles }) => {
  const router = useRouter();
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
  const marriageStatuses = [
    "Choose",
    "Single",
    "Married",
    "Widowed",
    "Divorced",
    "Separated",
    "Registerd-Partnership",
  ];
  const [userData, setUserData] = useState([]);

  const lookingfor = ["Choose", "Groom", "Bride"];
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState({});

  const [search, setSearch] = useState("");
  const [profileToShow, setProfileToShow] = useState([]);
  const [length, setLength] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [uname, setuname] = useState("");
  const [uid, setuid] = useState("");
  const [downloadedProfile, setDownloadedProfile] = useState([]);
  const [ids, setIds] = useState([]);
  const [downloadProfile, setDownloadProfile] = useState([]);
  const inputRef = useRef(false);
  const calculateAge = useCalculateAge();
  const [modalOpen, setModalOpen] = useState(false);
  const [zodiac, setZodiac] = useState("Choose");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [gender, setGender] = useState("Choose");
  const [maritalStatus, setMaritalStatus] = useState("Choose");
  const [education, setEducation] = useState("");
  const handleApplyFilters = () => {
    const filters = {
      zodiac,
      minAge,
      maxAge,
      gender,
      maritalStatus,
      education,
    };

    handleFilterQuery(filters);
  };

useEffect(() => {
  if (allprofiles.length > 0) {
    setProfiles(allprofiles);
  setUserData(allprofiles)

  }
},[allprofiles])
console.log(userData)
console.log(allprofiles)


  const getAllProfiles = () => {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/profiles?populate=%2A",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setProfiles(response.data.data);
        setProfileToShow(response.data.data);
        setFilteredProfiles(response.data.data);
        setuname(response?.data?.data?.attributes?.username);
        setuname(response?.data?.data?.id);
        setLength(Math.ceil(response.data.data.length / 10));
        setTotal(response.data.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(
        "http://172.105.57.17:1337/api/download-profiles?populate=*&populete=user_profiles"
      )
      .then((response) => {
        let data = response.data.data;
        setDownloadedProfile(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [zodiac,minAge,maxAge,gender,maritalStatus,education]);

  const getDownlodCount = (id) => {
    let count = 0;
    if (downloadedProfile.length > 0) {
      for (let i = 0; i < downloadedProfile.length; i++) {
        if (
          downloadedProfile[i].attributes.user_profiles?.data?.[0]?.id == id
        ) {
          count++;
        }
      }
    }
    return count;
  };

  useEffect(() => {
    getAllProfiles();
  }, []);

  useEffect(() => {
    // console.log("search type", typeof(search));
    if (!search) {
      setProfileToShow(profiles);
    } else if (!isNaN(search)) {
      let filteredProfiles = [];
      if (search.length < 4) {
        filteredProfiles = profiles.filter((item) => {
          return item.id == Number(search);
        });
        setProfileToShow(filteredProfiles);
      } else {
        for (let i = 0; i < profiles.length; i++) {
          if (profiles[i].attributes.phone_number.includes(search)) {
            filteredProfiles.push(profiles[i]);
          }
        }
        setProfileToShow(filteredProfiles);
      }
    } else if (
      search.toLowerCase() == "male" ||
      search.toLowerCase() == "female"
    ) {
      let filteredProfiles = [];
      if (search == "male") {
        filteredProfiles = profiles.filter((item) => {
          return item.attributes.Chooese_groom_bride == "Groom";
        });
        setProfileToShow(filteredProfiles);
      } else if (search == "female") {
        filteredProfiles = profiles.filter((item) => {
          return item.attributes.Chooese_groom_bride == "Bride";
        });
        setProfileToShow(filteredProfiles);
      }
    } else {
      let a = [];
      for (let i = 0; i < profiles.length; i++) {
        if (profiles[i].attributes.first_name) {
          // console.log(profiles[i].attributes, "first_name");
          // console.log(profiles[i].attributes.first_name.toLowerCase().includes(search.toLowerCase()),"first_name");
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

  const handleHeaderCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setSelectedRows(Array(profileToShow.length).fill(isChecked));
    if (isChecked) {
      getAllIds();
    } else if (!isChecked) {
      setIds([]);
    }
  };

  const getIds = (id) => {
    let totalprofile = [...ids, id];
    console.log(totalprofile);
    setIds(totalprofile);
  };

  const removeIdFromDownload = (profileId) => {
    let newIds = ids.filter((item) => item != profileId);
    console.log(newIds);
    setIds(newIds);
  };

  useEffect(() => {
    let filteredRes = [];
    for (let i = 0; i < ids.length; i++) {
      for (let j = 0; j < profiles.length; j++) {
        if (ids[i] == profiles[j].id) {
          console.log("new data", profiles[j]);
          filteredRes.push(profiles[j]);
        }
      }
    }
    setDownloadProfile(filteredRes);
  }, [ids]);

  // selet all profiles to download
  const getAllIds = () => {
    let Ids = profileToShow.map((item) => {
      return item.id;
    });
    setIds(Ids);
    console.log("this is all ids", Ids);
  };

  // download pdf functionality code .
  function generateAddressPDF() {
    let doc = new jsPDF("p", "mm", "a3", "portrait");
    let info = [];
    downloadProfile.forEach((p, index, array) => {
      console.log("element ", index, p);
      const age = calculateAge(p.attributes.date_of_birth);

      info.push([
        p.id,
        p.attributes.first_name,
        p.attributes.last_name,
        p.attributes.zodiacs_sign,
        age,
        p.attributes.Chooese_groom_bride === "Groom" ? "Male" : "Female",
        p.attributes.marriage_status,
        p.attributes.educational_qualification,
        p.attributes.phone_number,
        p.attributes.address,
      ]);
    });

    doc.autoTable({
      head: [
        [
          "Id",
          "First Name",
          "Last Name",
          "Zodiacs Sign",
          "Age",
          "Gender",
          "Marriage Status",
          "Educational Qualification",
          "Contact Number",
          "Address",
        ],
      ],
      margin: { top: 1, left: 1, right: 1, bottom: 1 },
      headStyles: { fillColor: [255, 127, 0] },
      alternateRowStyles: { fillColor: [255, 224, 204] },
      body: info,
    });

    doc.save(`${uname}(${uid})`);
    setIds([]);
    setSelectedRows(Array(profileToShow.length).fill(false));
    inputRef.current.checked = false;
  }

  function generatePDF() {
    let doc = new jsPDF("p", "mm", "a3", "portrait");
    let info = [];
    downloadProfile.forEach((p, index, array) => {
      console.log("element ", index, p);
      const age = calculateAge(p.attributes.date_of_birth);
      info.push([
        p.id,
        p.attributes.first_name,
        p.attributes.last_name,
        p.attributes.zodiacs_sign,
        age,
        p.attributes.Chooese_groom_bride === "Groom" ? "Male" : "Female",
        p.attributes.marriage_status,
        p.attributes.educational_qualification,
      ]);
    });

    doc.autoTable({
      head: [
        [
          "Id",
          "First Name",
          "Last Name",
          "Zodiacs Sign",
          "Age",
          "Gender",
          "Marriage Status",
          "Educational Qualification",
        ],
      ],
      margin: { top: 1, left: 1, right: 1, bottom: 1 },
      headStyles: { fillColor: [255, 127, 0] },
      alternateRowStyles: { fillColor: [255, 224, 204] },
      body: info,
    });

    doc.save(`${uname}(${uid})`);
    setIds([]);
    setSelectedRows(Array(profileToShow.length).fill(false));
    inputRef.current.checked = false;
  }

  const handleDownload = () => {
    setModalOpen(!modalOpen);
  };

  const handleAdd = () => {
    if (downloadProfile.length > 0) {
      setModalOpen(!modalOpen);
      generateAddressPDF();
    }
  };

  const handleClose = () => {
    if (downloadProfile.length > 0) {
      setModalOpen(!modalOpen);
      generatePDF();
    }
  };

  // const handleFilterQuery = () => {
  //   if (
  //     gender == "Choose" &&
  //     zodiac == "Choose" &&
  //     minAge == "" &&
  //     maxAge == "" &&
  //     maritalStatus == "Choose" &&
  //     education == ""
  //   ) {
  //     setFilteredProfiles(profiles);
  //     setTotal(profiles.length);
  //     return;
  //   }
  //   let filteredProfiles = profiles;
  //   if (gender != "Choose") {
  //     filteredProfiles = filteredProfiles
  //       .filter((profile) => {
  //         return profile.attributes.Chooese_groom_bride == gender;
  //       })
  //       .map((u) => u);
  //   }

  //   if (zodiac != "Choose") {
  //     filteredProfiles = filteredProfiles.filter((profile) => {
  //       return profile.attributes.zodiacs_sign == zodiac;
  //     });
  //   }

  //   if (minAge != undefined && minAge != "") {
  //     let queryAgeFrom = Number(minAge);
  //     filteredProfiles = filteredProfiles.filter((profile) => {
  //       const age = calculateAge(profile.attributes.date_of_birth);
  //       return age >= queryAgeFrom;
  //     });
  //   }

  //   if (maxAge != undefined && maxAge != "") {
  //     let queryAgeTo = Number(maxAge);
  //     filteredProfiles = filteredProfiles.filter((profile) => {
  //       const age = calculateAge(profile.attributes.date_of_birth);
  //       return age <= queryAgeTo;
  //     });
  //   }

  //   if (maritalStatus != "Choose") {
  //     filteredProfiles = filteredProfiles.filter((profile) => {
  //       return profile.attributes.marriage_status == maritalStatus;
  //     });
  //   }

  //   if (education != "") {
  //     filteredProfiles = filteredProfiles.filter((profile) => {
  //       console.log(profile);
  //       return profile.attributes.educational_qualification == education;
  //     });
  //   }

  //   setFilteredProfiles(filteredProfiles);
  //   setTotal(filteredProfiles.length);
  // };

  return (
    <>
      {modalOpen && (
        <div className="w-screen h-screen fixed flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-slate-100 border border-black rounded-md px-4">
            <div className="py-2 flex justify-between items-center">
              <h3 className="font-semibold text-red-500">Confirmation</h3>
              <span
                className="cursor-pointer bg-slate-200 px-2 rounded-md"
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </span>
            </div>
            <hr />
            <div>
              <div className="flex py-4">
                <p className="font-semibold">
                  Do you want to add mobile number and address?
                </p>
              </div>
              <div className="mb-5 flex justify-end">
                <button
                  onClick={handleClose}
                  className="px-5 py-1 rounded bg-red-500 mr-3"
                >
                  No
                </button>
                <button
                  onClick={handleAdd}
                  className="px-5 py-1 rounded bg-green-500 mr-3"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="p-2 bg-white flex  items-center mt-5 ">
        <div className="ml-[17rem]">
          <div className="flex mb-2">
            <div className="flex flex-col mr-10">
              <label htmlFor="zodiac">Zodiac:</label>
              <select
                value={zodiac}
                onChange={(e) => setZodiac(e.target.value)}
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
            <div className="flex flex-col mr-10">
              <label htmlFor="minAge">Min Age:</label>
              <input
                type="number"
                id="minAge"
                value={minAge}
                onChange={(e) => setMinAge(e.target.value)}
                className="border-gray-200 w-[200px] py-2 mb-3 text-violet11 h-[2.5rem] rounded bg-white border-2 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px]"
                placeholder="From"
              />
            </div>
            <div className="flex flex-col mr-10">
              <label htmlFor="maxAge">Max Age:</label>
              <input
                type="number"
                id="maxAge"
                value={maxAge}
                onChange={(e) => setMaxAge(e.target.value)}
                className="border-gray-200 w-[200px] py-2 mb-3 text-violet11 h-[2.5rem] rounded bg-white border-2 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px]"
                placeholder="To"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col mr-10">
              <label htmlFor="gender">Gender:</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
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
            <div className="flex flex-col mr-10">
              <label htmlFor="maritalStatus">Marital Status:</label>
              <select
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
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
            <div className="flex flex-col mr-10">
              <label htmlFor="education">Education:</label>
              <input
                type="text"
                id="education"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="border-gray-200 w-[200px] py-2 mb-3 text-violet11 h-[2.5rem] rounded bg-white border-2 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px]"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleApplyFilters}
          className="bg-blue-500 text-white p-2 mt-2"
        >
          Apply Filters
        </button>
      </div>
      <div className="lg:txt lg:flex md:flex mx-14 relative mt-4 justify-between lg:items-center">
        <span className="font-medium ml-60 align-self-center max-md:ml-0">
          Manage Users
        </span>

        <div className="search_download flex space-x-2 items-center max-md:grid max-md:justify-items-stretch">
          <button
            onClick={() => {
              router.push("/register");
            }}
            className="px-5 rounded bg-orange-400 py-2 my-2 text-white"
          >
            Add User
          </button>
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

          <button
            className={`px-5 rounded bg-orange-400 py-2 my-3 ${
              downloadProfile.length <= 0 && "cursor-not-allowed"
            }`}
            disabled={downloadProfile.length <= 0 ? true : false}
            onClick={handleDownload}
          >
            <span className="flex text-white max-md:justify-center">
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
                  ref={inputRef}
                  checked={inputRef.current.checked}
                  onChange={handleHeaderCheckboxChange}
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
            {userData?.map((item, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">
                    <input
                      placeholder="check box"
                      type="checkbox"
                      className="row-checkbox cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white focus:outline-none focus:ring-2  focus:ring-gray-400"
                      checked={selectedRows[index]}
                      onChange={(event) => {
                        const newSelectedRows = [...selectedRows];
                        newSelectedRows[index] = !newSelectedRows[index];
                        setSelectedRows(newSelectedRows);
                        if (event.target.checked) {
                          getIds(item.id);
                        } else {
                          removeIdFromDownload(item.id);
                        }
                      }}
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
                      <button
                        onClick={() => {
                          router.push({
                            pathname: "/admin/profile",
                            query: { id: item.id },
                          });
                        }}
                      >
                        <span>
                          {item.attributes.first_name +
                            " " +
                            item.attributes.last_name}
                        </span>
                      </button>
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
                  <td className="px-6 py-4 ">{getDownlodCount(item.id)}</td>

                  <td className="px-6 py-4 flex items-center justify-evenly">
                    <svg
                      className="cursor-pointer"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
                        router.push(
                          {
                            pathname: "/admin/profile",
                            query: { id: item.id, prevUrl: router.pathname },
                          },
                          "/admin/profile"
                        );
                      }}
                    >
                      <path
                        d="M12 6.5C13.8387 6.49389 15.6419 7.00678 17.2021 7.97973C18.7624 8.95267 20.0164 10.3462 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C3.98362 10.3462 5.23763 8.95267 6.79788 7.97973C8.35813 7.00678 10.1613 6.49389 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C12.663 9.5 13.2989 9.76339 13.7678 10.2322C14.2366 10.7011 14.5 11.337 14.5 12C14.5 12.663 14.2366 13.2989 13.7678 13.7678C13.2989 14.2366 12.663 14.5 12 14.5C11.337 14.5 10.7011 14.2366 10.2322 13.7678C9.76339 13.2989 9.5 12.663 9.5 12C9.5 11.337 9.76339 10.7011 10.2322 10.2322C10.7011 9.76339 11.337 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"
                        fill="#F98B1D"
                      />
                    </svg>
                    <button
                      disabled={downloadProfile.length != 1 ? true : false}
                      onClick={handleDownload}
                      className={`${
                        downloadProfile.length != 1
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 14 14"
                        fill="none"
                        // className="cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        id="down1"
                      >
                        <path
                          d="M12.0007 9.4987V11.9987H2.00065V9.4987H0.333984V11.9987C0.333984 12.9154 1.08398 13.6654 2.00065 13.6654H12.0007C12.9173 13.6654 13.6673 12.9154 13.6673 11.9987V9.4987H12.0007ZM11.1673 6.16536L9.99232 4.99036L7.83398 7.14036V0.332031H6.16732V7.14036L4.00898 4.99036L2.83398 6.16536L7.00065 10.332L11.1673 6.16536Z"
                          fill="#F98B1D"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex items-center px-4 py-[2rem]  sm:px-6 mb-[2rem]">
        <div className="admin-footer flex flex-1 justify-between sm:hidden ">
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
    </>
  );
};

export default Manageuserdash;
