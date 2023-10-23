import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import headerLogo from "@/assets/headerLogo.png";
import avatar from "@/assets/avatar.png";
import { useRouter } from "next/router";
import Link from "next/link";
import Hamburger from "@/assets/SVG/Hamburger";
import { toast } from "react-toastify";
import axios from "axios";
import { useOnHoverOutside } from "@/hooks/useOnHoverOutside";
import { useStorage } from "@/hooks/useStorage";
import GoogleTranslate from "./googleTranslate";
import { deleteCookie } from 'cookies-next';

const Header = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { locale, locales, push } = useRouter();
  const getSelectedValue = (e) => {
    router.push({ pathname, query }, asPath, { locale: e });
  };

  const storage = useStorage();

  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);
  const [isMenuDropDownOpen1, setMenuDropDownOpen1] = useState(false);
  const [userProfile, setUserProfile] = useState('');
  const [isAdminLogin, setAdminLogin] = useState();
  const [isProfileChanged, setIsProfileChanges] = useState("false");
  console.log(storage);



  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `http://172.105.57.17:1337/api/profiles/?populate=%2A`
        );
        console.log(response.data.data);
        let userProfiles = response.data.data.filter((u) => u.id == storage?.user_profile?.id);
        // let userProfiles = response.data.data.filter((u) => u.id == storage?.user_profile?.id);


        let userRegisterProfile = response.data.data.filter((u) => u.attributes.user.data.id == storage?.id);
        console.log(userProfiles, userRegisterProfile);
        console.log(userProfiles[0]?.attributes?.profile_photo?.data[0]?.attributes?.url);
        console.log(userRegisterProfile[0]?.attributes?.profile_photo?.data[0]?.attributes?.url);
        setUserProfile(userRegisterProfile[0]?.attributes?.profile_photo?.data[0]?.attributes?.url != undefined ? userRegisterProfile[0]?.attributes?.profile_photo?.data[0]?.attributes?.url: userProfiles[0]?.attributes?.profile_photo?.data[0]?.attributes?.url);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, [storage,storage?.user_profile?.id]);
  useEffect(() => {
    if (pathname == "/admin/welcome") {
      setAdminLogin(true);
    } else {
      setAdminLogin(false);
    }
  }, [pathname, userProfile]);

  const closeHoverMenu1 = () => {
    setMenuDropDownOpen1(false);
  };

  // useOnHoverOutside(dropdownRef, closeHoverMenu);
  useOnHoverOutside(dropdownRef1, closeHoverMenu1);

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    deleteCookie('logged', false);
    toast.success("Logged Out");
    router.push("/");
  };

  console.log(userProfile);
  const imgLoader = () => {
    if (userProfile) {
      return `http://172.105.57.17:1337${userProfile}`;
    } else {
      return `http://172.105.57.17:1337${avatar}`
    }
  };

  return (
    <div className="bg-white flex flex-row justify-between items-center px-14  max-md:pt-5 py-3 max-md:w-auto max-md:border-solid border-y-2 max-md:px-0">
      <Link href="/">
        <div>
          <Image
            src={headerLogo}
            alt={"Header Logo"}
            className="pl-0 sm:pl-0 md:pl-5 lg:pl-5 "
          />
        </div>
      </Link>
      <div className="flex justify-center items-center gap-16 pr-10">
        <div className="flex justify-center items-center text-[16px] font-[400] gap-10 max-md:hidden">
          <p
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </p>
          {!isAdminLogin && (
            <>
              <p
                className={`cursor-pointer ${
                  pathname == "/pricingPlan" && "text-main"
                }`}
                onClick={() => {
                  router.push("/pricingPlan");
                }}
              >
                Pricing Plan
              </p>
              <p
                className={`cursor-pointer ${
                  pathname == "/portfolio/portfolio" && "text-main"
                }`}
                onClick={() => {
                  router.push("/portfolio/portfolio");
                }}
              >
                Search
              </p>{" "}
            </>
          )}
          <p
            className={`cursor-pointer ${
              pathname == "/contactus" && "text-main"
            }`}
            onClick={() => {
              router.push("/contactus");
            }}
          >
            Contact Us
          </p>
          <p
            className={`cursor-pointer ${
              pathname == "/aboutus" && "text-main"
            }`}
            onClick={() => {
              router.push("/aboutus");
            }}
          >
            About Us
          </p>

        </div>
        <div className='google' >
          <GoogleTranslate />
        </div>

        <div className="absolute right-2 hidden max-md:block max-sm:block group dropdown">
          
          <i className="fa-solid fa-bars mr-3 mb-3"></i>
          <div className="absolute group-hover:block dropdown-menu hidden h-auto right-2 shadow-lg top-11 z-50 bg-white">
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
        </div>

        {/* ..................   */}

        {storage && (
          <div className="relative max-md:right-10 right-[2rem] group dropdown">
           {userProfile && (
           <Image className="rounded-full max-w-[45px]"
            //  loader={imgLoader}
             src={`http://172.105.57.17:1337${userProfile}`}
             width="100"
             height="100"
             unoptimized
             alt="avatar"
           />
           )      
}
          
            <div className="absolute group-hover:block dropdown-menu hidden h-auto right-2 shadow-lg z-50 bg-white">
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
                  router.push("/downloadProfile");
                }}
              >
                <i className="fa-solid fa-download mr-5 text-main"></i>
                Download Profile
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
                onClick={() => router.push("/changePassword")}
              >
                <i className="fa-solid fa-lock mr-5 text-main"></i> Change
                Password
              </p>
              <p className="m-3 w-[200px] cursor-pointer" onClick={logout}>
                <i className="fa-solid fa-right-from-bracket mr-5 text-main"></i>
                Logout
              </p>
            </div>
          </div>
        )}

        {/* {!userProfile && (
          <Image className="rounded-full max-w-[45px]"
          //  loader={imgLoader}
           src={avatar}
           width="100"
           height="100"
           unoptimized
           alt="avatar"
         />
        )} */}
      </div>

    </div>
  );
};

export default Header;
