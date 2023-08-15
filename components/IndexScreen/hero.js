import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/assets/indexAssets/headerLogo.png";
import avatar from "@/assets/avatar.png";
import { useRouter } from "next/router";
import Link from "next/link";
import Hamburger from "@/assets/SVG/Hamburger";
import { useStorage } from "@/hooks/useStorage";
import { toast } from "react-toastify";
import axios from "axios";
import GoogleTranslate from "../googleTranslate";
import Script from "next/script";

const Hero = (props) => {
  const [login, setLogin] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { locale, locales, push } = useRouter();
  const [lang, setLang] = useState(locale);

  const storage = useStorage();

  useEffect(() => {
    if (storage) {
      setLogin(true);
    }
  }, [storage]);

  
  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setLogin(false);
    toast.success("Logged Out");
    router.push("/");
  };

  useEffect(() => {
    if (storage) {
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
          // console.log("response", response.data.data);
          const userProfile = response.data.data.filter(
            (u) => u.id === storage?.user_profile?.id
          );
          const userRegisterProfile =  response.data.data.filter(
            (u) => u.id === storage?.id
          );
          const udata = userProfile[0]?.attributes?.profile_photo?.data[0]?.attributes?.url;
          const uRdata = userRegisterProfile[0]?.attributes?.profile_photo?.data[0]?.attributes?.url

          setUserProfile(uRdata != undefined ? uRdata : udata);
        } catch (error) {
          console.error(error);
        }
      }
      getUser();
    }
  }, [userProfile]);

  const imgLoader = () => {
    if (userProfile) {
      return `http://172.105.57.17:1337${userProfile}`;
    }
  };

  return (
    <>
      <div className="relative h-[829.2px]">
        <div className="indexbg absolute top-0 w-full h-[829.2px] -z-10 "></div>
        <div className="absolute top-0 w-full h-[829.2px] bg-black bg-opacity-60 -z-10"></div>
        <div className="flex justify-between items-center pt-10 -md:px-2 lg:px-16 z-10">
          <Link href="/">
            <div>
              <Image
                src={logo}
                alt={"logo"}
                className="img_mob w-24 sm:w-24 md:w-48 lg:w-48"
              />
            </div>
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex items-center  space-x-4  text-white text-[16px] font-[600] max-md:hidden">
              <p className="cursor-pointer px-5">Home</p>
              <p
                className="cursor-pointer px-5"
                onClick={() => {
                  router.push("/pricingPlan");
                }}
              >
                Pricing Plan
              </p>
              <p
                className="cursor-pointer px-5"
                onClick={() => {
                  router.push("/portfolio/portfolio");
                }}
              >
                Search
              </p>
              <p
                className="cursor-pointer px-5"
                onClick={() => {
                  router.push("/contactus");
                }}
              >
                Contact Us
              </p>
              <p
                className="cursor-pointer px-5"
                onClick={() => {
                  router.push("/aboutus");
                }}
              >
                About Us
              </p>
            </div>
          </div>
          {!login ? (
            <span className="not-login">
              <GoogleTranslate />
            </span>
          ) : (
            <GoogleTranslate />
          )}

          <div className="flex justify-center items-center  max-md:hidden">
            {!login ? (
              <>
                <p
                  className="text-white bg-main py-2 px-5 rounded-md mx-2 cursor-pointer"
                  onClick={() => {
                    router.push("/signIn");
                  }}
                >
                  Login
                </p>
                <p
                  className="text-main bg-white py-2 px-5 rounded-md mx-2 cursor-pointer"
                  onClick={() => {
                    router.push("/register");
                  }}
                >
                  Register
                </p>
              </>
            ) : (
              <>
                {storage && (
                  <>
                    <div className="relative max-md:right-10 right-[1rem] group dropdown">
                      <Image
                        className=" rounded-full max-w-[45px]"
                        loader={imgLoader}
                        src={
                          userProfile != null
                            ? `http://172.105.57.17:1337${userProfile}`
                            : avatar
                        }
                        width="100"
                        height="100"
                        unoptimized
                        alt="avatar"
                      />
                      <div className="absolute group-hover:block dropdown-menu hidden h-auto text-white right-2 shadow-lg  z-50 bg-black/[0.4]">
                        <p
                          className="m-3 w-[200px] cursor-pointer"
                          onClick={() => {
                            router.push("/profile");
                          }}
                        >
                          <i className="fa-regular fa-circle-user mr-5 text-main"></i>
                          Profile
                        </p>
                        <p
                          className="m-3 w-[200px] cursor-pointer"
                          onClick={() => {
                            router.push("/likedprofile/" + storage.id);
                          }}
                        >
                          <i className="fa-regular fa-heart mr-5 text-main"></i>
                          Liked Profile
                        </p>
                        <p
                          className="m-3 w-[200px] cursor-pointer"
                          onClick={() => {
                            router.push("/orderHistory");
                          }}
                        >
                          <i className="fa-solid fa fa-history mr-5 text-main"></i>
                          Order History
                        </p>
                        <p
                          className="m-3 w-[200px] cursor-pointer"
                          onClick={() => {
                            router.push("/downloadProfile");
                          }}
                        >
                          <i className="fa-solid fa-download mr-5 text-main"></i>
                          Download Profile
                        </p>
                        <p
                          className="m-3 w-[200px] cursor-pointer"
                          onClick={() => router.push("/changePassword")}
                        >
                          <i className="fa-solid fa-lock mr-5 text-main"></i>{" "}
                          Change Password
                        </p>
                        <p
                          className="m-3 w-[200px] cursor-pointer"
                          onClick={logout}
                        >
                          <i className="fa-solid fa-right-from-bracket mr-5 text-main"></i>
                          Logout
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* dublicate div start here   */}
        <div className="mob-view flex justify-center items-center absolute bottom-[2rem] sm:bottom-[8rem] left-[2rem] sm:left-[16rem]  px-6 md:hidden max-md:flex">
          {!login ? (
            <>
              <p
                className="text-white bg-main py-2 px-5 rounded-md mx-2 cursor-pointer my-5"
                onClick={() => {
                  router.push("/signIn");
                }}
              >
                Login
              </p>
              <p
                className="text-main bg-white py-2 px-5 rounded-md mx-2 cursor-pointer "
                onClick={() => {
                  router.push("/register");
                }}
              >
                Register
              </p>
            </>
          ) : (
            <>
              {storage && (
                <>
                  <div className="relative max-md:right-10 top-[-44rem] left-[12rem] group dropdown">
                    <Image
                      className="rounded-full max-w-[45px]"
                      loader={imgLoader}
                      src={
                        userProfile != null
                          ? `http://172.105.57.17:1337${userProfile}`
                          : avatar
                      }
                      width="100"
                      height="100"
                      unoptimized
                      alt="avatar"
                    />
                    <div className="absolute group-hover:block dropdown-menu hidden h-auto text-white right-2 shadow-lg top-11 z-50 bg-black/[0.4]">
                      <p
                        className="m-3 w-[200px] cursor-pointer"
                        onClick={() => {
                          router.push("/profile");
                        }}
                      >
                        <i className="fa-regular fa-circle-user mr-5 text-main"></i>
                        Profile
                      </p>
                      <p
                        className="m-3 w-[200px] cursor-pointer"
                        onClick={() => {
                          router.push("/likedprofile/" + data.id);
                        }}
                      >
                        <i className="fa-regular fa-heart mr-5 text-main"></i>
                        Liked Profile
                      </p>
                      <p
                        className="m-3 w-[200px] cursor-pointer"
                        onClick={() => {
                          router.push("/downloadProfile");
                        }}
                      >
                        <i className="fa-solid fa-download mr-5 text-main"></i>
                        Download Profile
                      </p>
                      <p
                        className="m-3 w-[200px] cursor-pointer"
                        onClick={() => router.push("/setNewPassword/")}
                      >
                        <i className="fa-solid fa-lock mr-5 text-main"></i>{" "}
                        Change Password
                      </p>
                      <p
                        className="m-3 w-[200px] cursor-pointer"
                        onClick={logout}
                      >
                        <i className="fa-solid fa-right-from-bracket mr-5 text-main"></i>
                        Logout
                      </p>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="absolute right-5 top-14 hidden max-md:block max-sm:block :">
          <Hamburger
            className="relative"
            onClick={() => {
              console.log("Clicked");
              setMenuDropDownOpen(!isMenuDropDownOpen);
            }}
          />
          {isMenuDropDownOpen && (
            <div className="absolute dropdown-menu h-auto text-white right-2 shadow-lg top-11 z-50 bg-black/[0.4]">
              <p
                className="m-3 w-[200px] cursor-pointer"
                onClick={() => {
                  router.push("/");
                }}
              >
                <i className="fa-solid fa-house mr-5 text-main"></i>
                Home
              </p>
              <p
                className="m-3 w-[200px] cursor-pointer"
                onClick={() => {
                  router.push("/pricingPlan");
                }}
              >
                <i className="fa-regular fa-money-bill-1 mr-5 text-main"></i>
                Pricing Plan
              </p>
              <p
                className="m-3 w-[200px] cursor-pointer"
                onClick={() => {
                  router.push("/portfolio/portfolio");
                }}
              >
                <i className="fa-solid fa-magnifying-glass mr-5 text-main"></i>
                Search
              </p>
              <p
                className="m-3 w-[200px] cursor-pointer"
                onClick={() => router.push("/contactus")}
              >
                <i className="fa-regular fa-address-card mr-5 text-main"></i>
                Contact Us
              </p>
              <p
                className="m-3 w-[200px] cursor-pointer"
                onClick={() => router.push("/aboutus")}
              >
                <i className="fa-regular fa-user mr-5 text-main"></i>
                About Us
              </p>
            </div>
          )}
        </div>

        <p className="text-white font-[700] text-[4vw] text-center absolute top-[36%] w-full max-md:text-4xl  ">
          {props.homedata.Hero_Title}
        </p>
        {/* <div className="hidden max-md:block">
          <p className="text-white text-3xl">{vector.svg}EN</p>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
