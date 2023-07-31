import React, { useEffect, useState } from "react";
import profile from "@/assets/profile.png";
import Image from "next/image";
import horos from "@/assets/horos.png";
import horos1 from "@/assets/horos1.png";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRouter } from "next/router";
import { useStorage } from "@/hooks/useStorage";
import axios from "axios";

const Customerpofile = () => {
  const [userProfile, setUserProfile] = useState();
  const [profileImg, setProfileImg] = useState();
  const [img, setImg] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  // const [isDeleteProfile, setIsDeleteProfile] = useState(false);

  const router = useRouter();
  // const storageData = useStorage();

  useEffect(() => {
    console.log("getting user", router.query.id);
    if (router.query.id) {
      axios
        .get(
          `http://172.105.57.17:1337/api/profiles/${router.query.id}?populate=%2A`
        )
        .then((response) => {
          // console.log("response", response.data.data);
          setUserProfile(response?.data?.data);
        })
        .catch((error) => {
          console.error("error", error);
        });
    }
  }, [router?.query?.id]);

  useEffect(() => {
    if (userProfile) {
      setProfileImg(userProfile?.attributes?.profile_photo?.data);
      setImg(userProfile?.attributes?.horoscope_document?.data);
    }
  }, [userProfile]);

  function downloadPdf() {
    const input = document.getElementById("pdf-content");
    html2canvas(input, {
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      // pdf.addImage(imgData, 'PNG', 10, 10);
      // pdf.save('download.pdf');

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  }

  // delete user
  const confirmDelete = (id) => {
    // console.log("confirm delete", id);
    setModalOpen(false);
    axios
      .delete(`http://172.105.57.17:1337/api/profiles/${id}`)
      .then((response) => {
        console.log("delete profile response", response.data.data);
      })
      .catch((error) => {
        console.error("delete profile error", error);
      });
    router.push(router.query.prevUrl);
  };

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
  } = userProfile.attributes;
  return (
    <>
      {modalOpen && (
        <div className="w-screen h-screen fixed flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-slate-100 border border-black rounded-md px-4">
            <div className="py-2 flex justify-between items-center">
              <h3 className="font-semibold text-red-500">Delete Profile</h3>
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
                  Are you really want to delete this profile
                </p>
              </div>
              <div className="mb-5 flex justify-end">
                <button
                  onClick={() => confirmDelete(userProfile?.id)}
                  className="px-5 py-1 rounded bg-red-500 mr-3"
                >
                  Yes
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-1 rounded bg-green-500 mr-3"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    <div className="flex justify-end space-x-2 mt-2 max-md:hidden mr-10 max-md:justify-center max-sm:justify-center">
            
            <button
              className="px-5 rounded  bg-orange-400 py-1.5"
              onClick={downloadPdf}
            >
              <Link className="flex text-white" href="#">
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
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 rounded bg-orange-600 py-1.5"
            >
              <span className="flex text-white">
                <svg
                  className="mr-2 mt-1"
                  width="17"
                  height="16"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 16C1.5 17.1 2.4 18 3.5 18H11.5C12.6 18 13.5 17.1 13.5 16V4H1.5V16ZM14.5 1H11L10 0H5L4 1H0.5V3H14.5V1Z"
                    fill="white"
                  />
                </svg>
                Delete
              </span>
            </button>
          </div>
      <div className="parent w-screen">
        <table className="child table-auto" id="pdf-content">
          <div className="table_header flex">
            <thead className="">
              <td className="font-bold">
                {first_name} {last_name}
              </td>
              <div>
                <td style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                  {userProfile.id}
                  {/* Reg- No : VRE223 */}
                </td>
              </div>
            </thead>
        
          </div>

          <div className="first_content p-4 sm:ml-64 ">
            <div className="p-4">
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
                <div className="flex items-center justify-center h-24 max-md:hidden">
                  <div className="second_item_admin relative  max-md:w-full">
                    <Image
                      className="img_profile object-contain w-40 h-60"
                      object-fit
                      sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                      src={
                        profileImg
                          ? `http://172.105.57.17:1337${profileImg?.[0]?.attributes?.url}`
                          : profile
                      }
                      width={80}
                      height={80}
                      alt="logo"
                    />
                    <div className="flex max-w-max">
                      <div className="grow max-w-full">
                        <Image
                          className="img_profile_g"
                          src={
                            profileImg
                              ? `http://172.105.57.17:1337${profileImg?.[1]?.attributes?.url}`
                              : profile
                          }
                          width={80}
                          height={80}
                          alt="logo"
                        />
                      </div>
                      <div className="grow max-w-full">
                        <Image
                          className="img_profile_g"
                          src={
                            profileImg
                              ? `http://172.105.57.17:1337${profileImg?.[2]?.attributes?.url}`
                              : profile
                          }
                          width={80}
                          height={80}
                          alt="logo"
                        />
                      </div>
                      <div className="grow max-w-full">
                        <Image
                          className="img_profile_g"
                          src={
                            profileImg
                              ? `http://172.105.57.17:1337${profileImg?.[3]?.attributes?.url}`
                              : profile
                          }
                          width={80}
                          height={80}
                          alt="logo"
                        />
                      </div>
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
                    <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>Age</span>
                    <span>{date_of_birth}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center h-24 rounded ">
                  <div className="second_row">
                    <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>Star</span>
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

          <div>
            <span className="line_one"></span>
          </div>

          {/*Family Information */}
          <div className="second_content ">
            <span className="sec_text">Family Information</span>

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

          <div>
            <span className="line_two"></span>
          </div>

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
              <div className="first_content p-4 sm:ml-64 "></div>
            </div>
          </div>

          <div>
            <span className="line_three"></span>
          </div>

          {/* Horoscope Chart */}
          <div className="fourth_content">
            <span className="sec_text ">Horoscope Chart</span>
            <div className="tb_dt flex flex-wrap ">
              {/* <Image src={horos} alt="img" />
              <Image src={horos1} alt="img" /> */}
              <Image
                src={
                  img
                    ? `http://172.105.57.17:1337${img?.[0]?.attributes?.url}`
                    : horos
                }
                width={250}
                alt="img"
                height={250}
              />
              <Image
                src={
                  img
                    ? `http://172.105.57.17:1337${img?.[1]?.attributes?.url}`
                    : horos1
                }
                width={250}
                alt="img"
                height={250}
              />
            </div>
          </div>
        </table>
      </div>
    </>
  );
};
export default Customerpofile;
