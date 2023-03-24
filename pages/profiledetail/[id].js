import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Heart from "@/assets/SVG/heart.svg";
import RedHeart from "@/assets/redheart.png";
import Download from "@/assets/SVG/downloadlogo.svg";
import Share from "@/assets/SVG/share.svg";
import Breadcrumb from "@/components/breadcrumb";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Modal } from "reactstrap";
import { useRouter } from "next/router";
import { ShareSocial } from "react-share-social";
import { useStorage } from "@/hooks/useStorage";

const Profiledetail = () => {
  const [profilesdata, setprofilesdata] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  const [modalImage, setModalImage] = useState(2);

  const router = useRouter();
  const { id, isLiked } = router.query;
  // console.log("isLiked",id);
  const storage = useStorage();

  useEffect(() => {
    if (id) {
      async function getUser() {
        try {
          const response = await axios.get(
            `http://172.105.57.17:1337/api/profiles/?populate=%2A`
          );
          console.log("response", response.data.data);
          let userProfile = response.data.data.filter((u) => u.id == id);
          setprofilesdata(userProfile);
        } catch (error) {
          console.error(error);
        }
      }
      getUser();
    }
  }, [id]);

  // download pdf of profile
  function downloadPdf() {
    const input = document.getElementById("pdf-content");
    html2canvas(input, {
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });

    // api call to maintain download profile details
    let data = JSON.stringify({
      data: {
        users_permissions_user: storage.id,
        user_profiles: [id],
        locale: "en",
      },
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `http://172.105.57.17:1337/api/download-profiles`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log("download profile response ", response.data.data);
      })
      .catch((error) => {
        console.error("download profile error: ", error);
      });
  }

  // share profile

  const shareProfile = () => {
    setModalOpen(true);
  };

  const style = {
    root: {
      background: "linear-gradient(45deg, #F98B1D 30%, #FF8E53 90%)",
      borderRadius: 3,
      border: 0,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      padding: "1rem 2rem",
    },
    copyContainer: {
      border: "1px solid blue",
      background: "rgb(0,0,0,0.7)",
      padding: "0.5rem",
    },
    title: {
      color: "aquamarine",
      fontStyle: "italic",
    },
  };

  return (
    <>
      {modalOpen && (
        <div className="w-screen h-screen fixed flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-slate-100 border border-black rounded-md px-4">
            <div className="py-2 flex justify-between items-center">
              <h3 className="font-semibold">Share Profile</h3>
              <span
                className="cursor-pointer bg-slate-200 px-2 rounded-md"
                onClick={() => {
                  setModalOpen(!modalOpen);
                }}
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </span>
            </div>
            <hr />
            <div>
              <div className="flex py-6">
                <ShareSocial
                  title={"Matrimony Profile"}
                  url={`http://172.105.57.17:3000/profiledetail/${id}`}
                  socialTypes={["facebook", "whatsapp", "twitter", "linkedin"]}
                  onSocialButtonClicked={(data) => console.log(data)}
                  style={style}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {profilesdata.length > 0 &&
        profilesdata.map((data, index) => {
          console.log("data", data);
          return (
            <>
              <div className="container" key={index}>
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
                            src={isLiked ? RedHeart : Heart}
                            width={24}
                            height={21}
                            alt=""
                            className="mx-2"
                          />
                          <Image
                            onClick={downloadPdf}
                            src={Download}
                            width={24}
                            height={21}
                            alt=""
                            className="mx-2"
                          />

                          <Image
                            onClick={shareProfile}
                            src={Share}
                            width={24}
                            height={21}
                            alt=""
                            className="mx-2"
                          />
                        </div>
                      </td>
                    </tr>
                    <tbody id="pdf-content">
                      <div className="profile_data table-fixed bg-white">
                        <div className="table_header flex ">
                          <thead className="block">
                            <td className="font-bold">
                              {data.attributes.first_name}{" "}
                              {data.attributes.last_name}
                            </td>
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
                                    <span>{data.attributes.phone_number}</span>
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
                                          src={`http://172.105.57.17:1337${data.attributes.profile_photo?.data?.[0]?.attributes.url}`}
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

                                      <div className="img_modal modal-body relative ">
                                        <div className="absolute w-full h-full flex justify-between items-center">
                                          <div
                                            onClick={() => {
                                              setModalImage(
                                                modalImage == 0
                                                  ? 3
                                                  : modalImage - 1
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
                                                modalImage == 3
                                                  ? 0
                                                  : modalImage + 1
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
                                          src={`http://172.105.57.17:1337${data.attributes.profile_photo?.data?.[modalImage]?.attributes.url}`}
                                          placeholder="image"
                                          width={500}
                                          height={500}
                                        />
                                      </div>
                                    </Modal>
                                    <div className="flex justify-around ml-10">
                                      <picture>
                                        <img
                                          className="img_profile_g"
                                          object-fit
                                          src={`http://172.105.57.17:1337${data.attributes.profile_photo?.data?.[1]?.attributes.url}`}
                                          alt=""
                                        />
                                      </picture>
                                      <picture>
                                        <img
                                          className="img_profile_g w-40 h-26"
                                          object-fit
                                          src={`http://172.105.57.17:1337${data.attributes.profile_photo?.data?.[2]?.attributes.url}`}
                                          alt=""
                                        />
                                      </picture>
                                      <picture>
                                        <img
                                          className="img_profile_g w-40 h-26"
                                          object-fit
                                          src={`http://172.105.57.17:1337${data.attributes.profile_photo?.data?.[3]?.attributes.url}`}
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
                                    <span>
                                      {data.attributes.marriage_status}
                                    </span>
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
                                    <span>
                                      {
                                        data.attributes
                                          .educational_qualification
                                      }
                                    </span>
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
                                    <span>
                                      {data.attributes.family_property_details}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center h-24 rounded ">
                                  <div className="fourth_row">
                                    <span
                                      style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                    >
                                      Type of food
                                    </span>
                                    <span>
                                      {data.attributes.Choose_veg_nonveg}
                                    </span>
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
                                    <span>
                                      {data.attributes.Salary_monthly_income}
                                    </span>
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
                                      <span>
                                        {data.attributes.father_native}
                                      </span>
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
                                      <span>
                                        {data.attributes.mother_native}
                                      </span>
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
                                      <span>
                                        {data.attributes.father_profession}
                                      </span>
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
                                      <span>
                                        {data.attributes.mother_profession}
                                      </span>
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
                                      <span>
                                        {data.attributes.parents_contact_number}
                                      </span>
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
                                      <span>
                                        {data.attributes.elder_brothers}
                                      </span>
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
                                      <span>
                                        {data.attributes.younger_brothers}
                                      </span>
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
                                      <span>
                                        {data.attributes.married_brothers}
                                      </span>
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
                                      <span>
                                        {data.attributes.elder_sisters}
                                      </span>
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
                                      <span>
                                        {data.attributes.younger_sisters}
                                      </span>
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
                                      <span>
                                        {data.attributes.married_sisters}
                                      </span>
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
                          <span className="sec_text">
                            Horoscope Information
                          </span>
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
                                      <span>
                                        {data.attributes.zodiacs_sign}
                                      </span>
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
                                      <span>
                                        {data.attributes.udayati_nazhikai}
                                      </span>
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
                                      <span>
                                        {
                                          data.attributes
                                            .presence_of_natal_direction
                                        }
                                      </span>
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
                                className="w-96"
                                object-fit
                                src={`http://172.105.57.17:1337${data.attributes.horoscope_document.data[0].attributes.url}`}
                                alt=""
                              />
                            </picture>
                            <picture>
                              <img
                                className="w-96"
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
