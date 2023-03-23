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
  const [img, setImg] = useState();

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
      if (locale == "ta") {
        api =
          "http://172.105.57.17:1337/api/profiles/?populate=%2A&locale=ta-IN";
      } else if (locale == "en") {
        api = "http://172.105.57.17:1337/api/profiles/?populate=%2A";
      }
      async function getUser() {
        try {
          const response = await axios.get(api);
          console.log("response", response.data.data);
          let userProfile = response.data.data.filter(
            // (u) => u.id == 23
            (u) => u.id == storageData?.user_profile?.id
          );
          setUserProfile(userProfile[0].attributes);
          console.log("userProfile ", userProfile);
        } catch (error) {
          console.error(error);
        }
      }
      getUser();
    }
  }, [storageData, locale]);

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
  let images = [
    "http://172.105.57.17:1337${profileImg?.[0]?.attributes?.url}",
    "http://172.105.57.17:1337${profileImg?.[1]?.attributes?.url}",
    "http://172.105.57.17:1337${profileImg?.[2]?.attributes?.url}",
    "http://172.105.57.17:1337${profileImg?.[3]?.attributes?.url}",
  ];
  // console.log("url",userProfile.horoscope_document?.data?.[0]?.attributes?.url);

  // const imageLoader = ({src}) => {
  //   return src;
  // }
  return (
    <>
      <div className="container ">
        <Breadcrumb screens={["Home", "Search", "My Profile Details"]} />
        <div className="main_container flex justify-center">
          <div className="lg:px-10 md:px-5 sm:px-5">
            <div className="flex items-center w-full bg-main h-16 px-5 ">
              <span className="text-white flex-1">Profile Detail</span>
              <div className="flex items-center ">
                <button
                  className="bg-white text-main md:px-[2rem] rounded md:py-[5px]"
                  onClick={() => router.push("/editProfile")}
                >
                  Edit
                </button>
              </div>
            </div>

            <div className="profile_data table-fixed bg-white">
              <div className="table_header flex ">
                <div className="block">
                  <div className="font-bold">
                    {first_name} {last_name}
                  </div>
                  <div>
                    <div style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                      Reg- No : VRE223
                    </div>
                  </div>
                </div>
              </div>
              {/* personal information */}
              <div>
                <div className="first_content p-4 sm:ml-64 ">
                  <div className="p-4 ">
                    <div className="grid grid-cols-4 gap-10 ">
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="first_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Email
                          </span>
                          <span>{email}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="first_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Phone
                          </span>
                          <span>{phone_number}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="first_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Date of Birth
                          </span>
                          <span>{date_of_birth}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center h-24 ">
                        <div className="second_item relative">
                          <button 
                            className=""
                            type="button"
                            onClick={() => setModalDefaultOpen(true)}
                          >
                            <Image
                              className="img_profile_portfolio object-contain w-40 min-h-full"
                              object-fit="true"
                              src={
                                profileImg
                                  ? `http://172.105.57.17:1337${profileImg?.[0]?.attributes?.url}`
                                  : profile
                              }
                              alt={"logo"}
                              width={500}
                              height={500}
                            />
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
                                    setModalImage(
                                      modalImage == 0 ? 3 : modalImage - 1
                                    );
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
                                    setModalImage(
                                      modalImage == 3 ? 0 : modalImage + 1
                                    );
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
                          <div className="flex justify-around md:ml-10">
                            <Image
                              className="img_profile_g "
                              src={
                                profileImg
                                  ? `http://172.105.57.17:1337${profileImg?.[1]?.attributes?.url}`
                                  : profile
                              }
                              alt={"logo"}
                              width={80}
                              height={80}
                            />
                            <Image
                              className="img_profile_g w-40 h-26"
                              src={
                                profileImg
                                  ? `http://172.105.57.17:1337${profileImg?.[2]?.attributes?.url}`
                                  : profile
                              }
                              alt={"logo"}
                              width={80}
                              height={80}
                            />
                            <Image
                              className="img_profile_g w-40 h-26"
                              src={
                                profileImg
                                  ? `http://172.105.57.17:1337${profileImg?.[3]?.attributes?.url}`
                                  : profile
                              }
                              alt={"logo"}
                              width={80}
                              height={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="first_content p-4 sm:ml-64 ">
                  <div className="p-4 ">
                    <div className="grid grid-cols-4 gap-10 ">
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="second_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Age
                          </span>
                          <span>{calculateAge(date_of_birth)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="second_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Star
                          </span>
                          <span>{star}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="second_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Marriage Status
                          </span>
                          <span>{marriage_status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="first_content p-4 sm:ml-64 ">
                  <div className="p-4 ">
                    <div className="grid grid-cols-4 gap-10 ">
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="third_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Height
                          </span>
                          <span>{Height}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="third_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Qualification
                          </span>
                          <span>{educational_qualification}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="third_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Color
                          </span>
                          <span>{Color}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="first_content p-4 sm:ml-64 ">
                  <div className="p-4 ">
                    <div className="grid grid-cols-4 gap-10 ">
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="fourth_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Caste
                          </span>
                          <span>{caste}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="fourth_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Family Property
                          </span>
                          <span>{family_property_details}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="fourth_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Type of food
                          </span>
                          <span>{Choose_veg_nonveg}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="first_content p-4 sm:ml-64 ">
                  <div className="p-4 ">
                    <div className="grid grid-cols-4 gap-10 ">
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="fifth_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Career
                          </span>
                          <span>{career_detail}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="fifth_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Salary
                          </span>
                          <span>{Salary_monthly_income}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center h-24 rounded ">
                        <div className="fifth_row">
                          <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                            Expectation
                          </span>
                          <span>{Expection}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <span className="line_one_1"></span>

              {/*Family Information */}
              <div className="second_content">
                <span className="sec_text">Family Information</span>
                <div>
                  <div className="first_content p-4 sm:ml-64 ">
                    <div className="p-4 ">
                      <div className="grid grid-cols-4 gap-10 ">
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="first_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Father&apos;s Name
                            </span>
                            <span>{father_name}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="first_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Mother&apos;s Name
                            </span>
                            <span>{mother_name}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 ">
                          <div className="first_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Father&apos;s Native
                            </span>
                            <span>{father_native}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 ">
                          <div className="first_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Mother&apos;s Native
                            </span>
                            <span>{mother_native}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="first_content p-4 sm:ml-64 ">
                    <div className="p-4 ">
                      <div className="grid grid-cols-4 gap-10 ">
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="second_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Father&apos;s Profession
                            </span>
                            <span>{father_profession}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="second_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Mother&apos;s Profession
                            </span>
                            <span>{mother_profession}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="second_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Phone Number
                            </span>
                            <span>{parents_contact_number}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="second_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Address
                            </span>
                            <span>{address}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="first_content p-4 sm:ml-64 ">
                    <div className="p-4 ">
                      <div className="grid grid-cols-4 gap-10 ">
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="third_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Brothers
                            </span>
                            <span>{brothers}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="third_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Elder Brother
                            </span>
                            <span>{elder_brothers}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="third_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Younger Brother
                            </span>
                            <span>{younger_brothers}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="third_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Married
                            </span>
                            <span>{married_brothers}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="first_content p-4 sm:ml-64 ">
                    <div className="p-4 ">
                      <div className="grid grid-cols-4 gap-10 ">
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="fourth_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Sisters
                            </span>
                            <span>{sisters}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="fourth_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Elder Sisters
                            </span>
                            <span>{elder_sisters}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="fourth_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Younger Sisters
                            </span>
                            <span>{younger_sisters}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="fourth_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Married
                            </span>
                            <span>{married_sisters}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <span className="line_two_2"></span>

              {/* Horoscope Information */}
              <div className="third_content">
                <span className="sec_text">Horoscope Information</span>
                <div>
                  <div className="first_content p-4 sm:ml-64 ">
                    <div className="p-4 ">
                      <div className="grid grid-cols-4 gap-10 ">
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="first_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Zodiac Sign
                            </span>
                            <span>{zodiacs_sign}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="first_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Tamil Year
                            </span>
                            <span>{tamil_year}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 ">
                          <div className="first_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Tamil Month
                            </span>
                            <span>{tamil_month}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 ">
                          <div className="first_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Udayati Nazhikai
                            </span>
                            <span>{udayati_nazhikai}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="first_content p-4 sm:ml-64 ">
                    <div className="p-4 ">
                      <div className="grid grid-cols-4 gap-10 ">
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="second_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Day
                            </span>
                            <span>{day}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="second_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Birth Time
                            </span>
                            <span>{birth_time}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="second_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Star/Foot
                            </span>
                            <span>{star_foot}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="second_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Ascendant(Laknam)
                            </span>
                            <span>{ascendant}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="first_content p-4 sm:ml-64 ">
                    <div className="p-4 ">
                      <div className="grid grid-cols-4 gap-10 ">
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="third_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Birthplace
                            </span>
                            <span>{birthplace}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="third_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Presence Of Natal Direction
                            </span>
                            <span>{presence_of_natal_direction}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="first_content p-4 sm:ml-64 ">
                    {/* <div className="p-4 ">
                      <div className="grid grid-cols-4 gap-10 ">
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="fourth_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Caste
                            </span>
                            <span>paras@scus.tech</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="fourth_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Family Property
                            </span>
                            <span>+91-7894561235</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="fourth_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Type of food
                            </span>
                            <span>40,000 -/ per month</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="fourth_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Color
                            </span>
                            <span>White</span>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              <span className="line_three_3 md:mt-[6rem]"></span>

              {/* Horoscope Chart */}
              <div className="md:mt-[-26rem] ml-[3rem]">
                <span className="font-bold">Horoscope Chart</span>
                <div className="flex flex-wrap justify-around mt-[4rem] ">
                  <Image
                    className="mb-8"
                    src={
                      img
                        ? `http://172.105.57.17:1337${img?.[0]?.attributes?.url}`
                        : horos
                    }
                    width={500}
                    alt=""
                    height={500}
                  />
                  <Image
                    className="mb-8"
                    src={
                      img
                        ? `http://172.105.57.17:1337${img?.[1]?.attributes?.url}`
                        : horos1
                    }
                    width={500}
                    alt=""
                    height={500}
                  />
                </div>
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
