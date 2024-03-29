import React, { useState, useEffect } from "react";
import Image from "next/image";
import fileInputImage from "@/assets/fileInputBig.png";
import { toast } from "react-toastify";

import Files from "react-files";
import axios from "axios";

const EditProfileForm4 = ({
  screen,
  setScreen,
  getAllDataAndPost,
  userData,
}) => {
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
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const [file1ID, setFile1ID] = useState(null);
  const [file2ID, setFile2ID] = useState(null);

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

  const [zodiacSign, setZodiacSign] = useState("Aries");
  const [tamilYear, setTamilYear] = useState("");

  const [tamilMonth, setTamilMonth] = useState("");
  const [udayatiNazhikai, setUdayatiNazhikai] = useState("");

  const [day, setDay] = useState("Sunday");
  const [birthTime, setBirthTime] = useState("");

  const [starFoot, setStarFoot] = useState("Aries");
  const [ascendant, setAscendant] = useState("Aries");

  const [birthplace, setBirthplace] = useState("");
  const [presenceOfNatalDirection, setPresenceOFNatalDirection] = useState("");

  useEffect(() => {
    if (userData) {
      setZodiacSign(userData.zodiacs_sign);
      setTamilYear(userData.tamil_year);
      setTamilMonth(userData.tamil_month);
      setUdayatiNazhikai(userData.udayati_nazhikai);
      setDay(userData.day);
      setBirthTime(userData.birth_time.slice(0, 5));
      setStarFoot(userData.star_foot);
      setAscendant(userData.ascendant);
      setBirthplace(userData.birthplace);
      setPresenceOFNatalDirection(userData.presence_of_natal_direction);

      setImg1(userData.horoscope_document?.data?.[0]?.attributes.url);
      setImg2(userData.horoscope_document?.data?.[1]?.attributes.url);

      setFile1ID(userData.horoscope_document?.data?.[0]?.id);
      setFile2ID(userData.horoscope_document?.data?.[0]?.id);
    }
  }, [userData]);

  useEffect(() => {
    const edit = sessionStorage.getItem("edit4");
    if (edit) {
      const jrg = JSON.parse(edit);

      setFile1(jrg.file1);
      setFile2(jrg.file2);
      setZodiacSign(jrg.zodiacSign);
      setTamilYear(jrg.tamilYear);
      setTamilMonth(jrg.tamilMonth);
      setUdayatiNazhikai(jrg.udayatiNazhikai);
      setDay(jrg.day);
      setBirthTime(jrg.birthTime.slice(0, 5));
      setStarFoot(jrg.starFoot);
      setAscendant(jrg.ascendant);
      setBirthplace(jrg.birthplace);
      setPresenceOFNatalDirection(jrg.presenceOfNatalDirection);
    }
  }, []);

  useEffect(() => {
    if (file1) {
      var formdata = new FormData();
      formdata.append("files", file1[0], file1[0]?.preview?.url);
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
          setFile1ID(7);
        });
    }
  }, [file1]);

  useEffect(() => {
    if (file2) {
      var formdata = new FormData();
      formdata.append("files", file2[0], file2[0]?.preview?.url);
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
          setFile2ID(8);
        });
    }
  }, [file2]);

  const beforeNextScreen = () => {
    const edit4 = {
      horrorscopeImages: [file1ID, file2ID],
      zodiacSign,
      tamilYear,
      tamilMonth,
      udayatiNazhikai,
      day,
      birthTime,
      starFoot,
      ascendant,
      birthplace,
      presenceOfNatalDirection,
    };
    sessionStorage.setItem("edit4", JSON.stringify(edit4));
  };

  const validate = () => {
    if (
      !(
        tamilYear &&
        tamilMonth &&
        udayatiNazhikai &&
        birthTime &&
        presenceOfNatalDirection &&
        birthplace
      )
    ) {
      toast.error("Please Enter All The fields");
      return false;
    }

    if (!(file1 || img1) && (file2 || img2)) {
      toast.error("Please Input all the files");
      return false;
    }

    // if (isNaN(Number(tamilYear))) {
    //   toast.error("Please Enter A Valid Tamil Year");
    //   return false;
    // }
    return true;
  };

  const deleteImage = (id) => {
    console.log("image", id);
    axios
      .delete(`http://172.105.57.17:1337/api/upload/files/${id}`)
      .then((res) => {
        console.log("img deleted", res);
      })
      .catch((error) => {
        console.log("image error", error);
      });
  };

  return (
    <>
      <div className="w-auto mx-auto">
      {/* w-[820px] */}
        <p className="font-[600] text-[18px] mx-20 sm:text-center md:text-left lg:text-left">Horoscope Information</p>
      </div>

      <div className="sm:flex-wrap md:flex lg:flex mx-3 justify-center items-center gap-5">
        <div className="mt-5">
          <p className="text-dark font-[500] text-[14px] mb-2">Zodiac Sign *</p>
          <select
            value={zodiacSign}
            onChange={(e) => {
              setZodiacSign(e.target.value);
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
        <div className="mt-5">
          <p className="text-dark font-[500] text-[14px] mb-2">Tamil Year *</p>
          <input
            placeholder="Enter Tamil Year"
            type={"text"}
            value={tamilYear}
            onChange={(e) => {
              setTamilYear(e.target.value);
            }}
            className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
          />
        </div>
      </div>

      <div className="sm:flex-wrap md:flex lg:flex mx-3 justify-center items-center gap-5">
        <div className="mt-5">
          <p className="text-dark font-[500] text-[14px] mb-2">Tamil Month*</p>
          <input
            placeholder="Enter Tamil Month"
            type={"text"}
            value={tamilMonth}
            onChange={(e) => {
              setTamilMonth(e.target.value);
            }}
            className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
          />
        </div>
        <div className="mt-5">
          <p className="text-dark font-[500] text-[14px] mb-2">
            Udayati Nazhikai *
          </p>
          <input
            placeholder="Enter Udayati Nazhikai"
            type={"text"}
            value={udayatiNazhikai}
            onChange={(e) => {
              setUdayatiNazhikai(e.target.value);
            }}
            className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
          />
        </div>
      </div>

      <div className="sm:flex-wrap md:flex lg:flex mx-3 justify-center items-center gap-5">
        <div className="mt-5">
          <p className="text-dark font-[500] text-[14px] mb-2">Day *</p>
          <select
            value={day}
            onChange={(e) => {
              setDay(e.target.value);
            }}
            className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
          >
            {daysOfWeek.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mt-5">
          <p className="text-dark font-[500] text-[14px] mb-2">Birth Time *</p>
          <input
            type={"time"}
            value={birthTime}
            onChange={(e) => {
              setBirthTime(e.target.value);
            }}
            className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
          />
        </div>
      </div>

      <div className="sm:flex-wrap md:flex lg:flex mx-3 justify-center items-center gap-5">
        <div className="mt-5">
          <p className="text-dark font-[500] text-[14px] mb-2">Star / Foot *</p>
          <select
            value={starFoot}
            onChange={(e) => {
              setStarFoot(e.target.value);
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
        <div className="mt-5">
          <p className="text-dark font-[500] text-[14px] mb-2">
            Ascendant (Laknam) *
          </p>
          <select
            value={ascendant}
            onChange={(e) => {
              setAscendant(e.target.value);
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
      </div>

      <div className="sm:flex-wrap md:flex lg:flex mx-3 justify-center items-center gap-5">
        <div className="mt-5">
          <p className="text-dark font-[500] text-[14px] mb-2">Birthplace*</p>
          <input
            placeholder="Enter Your Birthplace"
            type={"text"}
            value={birthplace}
            onChange={(e) => {
              setBirthplace(e.target.value);
            }}
            className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
          />
        </div>
        <div className="mt-5">
          <p className="text-dark font-[500] text-[14px] mb-2">
            Presence of Natal Direction *
          </p>
          <input
            placeholder="Enter Your Presence of Natal Direction"
            type={"text"}
            value={presenceOfNatalDirection}
            onChange={(e) => {
              setPresenceOFNatalDirection(e.target.value);
            }}
            className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
          />
        </div>
      </div>

      <div className="w-[820px] mx-auto mt-5">
        <div className="w-full flex justify-between items-center">
          <p className="text-dark font-[500] text-[14px]">Horoscope Doucment</p>
          {/* <p className="text-main font-[400] text-[14px]">Add more</p> */}
        </div>
        <div className="w-full flex justify-between items-center mt-3">
          <div className="relative">
            {img1 && (
              <div className="absolute w-full h-full bg-black/[0.2]">
                <span
                  className="cursor-pointer p-2 rounded absolute top-1 right-1 bg-black/[0.3]"
                  // id={userData.profile_photo?.data?.[0]?.id}
                  onClick={(e) => {
                    deleteImage(file1ID);
                    setImg1(null);
                  }}
                >
                  <svg
                    className="fill-current text-red-600"
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.5 16C1.5 17.1 2.4 18 3.5 18H11.5C12.6 18 13.5 17.1 13.5 16V4H1.5V16ZM14.5 1H11L10 0H5L4 1H0.5V3H14.5V1Z" />
                  </svg>
                </span>
              </div>
            )}
            <Files
              className="files-dropzone cursor-pointer"
              onChange={onFilesChange1}
              onError={onFilesError1}
              accepts={["image/png"]}
              maxFileSize={10000000}
              minFileSize={0}
              clickable
            >
              <Image
                src={
                  file1
                    ? file1[0]?.preview?.url
                    : img1
                    ? `http://172.105.57.17:1337${img1}`
                    : fileInputImage
                }
                alt={"File Input Image"}
                width={400}
                height={300}
              />
            </Files>
          </div>

          <div className="relative">
            {img2 && (
              <div className="absolute w-full h-full bg-black/[0.2]">
                <span
                  className="cursor-pointer p-2 rounded absolute top-1 right-1 bg-black/[0.3]"
                  onClick={(e) => {
                    deleteImage(file2ID);
                    setImg2(null);
                  }}
                >
                  <svg
                    className="fill-current text-red-600"
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.5 16C1.5 17.1 2.4 18 3.5 18H11.5C12.6 18 13.5 17.1 13.5 16V4H1.5V16ZM14.5 1H11L10 0H5L4 1H0.5V3H14.5V1Z" />
                  </svg>
                </span>
              </div>
            )}
            <Files
              className="files-dropzone cursor-pointer"
              onChange={onFilesChange2}
              onError={onFilesError2}
              accepts={["image/png"]}
              maxFileSize={10000000}
              minFileSize={0}
              clickable
            >
              <Image
                src={
                  file2
                    ? file2[0]?.preview?.url
                    : img2
                    ? `http://172.105.57.17:1337${img2}`
                    : fileInputImage
                }
                alt={"File Input Image"}
                width={400}
                height={300}
              />
            </Files>
          </div>
        </div>
      </div>
      <div
        className={`${
          screen != 1 ? "w-[400px]" : "w-[200px]"
        } mx-auto flex justify-center my-3 gap-2`}
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
              getAllDataAndPost();
            }
          }}
        >
          Next
        </p>
      </div>
    </>
  );
};

export default EditProfileForm4;
