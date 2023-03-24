import React, { useState, useEffect } from "react";
import Image from "next/image";
import fileInputImage from "@/assets/fileInputBig.png";
import { toast } from "react-toastify";

import Files from "react-files";

const RegisterForm4 = ({ screen, setScreen, getAllDataAndPost }) => {
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

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const [file1ID, setFile1ID] = useState(null);
  const [file2ID, setFile2ID] = useState(null);

  const [increaseHoroscope, setIncreaseHoroscope] = useState([]);
  const [filesData, setFilesData] = useState([]);
  const [fileIds, setFileIds] = useState([]);

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

  // add more horo scope documents
  function uploadFile(filedata) {
    setFilesData([...filesData, filedata]);
    var formdata = new FormData();
    formdata.append("files", filedata[0], filedata[0].preview.url);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    fetch("http://172.105.57.17:1337/api/upload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setFileIds([...fileIds, result[0].id]);
      })
      .catch((error) => {
        console.log("error", error);
        setFileIds([...fileIds, 7]);
      });
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
    const rg = sessionStorage.getItem("rg4");
    if (rg) {
      const jrg = JSON.parse(rg);

      setFile1(jrg.file1);
      setFile2(jrg.file2);
      setZodiacSign(jrg.zodiacSign);
      setTamilYear(jrg.tamilYear);
      setTamilMonth(jrg.tamilMonth);
      setUdayatiNazhikai(jrg.udayatiNazhikai);
      setDay(jrg.day);
      setBirthTime(jrg.birthTime);
      setStarFoot(jrg.starFoot);
      setAscendant(jrg.ascendant);
      setBirthplace(jrg.birthplace);
      setPresenceOFNatalDirection(jrg.presenceOfNatalDirection);
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
          setFile1ID(7);
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
          setFile2ID(8);
        });
    }
  }, [file2]);

  const beforeNextScreen = () => {
    const rg4 = {
      horrorscopeImages: [file1ID, file2ID, ...fileIds],
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
    sessionStorage.setItem("rg4", JSON.stringify(rg4));
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

    if (!(file1 && file2)) {
      toast.error("Please Input all the files");
      return false;
    }

    if (isNaN(Number(tamilYear))) {
      toast.error("Please Enter A Valid Tamil Year");
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="w-[820px] mx-auto">
        <p className="font-[600] text-[18px]">Horoscope Information</p>
      </div>

      <div className="flex justify-center items-center gap-5">
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

      <div className="flex justify-center items-center gap-5">
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

      <div className="flex justify-center items-center gap-5">
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

      <div className="flex justify-center items-center gap-5">
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

      <div className="flex justify-center items-center gap-5">
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
          <button
            onClick={() => {
              console.log("add more");
              setIncreaseHoroscope([
                ...increaseHoroscope,
                increaseHoroscope.length + 1,
              ]);
            }}
            className="text-main font-[400] text-[14px]"
          >
            Add more
          </button>
        </div>
        <div className="w-full flex justify-between items-center mt-3">
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
              src={file1 ? file1[0].preview.url : fileInputImage}
              alt={"File Input Image"}
              width={400}
              height={300}
            />
          </Files>
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
              src={file2 ? file2[0].preview.url : fileInputImage}
              alt={"File Input Image"}
              width={400}
              height={300}
            />
          </Files>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 mt-3">
          {increaseHoroscope.map((val, i) => {
            return (
              <>
                <Files
                  key={i} 
                  className="files-dropzone cursor-pointer"
                  onChange={uploadFile}
                  onError={onFilesError1}
                  accepts={["image/png"]}
                  maxFileSize={10000000}
                  minFileSize={0}
                  clickable
                >
                  <Image
                    src={
                      filesData?.[i]
                        ? filesData?.[i]?.[0].preview.url
                        : fileInputImage
                    }
                    alt={"File Input Image"}
                    width={400}
                    height={300}
                  />
                </Files>
              </>
            );
          })}
        </div>
      </div>
      <div
        className={`${
          screen != 1 ? "w-[800px]" : "w-[400px]"
        } mx-auto flex justify-end my-3 gap-2`}
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

export default RegisterForm4;
