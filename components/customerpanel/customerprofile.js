import React from "react";
import profile from "@/assets/profile.png";
import Image from "next/image";
import horos from "@/assets/horos.png";
import horos1 from "@/assets/horos1.png";
import Link from "next/link";

const Customerpofile = () => {
  return (
    <>
      <div className="parent">
        <table className="child table-fixed">
          <div className="table_header flex ">
            <thead>
              <td className="font-bold">Paras Bharde</td>
              <div>
                <td style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                  Reg- No : VRE223
                </td>
              </div>
            </thead>
            <div className="flex space-x-2 mt-2">
              <button className="px-5 rounded  bg-orange-400 py-1.5">
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
              <button className="px-5 rounded bg-orange-600 py-1.5">
                <Link className="flex text-white" href="#">
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
                </Link>
              </button>
            </div>
          </div>

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
                    <Image
                      className="img_profile object-contain w-40 h-60"
                      object-fit
                      sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                      src={profile}
                      width={100}
                      height={100}
                      alt="logo"
                    />
                    <div className="gap-2  flex">
                      <Image
                        className="img_profile_g w-40 h-26"
                        src={profile}
                        alt="logo"
                      />
                      <Image
                        className="img_profile_g w-40 h-26"
                        src={profile}
                        alt="logo"
                      />
                      <Image
                        className="img_profile_g w-40 h-26"
                        src={profile}
                        alt="logo"
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
                    <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>Age</span>
                    <span>28 Years</span>
                  </div>
                </div>
                <div className="flex items-center justify-center h-24 rounded ">
                  <div className="second_row">
                    <span style={{ color: "rgba(30, 30, 30, 0.5)" }}>Star</span>
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
                    <span>5.6 Inch</span>
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

          <div>
            <span className="line_one"></span>
          </div>

          {/*Family Information */}
          <div className="second_content">
            <span className="sec_text">Family Information</span>

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
                      <span>5.6 Inch</span>
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
                        <span>5.6 Inch</span>
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
                  </div>
                </div>
              </div>
              <div className="first_content p-4 sm:ml-64 ">
              </div>
            </div>
          </div>

          <div>
            <span className="line_three"></span>
          </div>

          {/* Horoscope Chart */}
          <div className="fourth_content">
            <span className="sec_text ">Horoscope Chart</span>
            <div className="tb_dt flex ">
              <Image src={horos} width={500} alt='img' height={500} />
              <Image src={horos1} width={500} alt='img' height={500} />
            </div>
          </div>
        </table>
      </div>
    </>
  );
};
export default Customerpofile;
