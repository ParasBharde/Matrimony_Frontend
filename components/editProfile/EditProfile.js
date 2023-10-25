import React, { useEffect, useState } from "react";
import profile from "@/assets/profile.png";
import Image from "next/image";
import horos from "@/assets/horos.png";
import horos1 from "@/assets/horos1.png";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb";
import Heart from "@/assets/SVG/heart.svg";
import Download from "@/assets/SVG/downloadlogo.svg";
import Share from "@/assets/SVG/share.svg";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Modal } from "reactstrap";
import { useRouter } from "next/router";
import { useStorage } from "@/hooks/useStorage";
import axios from "axios";
import { useCalculateAge } from "@/hooks/useCalculateAge";

const EditProfile = () => {
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  const [modalImage, setModalImage] = useState(2);
  const router = useRouter();
  const { locale } = useRouter();
  const calculateAge = useCalculateAge();

  const storageData = useStorage();
  const [userProfile, setUserProfile] = useState([]);
  const [profileImg, setProfileImg] = useState();
  const [img, setImg] = useState([]);

  // console.log(storageData)
  useEffect(() => {
    if (userProfile) {
      setProfileImg(userProfile?.profile_photo?.data);
      setImg(userProfile.horoscope_document?.data);
    }
  }, [userProfile]);

  function downloadPdf() {
    const input = document.getElementById("pdf-content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  }

  useEffect(() => {
    if (storageData) {
      let api = "http://172.105.57.17:1337/api/profiles/?populate=%2A";
     
      async function getUser() {
        try {
          const response = await axios.get(api);
          // console.log("response", response.data.data);
          const userProfiles = response.data.data.filter( (u) => {return u?.attributes?.user?.data?.id == storageData?.id});
          const userRegisterProfile = response.data.data.filter((u) => {return  u?.attributes?.user?.data?.id == storageData?.id});
          const udata = userProfiles[0]?.attributes;
          const uRdata = userRegisterProfile[0]?.attributes;
          // console.log(udata)
          // console.log(uRdata)

          setUserProfile(uRdata != undefined ? uRdata : udata);
        } catch (error) {
          console.error(error);
        }
      }
      getUser();
    }
  }, [storageData, locale]);
  // console.log(userProfile)
  if (!userProfile) {
    return;
  }

  const {
    first_name,
    last_name,
    email,
    phone_number,
    date_of_birth,
    star,
    marriage_status,
    Height,
    educational_qualification,
    Color,
    caste,
    career_detail,
    Salary_monthly_income,
    Expection,
    family_property_details,
    Choose_veg_nonveg,
    father_name,
    mother_name,
    father_native,
    mother_native,
    father_profession,
    mother_profession,
    parents_contact_number,
    address,
    brothers,
    elder_brothers,
    younger_brothers,
    married_brothers,
    sisters,
    elder_sisters,
    younger_sisters,
    married_sisters,
    zodiacs_sign,
    tamil_year,
    tamil_month,
    udayati_nazhikai,
    day,
    birth_time,
    star_foot,
    ascendant,
    birthplace,
    presence_of_natal_direction,
  } = userProfile;

  // console.log(first_name)
  // console.log("url",userProfile.horoscope_document?.data?.[0]?.attributes?.url);

  // const imageLoader = ({src}) => {
  //   return src;
  // }
  return (
    <>
      <div className="container" style={{ backgroundColor: "white" }}>
        <Breadcrumb screens={["Home", "Search", "My Profile Details"]} />
        <div className="main_container flex justify-center">
          <div className="lg:px-10 md:px-5 sm:px-5">
            <div className="flex items-center w-full bg-main h-16 px-5 ">
              <span className="text-white flex-1">Profile Detail</span>
              <div className="flex items-center ">
                <button
                  className="bg-white text-main px-[2rem] rounded py-[5px]"
                  onClick={() => router.push("/editProfile")}
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="profile_data table-fixed bg-white">
              <div className="flex justify-between">
                <div className=" max-md:mt-[18rem]">
                  <div className="ml-5 mt-2">
                    <p className="font-bold pt-5 ml-5">
                      {first_name} {last_name}
                    </p>
                  </div>
                  <div className=" ml-5">
                    <p className="ml-5">{storageData?.user_profile?.id}</p>
                  </div>
                  <div className="grid lg:grid-cols-3 max-md:grid-cols-1 sm:grid-cols-1">
                    <div className="p-5  ">
                      <div className="ml-5">
                        <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                          Email{" "}
                        </span>
                        <p className="max-md:break-normal">{email}</p>
                      </div>
                      <div className="mt-5 ml-5">
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Age</p>
                        {/* <p>{calculateAge(date_of_birth)}</p> */}
                        <p>{calculateAge(date_of_birth)}</p>
                      </div>
                      <div className="mt-5 ml-5">
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                          {" "}
                          Height
                        </p>
                        <p>{Height}</p>
                      </div>
                      <div className="mt-5 ml-5">
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}> Caste</p>
                        <p>{caste}</p>
                      </div>
                      <div className="mt-5 ml-5">
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Career</p>
                        <p>{career_detail}</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="ml-5">
                        <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                          Phone
                        </span>
                        <p className="">{phone_number}</p>
                      </div>
                      <div className="mt-5 ml-5">
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Star </p>
                        <p>{star}</p>
                      </div>
                      <div className="mt-5 ml-5">
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                          Qualification
                        </p>
                        <p>{educational_qualification}</p>
                      </div>
                      <div className="mt-5 ml-5">
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                          Family Property{" "}
                        </p>
                        <p>{family_property_details}</p>
                      </div>
                      <div className="mt-5 ml-5">
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Salary</p>
                        <p>{Salary_monthly_income}</p>
                      </div>
                    </div>
                    <div className="p-5  ">
                      <div className="ml-5">
                        <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                          Date of Birth
                        </span>
                        <p>{date_of_birth}</p>
                      </div>
                      <div className="mt-5 ml-5">
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                          Marriage Status
                        </p>
                        <p>{marriage_status}</p>
                      </div>
                      <div className="mt-5 ml-5">
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Color</p>
                        <p>{Color}</p>
                      </div>
                      <div className="mt-5 ml-5">
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                          Type of food
                        </p>
                        <p>{Choose_veg_nonveg}</p>
                      </div>
                      <div className="mt-5 ml-5">
                        <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                          Expectation
                        </p>
                        <p>{Expection}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="second_item relative">
                  <button
                    className=""
                    type="button"
                    onClick={() => setModalDefaultOpen(true)}
                  >
                    <picture>
                      <img
                        className="img_profile_portfolio object-contain w-40 min-h-full"
                        object-fit="true"
                        src={
                          profileImg
                            ? `http://172.105.57.17:1337${profileImg?.[0]?.attributes?.url}`
                            : profile
                        }
                        alt=""
                      />
                    </picture>
                  </button>
                  <Modal
                    isOpen={modalDefaultOpen}
                    toggle={() => setModalDefaultOpen(false)}
                    fade={true}
                    fullscreen={true}
                    className="flex justify-center items-center top-0 left-0 w-full h-full bg-black bg-opacity-50 fixed z-50"
                  >
                    <div className=" modal-header">
                      <button
                        aria-label="Close"
                        className=" close flex text-white text-6xl leading-none font-semibold outline-none focus:outline-none absolute top-0 right-0 mt-4 mr-6"
                        onClick={() => setModalDefaultOpen(false)}
                        type="button"
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                    </div>

                    <div className="img_modal modal-body relative ">
                      <div className="absolute w-full h-full flex justify-between items-center">
                        <div
                          onClick={() => {
                            setModalImage(modalImage == 0 ? 3 : modalImage - 1);
                            console.log("prev");
                          }}
                          className="-ml-20 bg-white/50 hover:bg-white flex justify-center items-center w-10 h-10 rounded-full cursor-pointer"
                        >
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                          </svg>
                        </div>
                        <div
                          onClick={() => {
                            setModalImage(modalImage == 3 ? 0 : modalImage + 1);
                            console.log("next");
                          }}
                          className="-mr-20 bg-white/50 hover:bg-white flex justify-center items-center w-10 h-10 rounded-full cursor-pointer"
                        >
                          <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                          </svg>
                        </div>
                      </div>
                      <Image
                        alt=""
                        src={
                          profileImg
                            ? `http://172.105.57.17:1337${profileImg?.[modalImage]?.attributes?.url}`
                            : profile
                        }
                        placeholder="image"
                        width={500}
                        height={500}
                      />
                    </div>
                  </Modal>
                  <div className="flex justify-around lg:gap-2 max-md:gap-5">
                    <picture className=" ">
                      <img
                        className="img_profile_g"
                        object-fit
                        src={
                          profileImg
                            ? `http://172.105.57.17:1337${profileImg?.[1]?.attributes?.url}`
                            : profile
                        }
                        alt=""
                      />
                    </picture>
                    <picture className=" ">
                      <img
                        className="img_profile_g "
                        object-fit
                        src={
                          profileImg
                            ? `http://172.105.57.17:1337${profileImg?.[2]?.attributes?.url}`
                            : profile
                        }
                        alt=""
                      />
                    </picture>
                    <picture className=" ">
                      <img
                        className="img_profile_g"
                        object-fit
                        src={
                          profileImg
                            ? `http://172.105.57.17:1337${profileImg?.[3]?.attributes?.url}`
                            : profile
                        }
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <p className="font-bold ml-10 mt-[56%] lg:mt-20 ">
                Family Information
              </p>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
                <div className="p-5  ">
                  <div className="ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Father&apos;s Name
                    </p>
                    <p>{father_name}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Father&apos;s Profession
                    </p>
                    <p>{father_profession}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Brothers </p>
                    <p>{brothers}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Sisters </p>
                    <p>{sisters}</p>
                  </div>
                </div>
                <div className="p-5  ">
                  <div className="ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      {" "}
                      Mother&apos;s Name{" "}
                    </p>
                    <p>{mother_name}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Mother&apos;s Profession
                    </p>
                    <p>{mother_profession}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Elder Brother{" "}
                    </p>
                    <p>{elder_brothers}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Elder Sisters{" "}
                    </p>
                    <p>{elder_sisters}</p>
                  </div>
                </div>
                <div className="p-5  ">
                  <div className="ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Father&apos;s Native
                    </p>
                    <p>{father_native}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Phone Number
                    </p>
                    <p>{parents_contact_number}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Younger Brother{" "}
                    </p>
                    <p>{younger_brothers}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Younger Sisters{" "}
                    </p>
                    <p>{younger_sisters}</p>
                  </div>
                </div>
                <div className="p-5 ">
                  <div className="ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      {" "}
                      Mother&apos;s Native
                    </p>
                    <p>{mother_native}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}> Address </p>
                    <p>{address}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Married</p>
                    <p>{married_brothers}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}> Married</p>
                    <p>{married_sisters}</p>
                  </div>
                </div>
              </div>
              <p className="font-bold ml-10 mt-5">Horoscope Information</p>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
                <div className="p-5  ">
                  <div className="ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Zodiac Sign
                    </p>
                    <p>{zodiacs_sign}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Day </p>
                    <p>{day}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Birthplace</p>
                    <p>{birthplace}</p>
                  </div>
                </div>
                <div className="p-5  ">
                <div className="ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Star/Foot</p>
                    <p>{star_foot}</p>
                  </div>
                 
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Birth Time</p>
                    <p>{birth_time}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      {" "}
                      Presence Of Natal Direction{" "}
                    </p>
                    <p>{presence_of_natal_direction}</p>
                  </div>
                </div>
                <div className="p-5  ">
                  <div className="ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Tamil Month
                    </p>
                    <p>{tamil_month}</p>
                  </div>
                  <div className="ml-5 mt-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Tamil Year{" "}
                    </p>
                    <p>{tamil_year}</p>
                  </div>
                </div>
                <div className="p-5 ">
                  <div className="ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Udayati Nazhikai{" "}
                    </p>
                    <p>{udayati_nazhikai}</p>
                  </div>
                  <div className="mt-5 ml-5">
                    <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Ascendant(Laknam)
                    </p>
                    <p>{ascendant}</p>
                  </div>
                </div>
              </div>
              <p className="font-bold ml-10 mt-5">Horoscope Chart</p>
              <div className="grid grid-cols-2 gap-6 mt-[3rem] pb-4 scale-75">
                {img &&
                  img.map((data, i) => {
                    return (
                      <Image
                        key={i}
                        className="mb-8"
                        src={
                          img
                            ? `http://172.105.57.17:1337${img?.[i]?.attributes?.url}`
                            : horos
                        }
                        width={400}
                        alt="Horoscope Chart"
                        height={400}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style global jsx>{`
        .container {
          background: #e0e0e0;
        }
      `}</style>
    </>
  );
};
export default EditProfile;
