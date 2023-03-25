import React, { useState, useEffect } from "react";
import Image from "next/image";
import fileInputImage from "@/assets/fileInput.png";
import deleteIcon from "@/assets/SVG/delete.svg";

import { toast } from "react-toastify";

import Files from "react-files";
import axios from "axios";

import { TrashIcon } from "@radix-ui/react-icons";
const EditProfileForm2 = ({ screen, setScreen, userData }) => {
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);

  const [file1ID, setFile1ID] = useState(4);
  const [file2ID, setFile2ID] = useState(4);
  const [file3ID, setFile3ID] = useState(4);
  const [file4ID, setFile4ID] = useState(4);

  const signs = [
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
    "Single",
    "Married",
    "Widowed",
    "Divorced",
    "Separated",
    "Registerd-Partnership",
  ];

  function onFilesChange1(files) {
    console.log("Files 1 : ", files);
    setFile1(files);
  }
  function onFilesError1(error, file) {
    console.log("error code on file 1" + error.code + ": " + error.message);
  }

  function onFilesChange2(files) {
    console.log("Files 2 : ", files);
    setFile2(files);
  }
  function onFilesError2(error, file) {
    console.log("error code on file 2" + error.code + ": " + error.message);
  }

  function onFilesChange3(files) {
    console.log("Files 3 : ", files);
    setFile3(files);
  }
  function onFilesError3(error, file) {
    console.log("error code on file 3" + error.code + ": " + error.message);
  }

  function onFilesChange4(files) {
    console.log("Files 4 : ", files);
    setFile4(files);
  }
  function onFilesError4(error, file) {
    console.log("error code on file 4" + error.code + ": " + error.message);
  }

  const [firstName, setFirstName] = useState("");
  const [groomOrBride, setGroomOrBride] = useState("Groom");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [height, setHeight] = useState(0);
  const [educationalQualifications, setEducationalQualifications] =
    useState("");
  const [salary, setSalary] = useState(0);
  const [expectation, setExpectation] = useState("");
  const [caste, setCaste] = useState("");

  const [lastName, setLastName] = useState("");
  const [vegOrNonVeg, setVegOrNonVeg] = useState("Vegetarian");
  const [star, setStar] = useState("Aries");
  const [color, setColor] = useState("");
  const [careerDetails, setCareerDetails] = useState("");
  const [familyPropertyDetails, setFamilyPropertyDetails] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [marriageStatus, setMarriageStatus] = useState("Single");

  useEffect(() => {
    // console.log("userData", userData);
    if (userData) {
      setFirstName(userData.first_name);
      setGroomOrBride(userData.Chooese_groom_bride);
      setDateOfBirth(userData.date_of_birth);
      setHeight(userData.Height);
      setEducationalQualifications(userData.educational_qualification);
      setSalary(userData.Salary_monthly_income);
      setExpectation(userData.Expection);
      setCaste(userData.caste);

      setLastName(userData.last_name);
      setVegOrNonVeg(userData.Choose_veg_nonveg);
      setStar(userData.star);
      setColor(userData.Color);
      setCareerDetails(userData.career_detail);
      setFamilyPropertyDetails(userData.family_property_details);
      setPhoneNumber(userData.phone_number);
      setMarriageStatus(userData.marriage_status);

      setImg1(userData.profile_photo?.data?.[0]?.attributes.url);
      setImg2(userData.profile_photo?.data?.[1]?.attributes.url);
      setImg3(userData.profile_photo?.data?.[2]?.attributes.url);
      setImg4(userData.profile_photo?.data?.[3]?.attributes.url);

      setFile1ID(userData.profile_photo?.data?.[0]?.id);
      setFile2ID(userData.profile_photo?.data?.[1]?.id);
      setFile3ID(userData.profile_photo?.data?.[2]?.id);
      setFile4ID(userData.profile_photo?.data?.[3]?.id);
      // console.log("url", userData.profile_photo?.data?.[0]?.attributes.url);
    }
  }, [userData]);

  useEffect(() => {
    const edit = sessionStorage.getItem("edit2");
    if (edit) {
      const jrg = JSON.parse(edit);

      setFile1(jrg.file1);
      setFile2(jrg.file2);
      setFile3(jrg.file3);
      setFile4(jrg.file4);

      setFirstName(jrg.firstName);
      setGroomOrBride(jrg.groomOrBride);
      setDateOfBirth(jrg.dateOfBirth);
      setHeight(jrg.height);
      setEducationalQualifications(jrg.educationalQualifications);
      setSalary(jrg.salary);
      setExpectation(jrg.expectation);
      setCaste(jrg.caste);

      setLastName(jrg.lastName);
      setVegOrNonVeg(jrg.vegOrNonVeg);
      setStar(jrg.star);
      setColor(jrg.color);
      setCareerDetails(jrg.careerDetails);
      setFamilyPropertyDetails(jrg.familyPropertyDetails);
      setPhoneNumber(jrg.phoneNumber);
      setMarriageStatus(jrg.marriageStatus);
    }
  }, []);

  useEffect(() => {
    if (file1) {
      var formdata = new FormData();
      formdata.append("files", file1[0], file1[0].preview.url);
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      fetch("http://172.105.57.17:1337/api/upload", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setFile1ID(result[0].id);
        })
        .catch((error) => {
          console.log("error", error);
          setFile1ID(4);
        });
    }
  }, [file1]);

  useEffect(() => {
    if (file2) {
      var formdata = new FormData();
      formdata.append("files", file2[0], file2[0].preview.url);
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      fetch("http://172.105.57.17:1337/api/upload", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setFile2ID(result[0].id);
        })
        .catch((error) => {
          console.log("error", error);
          setFile2ID(4);
        });
    }
  }, [file2]);

  useEffect(() => {
    if (file3) {
      var formdata = new FormData();
      formdata.append("files", file3[0], file3[0].preview.url);
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      fetch("http://172.105.57.17:1337/api/upload", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setFile3ID(result[0].id);
        })
        .catch((error) => {
          console.log("error", error);
          setFile3ID(4);
        });
    }
  }, [file3]);

  useEffect(() => {
    if (file4) {
      console.log("file4 changed");
      var formdata = new FormData();
      formdata.append("files", file4[0], file4[0].preview.url);
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      fetch("http://172.105.57.17:1337/api/upload", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setFile4ID(result[0].id);
        })
        .catch((error) => {
          console.log("error", error);
          setFile4ID(4);
        });
    }
  }, [file4]);

  const beforeNextScreen = () => {
    console.log("file4ID", file4ID);
    const edit2 = {
      profileImages: [file1ID, file2ID, file3ID, file4ID],
      firstName,
      groomOrBride,
      dateOfBirth,
      height,
      educationalQualifications,
      salary,
      expectation,
      caste,
      lastName,
      vegOrNonVeg,
      star,
      color,
      careerDetails,
      familyPropertyDetails,
      phoneNumber,
      marriageStatus,
    };
    sessionStorage.setItem("edit2", JSON.stringify(edit2));
  };

  // var nameRegex = /[A-Za-z]+/g;
  var nameRegex = /\d/g;
  var phoneRegex = /^(0|91)?[6-9][0-9]{9}$/;

  const validate = () => {
    if (
      !(
        firstName &&
        lastName &&
        height &&
        dateOfBirth &&
        color &&
        educationalQualifications &&
        careerDetails &&
        salary &&
        familyPropertyDetails &&
        expectation &&
        phoneNumber &&
        caste
      )
    ) {
      toast.error("Please Input all fields");
      return false;
    }

    if (
      !(
        (file1 || img1) &&
        (file2 || img2) &&
        (file3 || img3) &&
        (file4 || img4)
      )
    ) {
      toast.error("Please input all the files");
      return false;
    }

    if (nameRegex.test(firstName) || nameRegex.test(lastName)) {
      toast.error("Name must not contain a number");
      return false;
    }

    if (nameRegex.test(color)) {
      toast.error("Color must not contain a number");
      return false;
    }

    if (nameRegex.test(caste)) {
      toast.error("Caste must not contain a number");
      return false;
    }

    if (!phoneRegex.test(phoneNumber)) {
      toast.error("Please enter a valid phone number");
      return false;
    }

    return true;
  };

  const deleteImage = (e) => {
    console.log("image", e.target.id);
    axios
      .delete(`http://172.105.57.17:1337/api/upload/files/${e.target.id}`)
      .then((res) => {
        console.log("img deleted", res);
      })
      .catch((error) => {
        console.log("image error", error);
      });
  };

  if (!userData) {
    return;
  }

  return (
    <>
      <div className="flex justify-center gap-5 items-center p-4 max-lg:min-w-min max-lg:flex max-lg:flex-col max-lg:items-center">
        <div>
          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">
              First Name *
            </p>
            <input
              placeholder="Enter Your First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type={"text"}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>

          <div>
            <p className="my-4">Choose your type</p>
            <div className="flex items-center gap-[60px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type={"radio"}
                  checked={groomOrBride == "Groom"}
                  onClick={() => {
                    setGroomOrBride("Groom");
                  }}
                  className="h-[20px] w-[20px]"
                />
                <label>Groom</label>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type={"radio"}
                  checked={groomOrBride == "Bride"}
                  onClick={() => {
                    setGroomOrBride("Bride");
                  }}
                  className="h-[20px] w-[20px]"
                />
                <label>Bride</label>
              </div>
            </div>
          </div>

          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Date Of Birth *
            </p>
            <input
              value={dateOfBirth}
              onChange={(e) => {
                setDateOfBirth(e.target.value);
              }}
              type={"date"}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">Height *</p>
            <input
              placeholder="Enter height in cm"
              type={"text"}
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Educational Qualification *
            </p>
            <input
              placeholder="Enter Your Educational Qualification"
              type={"text"}
              value={educationalQualifications}
              onChange={(e) => {
                setEducationalQualifications(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>

          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Salary / Monthly Earnings *
            </p>
            <input
              placeholder="Enter Your Salary"
              type={"number"}
              value={salary}
              onChange={(e) => {
                setSalary(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Expectation *
            </p>
            <input
              placeholder="Enter Your Expectation"
              type={"text"}
              value={expectation}
              onChange={(e) => {
                setExpectation(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">Caste *</p>
            <input
              placeholder="Enter Your Caste"
              type={"text"}
              value={caste}
              onChange={(e) => {
                setCaste(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
        </div>
        <div>
          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">Last Name *</p>
            <input
              placeholder="Enter Your Last Name"
              type={"text"}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>

          <div>
            <p className="my-4">Choose your type</p>
            <div className="flex items-center gap-[60px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type={"radio"}
                  checked={vegOrNonVeg == "Vegetarian"}
                  onClick={() => {
                    setVegOrNonVeg("Vegetarian");
                  }}
                  className="h-[20px] w-[20px]"
                />
                <label>Vegetarian</label>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type={"radio"}
                  checked={vegOrNonVeg == "Non-Vegetarian"}
                  onClick={() => {
                    setVegOrNonVeg("Non-Vegetarian");
                  }}
                  className="h-[20px] w-[20px]"
                />
                <label>Non-Vegetarian</label>
              </div>
            </div>
          </div>

          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">Star *</p>
            <select
              value={star}
              onChange={(e) => {
                setStar(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            >
              {signs.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">Color *</p>
            <input
              placeholder="Enter Your Color"
              type={"text"}
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Career Details *
            </p>
            <input
              placeholder="Enter Career Details"
              type={"text"}
              value={careerDetails}
              onChange={(e) => {
                setCareerDetails(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>

          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Family Property Details *
            </p>
            <input
              placeholder="Enter Your Family Property Details"
              type={"text"}
              value={familyPropertyDetails}
              onChange={(e) => {
                setFamilyPropertyDetails(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Phone Number *
            </p>
            <input
              // type={"number"}
              type={"text"}
              value={phoneNumber}
              onChange={(e) => {
                const reg = /^[0-9\b]+$/;
                if (e.target.value === '' || reg.test(e.target.value)) {
                  if (e.target.value.length <= 10) {
                    setPhoneNumber(e.target.value);
                  }
                }
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
          <div className="mt-5 max-w-min mx-auto">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Marriage Status *
            </p>
            <select
              value={marriageStatus}
              onChange={(e) => {
                setMarriageStatus(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
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
        </div>
      </div>

      <div className="w-[auto] mx-auto lg:w-[51rem]">
        <p className="h-[10px] my-6">Profile Photo *</p>
        <div className="flex justify-between items-center max-lg:flex-col space-y-5 max-lg:flex max-lg:justify-start ">
          <div className="relative">
            {img1 && (
              <div className="absolute w-full h-full bg-black/[0.2]">
                <span
                  className="cursor-pointer p-2 rounded absolute top-1 right-1 bg-black/[0.3]"
                  id={userData.profile_photo?.data?.[0]?.id}
                  onClick={(e) => {
                    deleteImage(e);
                    setImg1(null);
                  }}
                >
                  {/* <TrashIcon className="h-10 w-10 text-red-700"/> */}
                  <svg
                    className="fill-current text-red-600"
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 16C1.5 17.1 2.4 18 3.5 18H11.5C12.6 18 13.5 17.1 13.5 16V4H1.5V16ZM14.5 1H11L10 0H5L4 1H0.5V3H14.5V1Z"
                    />
                  </svg>
                </span>
              </div>
            )}

            <Files
              className="files-dropzone cursor-pointer"
              onChange={onFilesChange1}
              onError={onFilesError1}
              accepts={["image/png", "image/jpg"]}
              maxFileSize={10000000}
              minFileSize={0}
              clickable
            >
              <Image
                src={
                  file1
                    ? file1[0].preview.url
                    : img1
                    ? `http://172.105.57.17:1337${img1}`
                    : fileInputImage
                }
                width={190}
                height={190}
                className="md:w-[190px] h-[190px] max-lg:w-[22rem] max-lg:h-[22rem] lg:-mb-5"
                alt={"File Input Image"}
              />
            </Files>
          </div>

          <div className="relative">
            {img2 && (
              <div className="absolute w-full h-full bg-black/[0.2]">
                <span
                  className="cursor-pointer p-2 rounded absolute top-1 right-1 bg-black/[0.3]"
                  id={userData.profile_photo?.data?.[1]?.id}
                  onClick={(e) => {
                    deleteImage(e);
                    setImg2(null);
                  }}
                >
                  {/* <TrashIcon className="h-10 w-10 text-red-700" /> */}
                  <svg
                    className="fill-current text-red-600"
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 16C1.5 17.1 2.4 18 3.5 18H11.5C12.6 18 13.5 17.1 13.5 16V4H1.5V16ZM14.5 1H11L10 0H5L4 1H0.5V3H14.5V1Z"
                    />
                  </svg>
                </span>
              </div>
            )}

            <Files
              className="files-dropzone cursor-pointer"
              onChange={onFilesChange2}
              onError={onFilesError2}
              accepts={["image/png", "image/jpg"]}
              maxFileSize={10000000}
              minFileSize={0}
              clickable
            >
              <Image
                src={
                  file2
                    ? file2[0].preview.url
                    : img2
                    ? `http://172.105.57.17:1337${img2}`
                    : fileInputImage
                }
                width={190}
                height={190}
                className="md:w-[190px] h-[190px] max-lg:w-[22rem] max-lg:h-[22rem]"
                alt={"File Input Image"}
              />
            </Files>
          </div>

          <div className="relative">
            {img3 && (
              <div className="absolute w-full h-full bg-black/[0.2]">
                <span
                  className="cursor-pointer p-2 rounded absolute top-1 right-1 bg-black/[0.3]"
                  id={userData.profile_photo?.data?.[2]?.id}
                  onClick={(e) => {
                    deleteImage(e);
                    setImg3(null);
                  }}
                >
                  {/* <TrashIcon className="h-10 w-10 text-red-700" /> */}
                  <svg
                    className="fill-current text-red-600"
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 16C1.5 17.1 2.4 18 3.5 18H11.5C12.6 18 13.5 17.1 13.5 16V4H1.5V16ZM14.5 1H11L10 0H5L4 1H0.5V3H14.5V1Z"
                    />
                  </svg>
                </span>
              </div>
            )}

            <Files
              className="files-dropzone cursor-pointer"
              onChange={onFilesChange3}
              onError={onFilesError3}
              accepts={["image/png", "image/jpg"]}
              maxFileSize={10000000}
              minFileSize={0}
              clickable
            >
              <Image
                src={
                  file3
                    ? file3[0].preview.url
                    : img3
                    ? `http://172.105.57.17:1337${img3}`
                    : fileInputImage
                }
                width={190}
                height={190}
                alt={"File Input Image"}
                className="md:w-[190px] h-[190px] max-lg:w-[22rem] max-lg:h-[22rem]"
              />
            </Files>
          </div>
          <div className="relative">
            {img4 && (
              <div className="absolute w-full h-full bg-black/[0.2]">
                <span
                  className="cursor-pointer p-2 rounded absolute top-1 right-1 bg-black/[0.3]"
                  id={userData.profile_photo?.data?.[3]?.id}
                  onClick={(e) => {
                    deleteImage(e);
                    setImg4(null);
                  }}
                >
                  {/* <TrashIcon className="h-10 w-10 text-red-700" /> */}
                  <svg
                    className="fill-current text-red-600"
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 16C1.5 17.1 2.4 18 3.5 18H11.5C12.6 18 13.5 17.1 13.5 16V4H1.5V16ZM14.5 1H11L10 0H5L4 1H0.5V3H14.5V1Z"
                    />
                  </svg>
                </span>
              </div>
            )}
            <Files
              className="files-dropzone cursor-pointer"
              onChange={onFilesChange4}
              onError={onFilesError4}
              accepts={["image/png", "image/jpg"]}
              maxFileSize={10000000}
              minFileSize={0}
              clickable
            >
              <Image
                src={
                  file4
                    ? file4[0].preview.url
                    : img4
                    ? `http://172.105.57.17:1337${img4}`
                    : fileInputImage
                }
                width={190}
                height={190}
                alt={"File Input Image"}
                className="md:w-[190px] h-[190px] max-lg:w-[22rem] max-lg:h-[22rem]"
              />
            </Files>
          </div>
        </div>
      </div>
      <div
        className={`${
          screen != 1 ? "w-[800px]" : "w-[400px]"
        } mx-auto flex justify-end my-3 gap-2 max-lg:flex max-lg:justify-center max-lg:w-44 max-md:gap-8`}
      >
        {screen != 1 && (
          <p
            className="text-main bg-white border-2 border-main py-2 px-5 rounded-md cursor-pointer max-w-max"
            onClick={() => {
              setScreen(screen - 1);
            }}
          >
            Back
          </p>
        )}
        <p
          className="text-white bg-main py-2 px-5 rounded-md cursor-pointer max-w-max"
          onClick={() => {
            if (validate()) {
              if (screen <= 3) {
                setScreen(screen + 1);
              }
              beforeNextScreen();
            }
          }}
        >
          Next
        </p>
      </div>
    </>
  );
};

export default EditProfileForm2;
