/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
// Orderhistory
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import axios from "axios";
import profile from "@/assets/profile.png";
import { useRouter } from "next/router";
import Select from "react-select";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { toast } from "react-toastify";
const Orderhistory = () => {
  const router = useRouter();

  const [profiles, setProfiles] = useState([]);
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
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
        setuname(response?.data?.data?.attributes?.username);
        setuname(response?.data?.data?.id);
        setLength(Math.ceil(response.data.data.length / 10));
        setTotal(response.data.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // fetch downloded profiles
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
  }, []);
  // get downloded profiles count
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
  function generatePDF() {
    let doc = new jsPDF("p", "mm", "a3", "portrait");
    let info = [];
    downloadProfile.forEach((p, index, array) => {
      console.log("element ", index, p);
      info.push([
        p.id,
        p.attributes.first_name,
        p.attributes.last_name,
        p.attributes.email,
        p.attributes.Color,
        p.attributes.father_name,
        p.attributes.Height,
        p.attributes.mother_name,
        p.attributes.Salary_monthly_income,
        p.attributes.address,
        p.attributes.birth_time,
        p.attributes.birthplace,
        p.attributes.date_of_birth,
      ]);
    });

    doc.autoTable({
      head: [
        [
          "Id",
          "First Name",
          "Last Name",
          "Email",
          "Color",
          "Father Name",
          "Height",
          "Mother Name",
          "Salary",
          "Address",
          "Birth Time",
          "Birth Place",
          "Date of Birth",
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

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [plan, setplan] = useState("");
  const [checkstatus, setcheckstatus] = useState("");
  const [price, setprice] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileId, setfileId] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [refer, setrefer] = useState("");
  const [marriageStatuss, setmarriageStatuss] = useState("");
  const [checkactive, setcheckactive] = useState([]);
const [personName, setPerson] = useState('')

  const getUserProfile = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/profiles?populate=*",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        const transformedOptions = response.data.data.map((item) => ({
          value: item.id,
          label: `${item.attributes.first_name} ${item.attributes.last_name} `,
        }));
        setOptions(transformedOptions);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const plans = [
    { value: "none", label: "None" },
    { value: "basic", label: "Basic Plan" },
    { value: "super", label: "Super Plan" },
    { value: "master", label: "Master Plan" },
  ];

  const status = [
    { value: "none", label: "None" },
    { value: "pending", label: "Pending" },
    { value: "active", label: "Active" },
    { value: "expired", label: "Expired" },
  ];

  const marriageStatus = [
    { value: "none", label: "None" },
    { value: "applicable", label: "Applicable" },
    { value: "not_applicable", label: "Not Applicable" },
  ];

  const handleFileChange = (event) => {
    console.log(event);
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handlePlanChange = (event) => {
    console.log(event);
    setplan(event.target.value);
  };

  // Image Uplaod
  useEffect(() => {
    if (selectedFile) {
      var formdata = new FormData();
      formdata.append("files", selectedFile);
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      fetch("http://172.105.57.17:1337/api/upload", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          toast.success("Image Uploaded Successfully");
          setfileId(result[0].id);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [selectedFile]);

  const calculateExpiryDate = () => {
    let durationInYears = 0;
    if (plan === "basic") {
      durationInYears = 2;
    } else if (plan === "super") {
      durationInYears = 3;
    } else if (plan === "master") {
      // Handle unlimited plan duration, e.g., set to a large value
      durationInYears = 100;
    }

    if (startDate) {
      const start = new Date(startDate);
      const expiry = new Date(start.getTime());

      expiry.setFullYear(expiry.getFullYear() + durationInYears);

      // Format the expiry date as "YYYY-MM-DD"
      const formattedExpiry = expiry.toISOString().split("T")[0];

      setExpiryDate(formattedExpiry);
    }
  };

  useEffect(() => {
    calculateExpiryDate();
  }, [startDate, plan, checkstatus, expiryDate]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    calculateExpiryDate();
  };

  const postData = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    let data = JSON.stringify({
      data: {
        reference_id_or_utr_id: refer,
        payment_proof: [fileId],
        subscription_start_date: startDate,
        // subscription_end_date: expiryDate,
        status: checkstatus,
        purchase_plan: plan,
        user_id: selectedOption.value,
        price: price,
        marriage_fixed: false,
        marriage_fix_status: marriageStatuss,
        paying_person_name: personName,
      },
     
    });
   console.log(data)
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/order-histories",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success(`${plan} Plan activated Successfully`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // getOrder History

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
          setcheckactive(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    subscription();
  }, []);

  // UpperCase
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <>
      <div className="lg:txt lg:flex md:flex mx-20 relative mt-10 justify-between lg:items-center">
        <span className="font-medium ml-60 align-self-center">
          Order History
        </span>

        <div className="search_download flex space-x-2 items-center">
          <button
            onClick={openModal}
            className="px-5 rounded bg-orange-400 py-2 my-2 text-white"
          >
            Add Order
          </button>
          {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 shadow-lg shadow-indigo-500/40">
              <div className="bg-white p-6 rounded-lg shadow-xl h-[35rem] w-[35rem]">
                <form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ marginRight: "10px", width: "50%" }}>
                      <label className="my-5" htmlFor="dropdown">
                        User Name:
                      </label>
                      <Select
                        options={options}
                        isSearchable={true}
                        onChange={(e) => {
                          setSelectedOption(e);
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "10px",
                        width: "50%",
                        gap: 5,
                      }}
                    >
                      <label htmlFor="input1">Paying Person Name:</label>
                      <input
                        style={{
                          border: "1px solid #ccc",
                          height: "2.3rem",
                          borderRadius: "4px",
                        }}
                        type="text"
                        id="input1"
                        name="input1"
                        value={personName}
                        onChange={(e) => setPerson(e.target.value)}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "10px",
                        width: "50%",
                        gap: 5,
                      }}
                    >
                      <label htmlFor="input1">UPI Ref No:</label>
                      <input
                        value={refer}
                        onChange={(e) => setrefer(e.target.value)}
                        style={{
                          border: "1px solid #ccc",
                          height: "2.3rem",
                          borderRadius: "4px",
                        }}
                        type="text"
                        id="input1"
                        name="input1"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        alignItems: "center",
                        justifyItems: "stretch",
                      }}
                    >
                      <label htmlFor="input1">Payment Screenshot:</label>
                      <input
                        style={{
                          height: "2.3rem",
                          borderRadius: "4px",
                        }}
                        type="file"
                        id="input1"
                        name="input1"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </div>
                    <div
                      style={{
                        display: "grid",
                      }}
                    >
                      <label>Price</label>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                        style={{
                          border: "1px solid #ccc",
                          height: "2.3rem",
                          borderRadius: "4px",
                          width: "16rem",
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", marginTop: "0.5rem" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "10px",
                        width: "50%",
                        gap: 5,
                      }}
                    >
                      <label htmlFor="input1">Purchase Plan:</label>
                      <select
                        value={plan}
                        onChange={handlePlanChange}
                        id="dropdown"
                        className="border-y-2 py-2 border-x-2 rounded"
                        name="dropdown"
                      >
                        {plans.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "10px",
                        width: "50%",
                        gap: 5,
                      }}
                    >
                      <label htmlFor="input1">Status:</label>
                      <select
                        value={checkstatus}
                        onChange={(e) => setcheckstatus(e.target.value)}
                        id="dropdown"
                        name="dropdown"
                        className="border-y-2 py-2 border-x-2 rounded"
                      >
                        {status.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div style={{ display: "flex", marginTop: "0.9rem", gap: 5 }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "10px",
                        width: "50%",
                        gap: 10,
                      }}
                    >
                      <label htmlFor="input1">Subscription Start Date:</label>
                      <div className="flex gap-2">
                        <input
                          style={{
                            border: "1px solid #ccc",
                            height: "2.3rem",
                            borderRadius: "4px",
                            width: "100%",
                          }}
                          onChange={handleStartDateChange}
                          type="date"
                          id="input1"
                          name="input1"
                        />
                        <input
                          type={"time"}
                          value={birthTime}
                          onChange={(e) => {
                            setBirthTime(e.target.value);
                          }}
                          className="border border-gray-400 rounded"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "10px",
                        width: "50%",
                        gap: 10,
                      }}
                    >
                      <label htmlFor="input1">Subscription End Date:</label>
                      <input
                        type="date"
                        className="py-2"
                        style={{
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                        }}
                        value={expiryDate}
                        disabled
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "10px",
                      marginTop: "1rem",
                    }}
                  >
                    <label htmlFor="input1">
                      Marriage Status:(If Choosen Master Plan)
                    </label>
                    <select
                      value={marriageStatuss}
                      onChange={(e) => setmarriageStatuss(e.target.value)}
                      id="dropdown"
                      className="border-y-2 py-2 border-x-2 rounded w-auto"
                      name="dropdown"
                    >
                      {marriageStatus.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-evenly mt-8">
                  <button
                    onClick={closeModal}
                    className=" px-5 rounded bg-orange-400 py-2 my-3"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={postData}
                    className=" px-5 rounded bg-orange-400 py-2 my-3"
                  >
                    Submit
                  </button>
                </div>
                </form>
          
              </div>
            </div>
          )}
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

          {/* <button
            className={`px-5 rounded bg-orange-400 py-2 my-3 ${
              downloadProfile.length <= 1 && "cursor-not-allowed"
            }`}
            disabled={downloadProfile.length <= 1 ? true : false}
            onClick={generatePDF}
          >
            <span className="flex text-white">
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
          </button> */}
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
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {checkactive.map((item, index) => {
              console.log(item);
              // start Date
              const dateStringFromBackend =
                item.attributes.subscription_start_date;
              const dateFromBackend = new Date(dateStringFromBackend);
              const year = dateFromBackend.getFullYear();
              const month = dateFromBackend.getMonth() + 1; // Months are 0-indexed, so add 1
              const day = dateFromBackend.getDate();
              const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
                day < 10 ? "0" : ""
              }${day}`;

              // End Date
              const dateStringFromBackend1 =
                item.attributes.subscription_end_date;
              const dateFromBackend1 = new Date(dateStringFromBackend1);
              const year1 = dateFromBackend1.getFullYear();
              const month1 = dateFromBackend1.getMonth() + 1; // Months are 0-indexed, so add 1
              const day1 = dateFromBackend1.getDate();
              const formattedDate1 = `${year1}-${
                month1 < 10 ? "0" : ""
              }${month1}-${day1 < 10 ? "0" : ""}${day1}`;

              // upperCase
              const plan = item.attributes.purchase_plan;
              const capitalizedWord = capitalizeFirstLetter(plan);
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">
                    <input
                      placeholder="check box"
                      className="row-checkbox cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white focus:outline-none  focus:ring-2  focus:ring-gray-400"
                      type="checkbox"
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
                    {item.attributes.user_id.data.id}
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <div className="mr-2 hover:transform hover:scale-150 duration-300">
                        <img
                          alt="user image"
                          className="w-6 h-6 rounded-full"
                          src={`http://172.105.57.17:1337${item?.attributes?.user_id?.data?.attributes?.profile_photo?.data[0]?.attributes.url}`}
                          width={100}
                          height={100}
                        />
                      </div>
                      <span>
                        {item.attributes.user_id.data.attributes.first_name +
                          " " +
                          item.attributes.user_id.data.attributes.last_name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{capitalizedWord}</td>
                  <td className="px-6 py-4">
                    {item.attributes.subscription_start_date
                      ? formattedDate
                      : "--/--"}
                  </td>
                  <td className="px-6 py-4">
                  {item.attributes.subscription_start_date
                      ? formattedDate1
                      : "--/--"}
                  </td>
                   
                  <td className="px-6 py-4"> {item.attributes.price}   </td>
                  <td className="px-6 py-4"> {item.attributes.marriage_fixed === false ? "No" : "Yes"} </td>
                  <td className="font-medium text-left px-2 py-4">
                    {item?.attributes?.status === "active" ? (
                      <span className="bg-green-600 text-white py-2 px-6 rounded text-base ">
                        Active
                      </span>
                    ) : (
                      <span className="bg-red-600 text-white py-2 px-4 rounded text-base ">
                        Expaired
                      </span>
                    )}
                  </td>
                </tr>
              );
            }, [])}
          </tbody>
        </table>
      </div>
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
    </>
  );
};

export default Orderhistory;
