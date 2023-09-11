import React, { useState, useEffect } from "react";
import Image from "next/image";
import fileInputImage from "@/assets/fileInput.png";

import { toast } from "react-toastify";

import Files from "react-files";

const RegisterForm2 = ({ screen, setScreen }) => {
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
  const [dateOfBirth, setDateOfBirth] = useState("");

  const [height, setHeight] = useState("");
  const [educationalQualifications, setEducationalQualifications] =
    useState("");
  const [salary, setSalary] = useState("");
  const [expectation, setExpectation] = useState("");
  const [aadharNo, setaadharNo] = useState("");
  const [caste, setCaste] = useState("");

  const [lastName, setLastName] = useState("");
  const [vegOrNonVeg, setVegOrNonVeg] = useState("Vegetarian");
  const [star, setStar] = useState("Aries");
  const [color, setColor] = useState("");
  const [careerDetails, setCareerDetails] = useState("");
  const [familyPropertyDetails, setFamilyPropertyDetails] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [marriageStatus, setMarriageStatus] = useState("Single");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileID, setselectedFileID] = useState(4);

  const handleFileChange = (event) => {
    console.log(event);
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    const rg = sessionStorage.getItem("rg2");
    if (rg) {
      const jrg = JSON.parse(rg);
      setFile1(jrg.file1);
      setFile2(jrg.file2);
      setFile3(jrg.file3);
      setFile4(jrg.file4);
      setSelectedFile(jrg.selectedFile);
      setFirstName(jrg.firstName);
      setGroomOrBride(jrg.groomOrBride);
      setDateOfBirth(jrg.dateOfBirth);
      setHeight(jrg.height);
      setEducationalQualifications(jrg.educationalQualifications);
      setSalary(jrg.salary);
      setExpectation(jrg.expectation);
      setCaste(jrg.caste);
      setaadharNo(aadharNo);
      setLastName(jrg.lastName);
      setVegOrNonVeg(jrg.vegOrNonVeg);
      setStar(jrg.star);
      setColor(jrg.color);
      setCareerDetails(jrg.careerDetails);
      setFamilyPropertyDetails(jrg.familyPropertyDetails);
      setPhoneNumber(jrg.phoneNumber);
      setMarriageStatus(jrg.marriageStatus);
    }
  }, [aadharNo]);

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
          setselectedFileID(result[0].id);
          toast.success("Image Uploaded Successfully");
        })
        .catch((error) => {
          console.log("error", error);
          setFile1ID(4);
        });
    }
  }, [selectedFile]);

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
  }, [file4, height]);

  const beforeNextScreen = () => {
    const rg2 = {
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
      tcrCertificate:selectedFileID,
      aadharNo
    };
    sessionStorage.setItem("rg2", JSON.stringify(rg2));
  };
  console.log(marriageStatus);
  var phoneRegex = /^(?:(?:\+91)|(?:91)|(?:0))?[7-9][0-9]{9}$/;
  var nameRegex = /\d/g;
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
        caste &&
        aadharNo &&
        selectedFile
      )
    ) {
      toast.error("Please Input all fields");
      return false;
    }

    if (!(file1 && file2 && file3 && file4)) {
      toast.error("Please input all the files");
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
    if (parseFloat(height) < 1 || parseFloat(height) === 0) {
      toast.error("Please enter a valid Height");
      return false;
    }
    if (parseFloat(salary) < 1 || parseFloat(salary) === 0) {
      toast.error("Please enter a valid Salary");
      return false;
    }
    if (aadharNo.length < 12) {
      toast.error("Please enter a valid Aadhar Number");
      return false;
    } if (selectedFile == null) {
      toast.error("Please Select TCR Certificate");
      return false;
    } if (aadharNo == "") {
      toast.error("Enter Aadhar Number");
      return false;
    }

    return true;
  };

  const [isValid, setIsValid] = useState(true);
  const [isHeightValid, setHeightValid] = useState(true);
  const [isIncomeValid, setIncomeValid] = useState(true);
  const [isFValid, setFValid] = useState(true);
  const [isLValid, setLValid] = useState(true);
  const [isAadharValid, setAadharValid] = useState(true);
  console.log(isAadharValid);
  const handleHeight = (event) => {
    const inputHeight = event.target.value;
    if (inputHeight > 250 || inputHeight < 1 || inputHeight === 1) {
      // toast.error("Please enter valid height!");
      setHeightValid(false);
      setHeight("");
    } else {
      setHeight(inputHeight);
      setHeightValid(true);
    }
  };

  const handleIncome = (event) => {
    const inputIncome = event.target.value;
    if (inputIncome < 1 || inputIncome === 1 || inputIncome === 0) {
      // toast.error("Please enter valid height!");
      setIncomeValid(false);
      setSalary("");
    } else {
      setSalary(inputIncome);
      setIncomeValid(true);
    }
  };

  const handleFname = (event) => {
    const inputFirst = event.target.value;
    var nameRegex = /\d/g;

    if (nameRegex.test(inputFirst)) {
      // toast.error("Name must not contain a number");
      setFValid(false);
      return false;
    } else {
      setFValid(true);
      setFirstName(inputFirst);
    }
  };

  const handleLname = (event) => {
    const inputLast = event.target.value;
    var nameRegex = /\d/g;

    if (nameRegex.test(inputLast)) {
      // toast.error("Name must not contain a number");
      setLValid(false);
      return false;
    } else {
      setLValid(true);
      setLastName(inputLast);
    }
  };

  const handleDOBChange = (event) => {
    const inputDate = event.target.value;
    const pattern = /^\d{4}-\d{2}-\d{2}$/;

    if (pattern.test(inputDate)) {
      const [year, month, day] = inputDate.split("-");
      const currentDate = new Date();
      const enteredDate = new Date(year, month - 1, day);

      const isValidDate =
        !isNaN(year) &&
        !isNaN(month) &&
        !isNaN(day) &&
        year <= currentDate.getFullYear() &&
        month <= 12 &&
        day <= 31 &&
        enteredDate <= currentDate;

      if (isValidDate) {
        setDateOfBirth(inputDate);
        setIsValid(true);
      } else {
        setIsValid(false);
        // toast.error("Please enter valid date!");
      }
    } else {
      // toast.error("Please enter valid date!");

      setIsValid(false);
    }
  };

  const handleAadhar = (e) => {
    const inputAadhar = e.target.value;
    const trimmedInput = inputAadhar.replace(/\s/g, "");
     if (inputAadhar.length > 12) {
      setAadharValid(false);
    }else if (inputAadhar < 0 ) {
      setAadharValid(false);

    } else if (inputAadhar === "") {
        setaadharNo(inputAadhar);
        setAadharValid(true);
    } else {
      setaadharNo(inputAadhar);
      setAadharValid(true);
    }
  };

  return (
    <>
      <div className=" grid justify-items-center justify-content-center">
        <div class="gri-wid grid grid-cols-2 gap-4">
          <div className="">
            <label className="block mb-1">First Name *</label>
            <input
              type="text"
              value={firstName}
              onChange={handleFname}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter Your First Name"
            />
            {!isFValid && <p style={{ color: "red" }}>Invalid first name.</p>}
          </div>
          <div className="">
            <label className="block mb-1">Last Name *</label>
            <input
              placeholder="Enter Your Last Name"
              type={"text"}
              value={lastName}
              onChange={handleLname}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isLValid && <p style={{ color: "red" }}>Invalid last name.</p>}
          </div>
        </div>
        <div class="gri-wid grid grid-cols-2 gap-4 ">
          <div className="grid-choice-one p-2 ">
            <label className="block mb-1">Choose your type:</label>
            <label className="inline-flex items-center my-2 px-2">
              <input
                type={"radio"}
                checked={groomOrBride === "Groom"}
                onClick={() => {
                  setGroomOrBride("Groom");
                }}
                className="form-radio text-blue-500 h-[20px] w-[20px]"
                name="radioGroup"
              />
              <span className="ml-2">Groom</span>
            </label>
            <label className="inline-flex items-center px-2">
              <input
                type={"radio"}
                checked={groomOrBride === "Bride"}
                onClick={() => {
                  setGroomOrBride("Bride");
                }}
                className="form-radio text-blue-500 h-[20px] w-[20px]"
                name="radioGroup"
              />
              <span className="ml-2">Bride</span>
            </label>
            {!isFValid && (
              <p style={{ color: "red", display: "none" }}>
                Invalid first name.
              </p>
            )}
          </div>
          <div className="grid-choice-one p-2">
            <label className="block mb-1">Choose your type</label>
            <div>
              <label className="inline-flex items-center my-2 px-2">
                <input
                  type={"radio"}
                  checked={vegOrNonVeg == "Vegetarian"}
                  onClick={() => {
                    setVegOrNonVeg("Vegetarian");
                  }}
                  className="form-radio text-blue-500 h-[20px] w-[20px]"
                  name="radioGroup1"
                />
                <span className="ml-2">Vegetarian</span>
              </label>
              <label className="inline-flex items-center px-2">
                <input
                  type={"radio"}
                  checked={vegOrNonVeg == "Non-Vegetarian"}
                  onClick={() => {
                    setVegOrNonVeg("Non-Vegetarian");
                  }}
                  className="form-radio text-blue-500 h-[20px] w-[20px] "
                  name="radioGroup1"
                />
                <span className="ml-2">Non-Vegetarian</span>
              </label>
            </div>
            {!isFValid && (
              <p style={{ color: "red", display: "none" }}>
                Invalid first name.
              </p>
            )}
          </div>
        </div>
        <div class="gri-wid grid grid-cols-2 gap-4">
          <div className=" p-2">
            <label className="block">Date Of Birth *</label>
            <input
              value={dateOfBirth}
              onChange={handleDOBChange}
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="YYYY-MM-DD"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isValid && (
              <p style={{ color: "red" }}>Invalid date format or values.</p>
            )}
          </div>
          <div className=" p-2">
            <label className="block">Star *</label>
            <select
              value={star}
              onChange={(e) => {
                setStar(e.target.value);
              }}
              className="w-full p-2 border border-gray-300 rounded py-[7px]"
            >
              {signs.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            {!isFValid && (
              <p style={{ color: "red", display: "none" }}>
                Invalid first name.
              </p>
            )}
          </div>
        </div>
        <div class="gri-wid grid grid-cols-2 gap-4">
          <div className=" p-2">
            <label className="block">Height *</label>
            <input
              placeholder="Enter height in cm"
              type={"number"}
              value={height}
              onChange={handleHeight}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isHeightValid && (
              <p style={{ color: "red" }}>Height Should be less than 250 cm.</p>
            )}
          </div>
          <div className=" p-2">
            <label className="block">Color *</label>
            <input
              placeholder="Enter Your Color"
              type={"text"}
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isFValid && (
              <p style={{ color: "red", display: "none" }}>
                Invalid first name.
              </p>
            )}
          </div>
        </div>
        <div class="gri-wid grid grid-cols-2 gap-4">
          <div className=" p-2">
            <label className="block text-sm">Educational Qualification *</label>
            <input
              placeholder="Enter Your Educational Qualification"
              type={"text"}
              value={educationalQualifications}
              onChange={(e) => {
                setEducationalQualifications(e.target.value);
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isFValid && (
              <p style={{ color: "red", display: "none" }}>
                Invalid first name.
              </p>
            )}
          </div>
          <div className=" p-2">
            <label className="block">Career Details *</label>
            <input
              placeholder="Enter Career Details"
              type={"text"}
              value={careerDetails}
              onChange={(e) => {
                setCareerDetails(e.target.value);
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isFValid && (
              <p style={{ color: "red", display: "none" }}>
                Invalid first name.
              </p>
            )}
          </div>
        </div>
        <div class="gri-wid grid grid-cols-2 gap-4">
          <div className=" p-2">
            <label className="block text-sm">Salary / Monthly Earnings *</label>
            <input
              placeholder="Enter Your Salary"
              type={"number"}
              value={salary}
              onChange={handleIncome}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isIncomeValid && (
              <p style={{ color: "red" }}>Invalid amount enter.</p>
            )}
          </div>
          <div className=" p-2">
            <label className="block">Family Property Details *</label>
            <input
              placeholder="Enter Your Family Property Details"
              type={"text"}
              value={familyPropertyDetails}
              onChange={(e) => {
                setFamilyPropertyDetails(e.target.value);
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isFValid && (
              <p style={{ color: "red", display: "none" }}>
                Invalid first name.
              </p>
            )}
          </div>
        </div>
        <div class="gri-wid grid grid-cols-2 gap-4">
          <div className=" p-2">
            <label className="block">Expectation *</label>
            <input
              placeholder="Enter Your Expectation"
              type={"text"}
              value={expectation}
              onChange={(e) => {
                setExpectation(e.target.value);
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isFValid && (
              <p style={{ color: "red", display: "none" }}>
                Invalid first name.
              </p>
            )}
          </div>
          <div className=" p-2">
            <label className="block">Phone Number *</label>
            <input
              placeholder="Enter Contact Number"
              pattern="[0-9]"
              type={"text"}
              value={phoneNumber}
              onChange={(e) => {
                const reg = /^[0-9\b]+$/;
                if (e.target.value === "" || reg.test(e.target.value)) {
                  if (e.target.value.length <= 10) {
                    setPhoneNumber(e.target.value);
                  }
                }
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isFValid && (
              <p style={{ color: "red", display: "none" }}>
                Invalid first name.
              </p>
            )}
          </div>
        </div>
        <div class="gri-wid grid grid-cols-2 gap-4">
          <div className=" p-2">
            <label className="block">Aadhar Number *</label>
            <input
              placeholder="Enter Your Aadhar Number"
              type={"number"}
              value={aadharNo}
              onChange={handleAadhar}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isAadharValid && (
              <p style={{ color: "red" }}>Enter Valid Aadhar.</p>
            )}
          </div>
          <div className=" p-2">
            <label className="block">TCR Certificate *</label>
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
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isFValid && (
              <p style={{ color: "red", display: "none" }}>
                Invalid first name.
              </p>
            )}
          </div>
        </div>
        <div class="gri-wid grid grid-cols-2 gap-4">
          <div className=" p-2">
            <label className="block">Caste *</label>
            <input
              placeholder="Enter Your Caste"
              type={"text"}
              value={caste}
              onChange={(e) => {
                setCaste(e.target.value);
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {!isFValid && (
              <p style={{ color: "red", display: "none" }}>
                Invalid first name.
              </p>
            )}
          </div>
          <div className=" p-2">
            <label className="block mb-1">Marriage Status *</label>
            <select
              value={marriageStatus}
              onChange={(e) => {
                setMarriageStatus(e.target.value);
              }}
              className="w-full p-2 border border-gray-300 rounded py-[5px] mb-2"
            >
              {marriageStatuses.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            {!isFValid && (
              <p style={{ color: "red", display: "none" }}>
                Invalid first name.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="w-[auto] mx-auto lg:w-[51rem] ">
        <p className=" p-text">Profile Photo *</p>
        <div className="flex justify-between items-center max-lg:flex-col space-y-5 max-lg:flex max-lg:justify-start ">
          <Files
            className="files-dropzone cursor-pointer"
            onChange={onFilesChange1}
            onError={onFilesError1}
            accepts={["image/png", "image/jpg", "image/jpeg", "image/svg+xml"]}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            <Image
              src={file1 ? file1[0].preview.url : fileInputImage}
              width={190}
              height={190}
              className="md:w-[190px] h-[190px] max-lg:w-[22rem] max-lg:h-[22rem]"
              alt={"File Input Image"}
            />
          </Files>

          <Files
            className="files-dropzone cursor-pointer"
            onChange={onFilesChange2}
            onError={onFilesError2}
            accepts={["image/png", "image/jpg", "image/jpeg", "image/svg+xml"]}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            <Image
              src={file2 ? file2[0].preview?.url : fileInputImage}
              width={190}
              height={190}
              className="md:w-[190px] h-[190px] max-lg:w-[22rem] max-lg:h-[22rem]"
              alt={"File Input Image"}
            />
          </Files>

          <Files
            className="files-dropzone cursor-pointer"
            onChange={onFilesChange3}
            onError={onFilesError3}
            accepts={["image/png", "image/jpg", "image/jpeg", "image/svg+xml"]}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            <Image
              src={file3 ? file3[0].preview.url : fileInputImage}
              width={190}
              height={190}
              alt={"File Input Image"}
              className="md:w-[190px] h-[190px] max-lg:w-[22rem] max-lg:h-[22rem]"
            />
          </Files>
          <Files
            className="files-dropzone cursor-pointer"
            onChange={onFilesChange4}
            onError={onFilesError4}
            accepts={["image/png", "image/jpg", "image/jpeg", "image/svg+xml"]}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            <Image
              src={file4 ? file4[0].preview.url : fileInputImage}
              width={190}
              height={190}
              alt={"File Input Image"}
              className="md:w-[190px] h-[190px] max-lg:w-[22rem] max-lg:h-[22rem]"
            />
          </Files>
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

export default RegisterForm2;
