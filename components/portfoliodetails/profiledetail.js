import React from "react";
import profile from "@/assets/profile.png";
import Image from "next/image";
import horos from "@/assets/horos.png";
import horos1 from "@/assets/horos1.png";
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
const Profiledetail = () => {
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  return (
    <>
      <div className="container">
        <div className="header_detail">
          <span className="px-2">Home {">"}</span>
          <a href="/portfolio/portfolio/">
          <span className="px-2 cursor-pointer hover:text-main">Search {">"}</span></a>
          <span className="px-2 text-main">Profile Detail</span>
        </div>
        <div className="main_container flex justify-center">
          <table>
            <tr>
              <td className="flex items-center w-full bg-main h-16">
                <span className="text-white flex-1">Profile Detail</span>
                <div className="flex items-center">
                  <svg
                    className="mr-4"
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.8401 2.61085C20.3294 2.09985 19.7229 1.6945 19.0555 1.41793C18.388 1.14137 17.6726 0.999023 16.9501 0.999023C16.2276 0.999023 15.5122 1.14137 14.8448 1.41793C14.1773 1.6945 13.5709 2.09985 13.0601 2.61085L12.0001 3.67085L10.9401 2.61085C9.90843 1.57916 8.50915 0.999558 7.05012 0.999558C5.59109 0.999558 4.19181 1.57916 3.16012 2.61085C2.12843 3.64254 1.54883 5.04182 1.54883 6.50085C1.54883 7.95988 2.12843 9.35916 3.16012 10.3908L4.22012 11.4508L12.0001 19.2308L19.7801 11.4508L20.8401 10.3908C21.3511 9.88009 21.7565 9.27366 22.033 8.6062C22.3096 7.93875 22.4519 7.22334 22.4519 6.50085C22.4519 5.77836 22.3096 5.06295 22.033 4.39549C21.7565 3.72803 21.3511 3.12161 20.8401 2.61085V2.61085Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    className="mr-4"
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
                  <svg
                    className="mr-2"
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08ZM15 2C15.55 2 16 2.45 16 3C16 3.55 15.55 4 15 4C14.45 4 14 3.55 14 3C14 2.45 14.45 2 15 2ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11ZM15 18.02C14.45 18.02 14 17.57 14 17.02C14 16.47 14.45 16.02 15 16.02C15.55 16.02 16 16.47 16 17.02C16 17.57 15.55 18.02 15 18.02Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </td>
            </tr>

            <tbody>
              <div className="profile_data table-fixed bg-white">
                <div className="table_header flex ">
                  <thead className="block">
                    <td className="font-bold">Paras Bharde</td>
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
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Email
                            </span>
                            <span>paras@scus.tech</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="first_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Phone
                            </span>
                            <span>+91-7894561235</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="first_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
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
                                  onClick={() => setModalDefaultOpen(false)}
                                  type="button"
                                >
                                  <span aria-hidden={true}>×</span>
                                </button>
                              </div>
                              
                              <div  className="img_modal modal-body "
                              >
                                <Image
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
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Age
                            </span>
                            <span>28 Years</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="second_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Star
                            </span>
                            <span>Hastham</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="second_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
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
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Height
                            </span>
                            <span>5.6' Inch</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="third_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Qualification
                            </span>
                            <span>BCCA, MCA</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="third_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
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
                      </div>
                    </div>
                  </div>
                  <div className="first_content p-4 sm:ml-64 ">
                    <div className="p-4 ">
                      <div className="grid grid-cols-4 gap-10 ">
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="fifth_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Caste
                            </span>
                            <span>paras@scus.tech</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="fifth_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                              Family Property
                            </span>
                            <span>+91-7894561235</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded ">
                          <div className="fifth_row">
                            <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
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
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Email
                              </span>
                              <span>paras@scus.tech</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="first_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Phone
                              </span>
                              <span>+91-7894561235</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 ">
                            <div className="first_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Date of Birth
                              </span>
                              <span>04 Feb 2023</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 ">
                            <div className="first_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
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
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Age
                              </span>
                              <span>28 Years</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="second_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Star
                              </span>
                              <span>Hastham</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="second_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Marriage Status
                              </span>
                              <span>Unmarried</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="second_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
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
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Height
                              </span>
                              <span>5.6' Inch</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="third_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Qualification
                              </span>
                              <span>BCCA, MCA</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="third_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Color
                              </span>
                              <span>White</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="third_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
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
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Email
                              </span>
                              <span>paras@scus.tech</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="first_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Phone
                              </span>
                              <span>+91-7894561235</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 ">
                            <div className="first_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Date of Birth
                              </span>
                              <span>04 Feb 2023</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 ">
                            <div className="first_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
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
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Age
                              </span>
                              <span>28 Years</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="second_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Star
                              </span>
                              <span>Hastham</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="second_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Marriage Status
                              </span>
                              <span>Unmarried</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="second_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
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
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Height
                              </span>
                              <span>5.6' Inch</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="third_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Qualification
                              </span>
                              <span>BCCA, MCA</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="third_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Color
                              </span>
                              <span>White</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center h-24 rounded ">
                            <div className="third_row">
                              <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>
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
                      </div>
                    </div>
                  </div>
                </div>

                <span className="line_three_3"></span>

                {/* Horoscope Chart */}
                <div className="fourth_content">
                  <span className="sec_text ">Horoscope Chart</span>
                  <div className="tb_dt flex ">
                    <Image src={horos} width={500} height={500} />
                    <Image src={horos1} width={500} height={500} />
                  </div>
                </div>
              </div>
            </tbody>
          </table>
        </div>
      </div>

      <style global jsx>{`
        body {
          background: #e0e0e0;
        }
      `}</style>
    </>
  );
};

export default Profiledetail;
