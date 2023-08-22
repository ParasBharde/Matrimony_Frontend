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
import { useCalculateAge } from "@/hooks/useCalculateAge";
import { useSession } from "next-auth/react";

const Profiledetail = () => {
  const [profilesdata, setprofilesdata] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  const [modalImage, setModalImage] = useState(2);
  const calculateAge = useCalculateAge();
  const router = useRouter();
  const { id, isLiked } = router.query;
  const storage = useStorage();

  const increaseViews = (uid,pId) => {
    let data = "";
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `http://172.105.57.17:1337/api/plan/increaseMemeberView?user_id=${uid}&viewed_member_id=${pId}`,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data), "viewCounted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userIdD = storage?.user_profile?.id;
  useEffect(() => {
    if (router.query.id) {
      increaseViews(userIdD,id);
    }
  }, [router.query.id, userIdD]);

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
  function downloadPdf1() {
    const input = document.getElementById("pdf-content");
    html2canvas(input, {
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
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

  // ................... 3rd code of download pdf ................

  const [pdfWidth, setPdfWidth] = useState();
  const [pdfHeight, setPdfHeight] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadPdf = async () => {
    setIsLoading(true);
    const input = document.getElementById("pdf-content");

    try {
      const canvas = await html2canvas(input, { useCORS: true });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", [pdfWidth, pdfHeight]);
      const imgProps = pdf.getImageProperties(imgData);

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");

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

      const response = await axios(config);
      console.log("download profile response ", response.data.data);
    } catch (error) {
      console.error("download profile error: ", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const updatePdfDimensions = () => {
      const screenWidth = window.innerWidth;
      let width, height;

      if (screenWidth < 768) {
        // For mobile devices
        width = 100;
        height = 600;
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        // For tablet devices
        width = 250;
        height = 600;
      } else {
        // For desktop devices
        width = 595;
        height = 842;
      }

      setPdfWidth(width);
      setPdfHeight(height);
    };

    updatePdfDimensions();
    window.addEventListener("resize", updatePdfDimensions);

    return () => {
      window.removeEventListener("resize", updatePdfDimensions);
    };
  }, []);

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
      padding: "1rem 5rem",
    },
    copyContainer: {
      border: "1px solid blue",
      background: "rgb(0,0,0,0.7)",
      width: "30vw",
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
          <div className="bg-slate-100 border border-black rounded-md px-4 scale-50 sm:scale-50 md:scale-100 lg:scale-100">
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
              <div className="flex py-8 px-8">
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
          const age = calculateAge(data.attributes.date_of_birth);
          console.log("ageCheck", age);
          return (
            <>
              <div
                className="container"
                key={index}
                style={{ backgroundColor: "white" }}
              >
                <Breadcrumb screens={["Home", "Search", "Profile Details"]} />
                <div className="main_container flex justify-center overflow-auto bg-white">
                  <table className="shadow-2xl">
                    <tr>
                      <td className="flex items-center w-full bg-main h-24 px-5">
                        <span className="text-white flex-1">
                          Profile Detail
                        </span>
                        <div className="flex items-center ">
                          <Image
                            src={isLiked == "true" ? RedHeart : Heart}
                            width={24}
                            height={21}
                            alt=""
                            className="mx-2"
                            onClick={() => console.log("CLicked")}
                          />
                          <Image
                            onClick={handleDownloadPdf}
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
                        <div className="flex justify-between">     
                          <div className=" max-md:mt-[18rem]">
                            <div className="ml-5 mt-2">
                              <p className="font-bold pt-5 ml-5">
                                {data.attributes.first_name}{" "}
                                {data.attributes.last_name}
                              </p>
                            </div>
                            <div className=" ml-5">
                              <p className="ml-5"> {data.id}</p>
                            </div> 
                            <div className="grid lg:grid-cols-3 max-md:grid-cols-1 sm:grid-cols-1">
                              <div className="p-5  ">
                                <div className="ml-5">
                                  <span
                                    style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                  >
                                    Email{" "}
                                  </span>
                                  <p className="max-md:break-normal">
                                    {data.attributes.email}
                                  </p>
                                </div>
                                <div className="mt-5 ml-5">
                                  <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                    Age
                                  </p>
                                  {/* <p>{calculateAge(date_of_birth)}</p> */}
                                  <p>{age}</p>
                                </div>
                                <div className="mt-5 ml-5">
                                  <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                    {" "}
                                    Height
                                  </p>
                                  <p>{data.attributes.Height}</p>
                                </div>
                                <div className="mt-5 ml-5">
                                  <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                    {" "}
                                    Caste
                                  </p>
                                  <p>{data.attributes.caste}</p>
                                </div>
                                <div className="mt-5 ml-5">
                                  <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                    Career
                                  </p>
                                  <p>{data.attributes.career_detail}</p>
                                </div>
                              </div>
                              <div className="p-5">
                                <div className="ml-5">
                                  <span
                                    style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                  >
                                    Phone
                                  </span>
                                  <p className="">
                                    {data.attributes.phone_number}
                                  </p>
                                </div>
                                <div className="mt-5 ml-5">
                                  <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                    Star{" "}
                                  </p>
                                  <p>{data.attributes.star}</p>
                                </div>
                                <div className="mt-5 ml-5">
                                  <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                    Qualification
                                  </p>
                                  <p>
                                    {data.attributes.educational_qualification}
                                  </p>
                                </div>
                                <div className="mt-5 ml-5">
                                  <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                    Family Property{" "}
                                  </p>
                                  <p>
                                    {data.attributes.family_property_details}
                                  </p>
                                </div>
                                <div className="mt-5 ml-5">
                                  <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                    Salary
                                  </p>
                                  <p>{data.attributes.Salary_monthly_income}</p>
                                </div>
                              </div>
                              <div className="p-5  ">
                                <div className="ml-5">
                                  <span
                                    style={{ color: "rgba(30, 30, 30, 0.5)" }}
                                  >
                                    Date of Birth
                                  </span>
                                  <p>{data.attributes.date_of_birth}</p>
                                </div>
                                <div className="mt-5 ml-5">
                                  <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                    Marriage Status
                                  </p>
                                  <p>{data.attributes.marriage_status}</p>
                                </div>
                                <div className="mt-5 ml-5">
                                  <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                    Color
                                  </p>
                                  <p>{data.attributes.Color}</p>
                                </div>
                                <div className="mt-5 ml-5">
                                  <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                    Type of food
                                  </p>
                                  <p>{data.attributes.Choose_veg_nonveg}</p>
                                </div>
                                <div className="mt-5 ml-5">
                                  <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                    Expectation
                                  </p>
                                  <p>{data.attributes.Expection}</p>
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
                                    src={`http://172.105.57.17:1337${data.attributes.profile_photo?.data?.[modalImage]?.attributes.url}`}
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
                                    src={`http://172.105.57.17:1337${data.attributes.profile_photo?.data?.[1]?.attributes.url}`}
                                    alt=""
                                  />
                                </picture>
                                <picture  className=" ">
                                  <img
                                    className="img_profile_g "
                                    object-fit
                                    src={`http://172.105.57.17:1337${data.attributes.profile_photo?.data?.[2]?.attributes.url}`}
                                    alt=""
                                  />
                                </picture >
                                <picture className=" ">
                                  <img
                                    className="img_profile_g"
                                    object-fit
                                    src={`http://172.105.57.17:1337${data.attributes.profile_photo?.data?.[3]?.attributes.url}`}
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
                              <p>{data.attributes.father_name}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Father&apos;s Profession
                              </p>
                              <p>{data.attributes.father_profession}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Brothers{" "}
                              </p>
                              <p>{data.attributes.brothers}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Sisters{" "}
                              </p>
                              <p>{data.attributes.sisters}</p>
                            </div>
                          </div>
                          <div className="p-5  ">
                            <div className="ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                {" "}
                                Mother&apos;s Name{" "}
                              </p>
                              <p>{data.attributes.mother_name}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Mother&apos;s Profession
                              </p>
                              <p>{data.attributes.mother_profession}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Elder Brother{" "}
                              </p>
                              <p>{data.attributes.elder_brothers}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Elder Sisters{" "}
                              </p>
                              <p>{data.attributes.elder_sisters}</p>
                            </div>
                          </div>
                          <div className="p-5  ">
                            <div className="ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Father&apos;s Native
                              </p>
                              <p>{data.attributes.father_native}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Phone Number
                              </p>
                              <p>{data.attributes.parents_contact_number}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Younger Brother{" "}
                              </p>
                              <p>{data.attributes.younger_brothers}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Younger Sisters{" "}
                              </p>
                              <p>{data.attributes.younger_sisters}</p>
                            </div>
                          </div>
                          <div className="p-5 ">
                            <div className="ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                {" "}
                                Mother&apos;s Native
                              </p>
                              <p>{data.attributes.mother_native}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                {" "}
                                Address{" "}
                              </p>
                              <p>{data.attributes.address}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Married
                              </p>
                              <p>{data.attributes.married_brothers}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                {" "}
                                Married
                              </p>
                              <p>{data.attributes.married_sisters}</p>
                            </div>
                          </div>
                        </div>
                        <p className="font-bold ml-10 mt-5">
                          Horoscope Information
                        </p>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
                          <div className="p-5  ">
                            <div className="ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Zodiac Sign
                              </p>
                              <p>{data.attributes.zodiacs_sign}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Day{" "}
                              </p>
                              <p>{data.attributes.day}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Birthplace
                              </p>
                              <p>{data.attributes.birthplace}</p>
                            </div>
                          </div>
                          <div className="p-5  ">
                            <div className="ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Tamil Year{" "}
                              </p>
                              <p>{data.attributes.tamil_year}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Birth Time
                              </p>
                              <p>{data.attributes.birth_time}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                {" "}
                                Presence Of Natal Direction{" "}
                              </p>
                              <p>
                                {data.attributes.presence_of_natal_direction}
                              </p>
                            </div>
                          </div>
                          <div className="p-5  ">
                            <div className="ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Tamil Month
                              </p>
                              <p>{data.attributes.tamil_month}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Star/Foot
                              </p>
                              <p>{data.attributes.star_foot}</p>
                            </div>
                          </div>
                          <div className="p-5 ">
                            <div className="ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Udayati Nazhikai{" "}
                              </p>
                              <p>{data.attributes.udayati_nazhikai}</p>
                            </div>
                            <div className="mt-5 ml-5">
                              <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                                Ascendant(Laknam)
                              </p>
                              <p>{data.attributes.ascendant}</p>
                            </div>
                          </div>
                        </div>
                        <p className="font-bold ml-10 mt-5">Horoscope Chart</p>
                        <div className="grid grid-cols-2 gap-6 mt-[3rem] pb-4 scale-75">
                          {data.attributes.horoscope_document.data.map(
                            (val, i) => {
                              return (
                                <picture key={i}>
                                  <img
                                    className="w-[71%] h-[13rem]"
                                    object-fit
                                    src={`http://172.105.57.17:1337${data.attributes.horoscope_document.data[i].attributes.url}`}
                                    alt=""
                                  />
                                </picture>
                              );
                            }
                          )}
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
