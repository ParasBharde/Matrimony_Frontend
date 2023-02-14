import React, { useState, useEffect } from "react";
import axios from "axios";
import profile from "@/assets/profile.png";
import Image from "next/image";
import horos from "@/assets/horos.png";
import horos1 from "@/assets/horos1.png";
import Link from "next/link";
import Heart from "@/assets/SVG/heart.svg";
import Download from "@/assets/SVG/downloadlogo.svg";
import Share from "@/assets/SVG/share.svg";
import Breadcrumb from "@/components/breadcrumb";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
} from "reactstrap";
import { useRouter } from "next/router";

const Profiledetail = () => {


const router = useRouter();
const  id  = router.query;

console.log("id", router.query);

  const [profilesdata, setprofilesdata] = useState([]);
  async function getUser() {

    try {
      const response = await axios.get(
      
        `http://172.105.57.17:1337/api/profiles/?populate=%2A`

      );
      console.log("response", response.data.data);
      setprofilesdata(response.data.data.filter(u => (u.id) == id.id ))
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  console.log("profilesdata", profilesdata);

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
                      <span className="text-white flex-1">Profile Detail</span>
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
                          <td className="font-bold">paras</td>
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
                                  <span>paras@scus.tech</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-center h-24 rounded ">
                                <div className="first_row">
                                  <span
                                    style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                  >
                                    Phone
                                  </span>
                                  <span>+91-7894561235</span>
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
                                    <Image
                                      className="img_profile_portfolio object-contain w-40 min-h-full"
                                      object-fit
                                      src={profile}
                                      alt={"logo"}
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
                                        onClick={() =>
                                          setModalDefaultOpen(false)
                                        }
                                        type="button"
                                      >
                                        <span aria-hidden={true}>×</span>
                                      </button>
                                    </div>

                                    <div className="img_modal modal-body ">
                                      <Image
                                        alt=""
                                        src={profile}
                                        placeholder="image"
                                        width={500}
                                        height={500}
                                      />
                                    </div>
                                  </Modal>
                                  <div className="gap-2  flex">
                                    <Image
                                      className="img_profile_g w-40 h-26"
                                      src={profile}
                                      alt={"logo"}
                                    />
                                    <Image
                                      className="img_profile_g w-40 h-26"
                                      src={profile}
                                      alt={"logo"}
                                    />
                                    <Image
                                      className="img_profile_g w-40 h-26"
                                      src={profile}
                                      alt={"logo"}
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
                                  <span>Hastham</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-center h-24 rounded ">
                                <div className="second_row">
                                  <span
                                    style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                  >
                                    Marriage Status
                                  </span>
                                  <span>Unmarried</span>
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
                                  <span>5.6 Inch</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-center h-24 rounded ">
                                <div className="third_row">
                                  <span
                                    style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                  >
                                    Qualification
                                  </span>
                                  <span>BCCA, MCA</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-center h-24 rounded ">
                                <div className="third_row">
                                  <span
                                    style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                  >
                                    Color
                                  </span>
                                  <span>White</span>
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
                                  <span>paras@scus.tech</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-center h-24 rounded ">
                                <div className="fourth_row">
                                  <span
                                    style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                  >
                                    Family Property
                                  </span>
                                  <span>+91-7894561235</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-center h-24 rounded ">
                                <div className="fourth_row">
                                  <span
                                    style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                  >
                                    Type of food
                                  </span>
                                  <span>40,000 -/ per month</span>
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
                                    Caste
                                  </span>
                                  <span>paras@scus.tech</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-center h-24 rounded ">
                                <div className="fifth_row">
                                  <span
                                    style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                  >
                                    Family Property
                                  </span>
                                  <span>+91-7894561235</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-center h-24 rounded ">
                                <div className="fifth_row">
                                  <span
                                    style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                  >
                                    Type of food
                                  </span>
                                  <span>40,000 -/ per month</span>
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
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Email
                                    </span>
                                    <span>paras@scus.tech</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="first_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Phone
                                    </span>
                                    <span>+91-7894561235</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 ">
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
                                  <div className="first_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Phone
                                    </span>
                                    <span>+91-7894561235</span>
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
                                    <span>Hastham</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="second_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Marriage Status
                                    </span>
                                    <span>Unmarried</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="second_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Marriage Status
                                    </span>
                                    <span>Unmarried</span>
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
                                    <span>5.6 Inch</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="third_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Qualification
                                    </span>
                                    <span>BCCA, MCA</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="third_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Color
                                    </span>
                                    <span>White</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="third_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Color
                                    </span>
                                    <span>White</span>
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
                                    <span>paras@scus.tech</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="fourth_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Family Property
                                    </span>
                                    <span>+91-7894561235</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="fourth_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Type of food
                                    </span>
                                    <span>40,000 -/ per month</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="fourth_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Color
                                    </span>
                                    <span>White</span>
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
                        <span className="sec_text">Family Information</span>
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
                                    <span>paras@scus.tech</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="first_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Phone
                                    </span>
                                    <span>+91-7894561235</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 ">
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
                                  <div className="first_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Phone
                                    </span>
                                    <span>+91-7894561235</span>
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
                                    <span>Hastham</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="second_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Marriage Status
                                    </span>
                                    <span>Unmarried</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="second_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Marriage Status
                                    </span>
                                    <span>Unmarried</span>
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
                                    <span>5.6 Inch</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="third_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Qualification
                                    </span>
                                    <span>BCCA, MCA</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="third_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Color
                                    </span>
                                    <span>White</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="third_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Color
                                    </span>
                                    <span>White</span>
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
                                    <span>paras@scus.tech</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="fourth_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Family Property
                                    </span>
                                    <span>+91-7894561235</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="fourth_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Type of food
                                    </span>
                                    <span>40,000 -/ per month</span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="fourth_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Color
                                    </span>
                                    <span>White</span>
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
                          <Image src={horos} width={500} alt="" height={500} />
                          <Image src={horos1} width={500} alt="" height={500} />
                        </div>
                      </div>
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
      </>
    )
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
