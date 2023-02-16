import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Heart from "@/assets/SVG/heart.svg";
import Download from "@/assets/SVG/downloadlogo.svg";
import Share from "@/assets/SVG/share.svg";
import Breadcrumb from "@/components/breadcrumb";

import {
  Modal,
} from "reactstrap";
import { useRouter } from "next/router";

const Profiledetail = () => {
  const router = useRouter();
  const id = router.query;

  const [profilesdata, setprofilesdata] = useState([]);
  async function getUser() {
    try {
      const response = await axios.get(
      
        `http://172.105.57.17:1337/api/profiles/?populate=%2A`

      );
      console.log("response", response.data.data);
      setprofilesdata(response.data.data.filter((u) => u.id == id.id));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  return (
    <>
      {profilesdata.length > 0 &&
        profilesdata.map((data) => {
          console.log("data", data);
          return (
            <>
              <div className="container">
                <Breadcrumb screens={["Home", "Search", "Profile Details"]} />

                <div className="main_container flex justify-center overflow-auto">
                  <table>
                    <tr>
                      <td className="flex items-center w-full bg-main h-16 px-5">
                        <span className="text-white flex-1">
                          Profile Detail
                        </span>
                        <div className="flex items-center ">
                          <Image
                            src={Heart}
                            width={24}
                            height={21}
                            alt=""
                            className="mx-2"
                          />
                          <Image
                            src={Download}
                            width={24}
                            height={21}
                            alt=""
                            className="mx-2"
                          />

                          <Image
                            src={Share}
                            width={24}
                            height={21}
                            alt=""
                            className="mx-2"
                          />
                        </div>
                      </td>
                    </tr>

                    <tbody>
                      <div className="profile_data table-fixed bg-white">
                        <div className="table_header flex ">
                          <thead className="block">
                            <td className="font-bold">{data.attributes.first_name}{" "}{data.attributes.last_name}</td>
                            <div>
                              <td style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Reg- No : VRE223
                              </td>
                            </div>
                          </thead>
                        </div>
                        <div>
                          <div className="first_content p-4 sm:ml-64 ">
                            <div className="p-4 ">
                              <div className="grid grid-cols-4 gap-10 ">
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="first_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Email
                                    </span>
                                    <span>{data.attributes.email}</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="first_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Phone
                                    </span>
                                    <span>
                                      {data.attributes.contact_number}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="first_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Date of Birth
                                    </span>
                                    <span>04 Feb 2023</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 ">
                                  <div className="second_item relative">
                                    <button
                                      className=""
                                      type="button"
                                      onClick={() => setModalDefaultOpen(true)}
                                    >                                  
                                      <picture>
                                        <img
                                          className="img_profile_portfolio object-contain w-40 min-h-full"
                                          object-fit
                                          src={`http://172.105.57.17:1337${data.attributes.profile_photo.data[0].attributes.url}`}
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
                                          onClick={() =>
                                            setModalDefaultOpen(false)
                                          }
                                          type="button"
                                        >
                                          <span aria-hidden={true}>×</span>
                                        </button>
                                      </div>

                                      <div className="img_modal modal-body ">
                                      <picture>
                                      <img
                                          alt=""
                                          src={`http://172.105.57.17:1337${data.attributes.profile_photo.data[0].attributes.url}`}
                                          
                                          placeholder="image"
                                          width={500}
                                          height={500}
                                        />
                                      </picture>
                                        
                                      </div>
                                    </Modal>
                                    <div className="flex justify-around"> 
                                       <picture>
                                        <img
                                          className="img_profile_g"
                                          object-fit
                                          src={`http://172.105.57.17:1337${data.attributes.profile_photo.data[1].attributes.url}`}
                                          alt=""
                                        />
                                      </picture>
                                      <picture>
                                        <img
                                          className="img_profile_g w-40 h-26"
                                          object-fit
                                          src={`http://172.105.57.17:1337${data.attributes.profile_photo.data[2].attributes.url}`}
                                          alt=""
                                        />
                                      </picture>
                                      <picture>
                                        <img
                                          className="img_profile_g w-40 h-26"
                                          object-fit
                                          src={`http://172.105.57.17:1337${data.attributes.profile_photo.data[3].attributes.url}`}
                                          alt=""
                                        />
                                      </picture>
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
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Age
                                    </span>
                                    <span>28 Years</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="second_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Star
                                    </span>
                                    <span>{data.attributes.star}</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="second_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Marriage Status
                                    </span>
                                    <span>{data.attributes.marriage_status}</span>
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
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Height
                                    </span>
                                    <span>{data.attributes.Height}</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="third_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Qualification
                                    </span>
                                    <span>{data.attributes.educational_qualification}</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="third_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Color
                                    </span>
                                    <span>{data.attributes.Color}</span>
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
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Caste
                                    </span>
                                    <span>{data.attributes.caste}</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="fourth_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Family Property
                                    </span>
                                    <span>{data.attributes.family_property_details}</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="fourth_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Type of food
                                    </span>
                                    <span>{data.attributes.Choose_veg_nonveg}</span>
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
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Career
                                    </span>
                                    <span>{data.attributes.career_detail}</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="fifth_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Salary
                                    </span>
                                    <span>{data.attributes.Salary_monthly_income}</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="fifth_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Expectation
                                    </span>
                                    <span>{data.attributes.Expection}</span>
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
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Father&apos;s Name
                                      </span>
                                      <span>{data.attributes.father_name}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="first_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Mother&apos;s Name
                                      </span>
                                      <span>{data.attributes.mother_name}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 ">
                                    <div className="first_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Father&apos;s Native
                                      </span>
                                      <span>{data.attributes.father_native}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 ">
                                    <div className="first_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                       Mother&apos;s Native
                                      </span>
                                      <span>{data.attributes.mother_native}</span>
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
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Father&apos;s Profession
                                      </span>
                                      <span>{data.attributes.father_profession}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="second_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Mother&apos;s Profession
                                      </span>
                                      <span>{data.attributes.mother_profession}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="second_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Phone Number
                                      </span>
                                      <span>{data.attributes.parents_contact_number}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="second_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Address
                                      </span>
                                      <span>{data.attributes.address}</span>
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
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Brothers
                                      </span>
                                      <span>{data.attributes.brothers}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="third_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Elder Brother
                                      </span>
                                      <span>{data.attributes.elder_brothers}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="third_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Younger Brother
                                      </span>
                                      <span>{data.attributes.younger_brothers}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="third_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Married
                                      </span>
                                      <span>{data.attributes.married_brothers}</span>
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
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                       Sisters
                                      </span>
                                      <span>{data.attributes.sisters}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="fourth_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Elder Sister
                                      </span>
                                      <span>{data.attributes.elder_sisters}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="fourth_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Younger Sister
                                      </span>
                                      <span>{data.attributes.younger_sisters}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="fourth_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Married
                                      </span>
                                      <span>{data.attributes.married_sisters}</span>
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
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Zodiac Sign
                                      </span>
                                      <span>{data.attributes.zodiacs_sign}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="first_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Tamil year
                                      </span>
                                      <span>{data.attributes.tamil_year}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 ">
                                    <div className="first_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Tamil month
                                      </span>
                                      <span>{data.attributes.tamil_month}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 ">
                                    <div className="first_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Udayati Nazhikai
                                      </span>
                                      <span>{data.attributes.udayati_nazhikai}</span>
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
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Day
                                      </span>
                                      <span>{data.attributes.day}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="second_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Birth Time
                                      </span>
                                      <span>{data.attributes.birth_time}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="second_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Star/Foot
                                      </span>
                                      <span>{data.attributes.star_foot}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="second_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                       Ascendant (Laknam)
                                      </span>
                                      <span>{data.attributes.ascendant}</span>
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
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Birthplace
                                      </span>
                                      <span>{data.attributes.birthplace}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center h-24 rounded ">
                                    <div className="third_row">
                                      <span
                                        style={{
                                          color: "rgba(30, 30, 30, 0.5)",
                                        }}
                                      >
                                        Presence of natal direction
                                      </span>
                                      <span>{data.attributes.presence_of_natal_direction}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <span className="line_three_3"></span>

                        {/* Horoscope Chart */}
                        <div className="fourth_content">
                          <span className="sec_text ">Horoscope Chart</span>
                          <div className="tb_dt flex ">
                          <picture>
                                        <img
                                          className=""
                                          object-fit
                                          src={`http://172.105.57.17:1337${data.attributes.horoscope_document.data[0].attributes.url}`}
                                          alt=""
                                        />
                                      </picture>
                                      <picture>
                                        <img
                                          className=""
                                          object-fit
                                          src={`http://172.105.57.17:1337${data.attributes.horoscope_document.data[1].attributes.url}`}
                                          alt=""
                                        />
                                      </picture>
                          </div>
                        </div>
                      </div>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          );
        })}

      <style global jsx>{`
        .container {
          background: #e0e0e0;
        }
      `}</style>
    </>
  );
};

export default Profiledetail;
