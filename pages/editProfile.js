/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import EditProfileHeader from "@/components/editProfile/editProfileHeader";
import EditProfileForm1 from "@/components/editProfile/editProfileForm1";
import EditProfileForm2 from "@/components/editProfile/editProfileForm2";
import EditProfileForm3 from "@/components/editProfile/editProfileForm3";
import EditProfileForm4 from "@/components/editProfile/editProfileForm4";

import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useStorage } from "@/hooks/useStorage";

const EditProfile = () => {
  const router = useRouter();

  const [screen, setScreen] = useState(1);
  const [userProfile, setUserProfile] = useState([]);
  const storageData = useStorage();
  // console.log("storageData", storageData);

  // useEffect(() => {
  //   setUserProfile(storageData?.user_profile);
  // }, [storageData]);

  useEffect(() => {
    if(storageData) {
      async function getUser() {
        try {
          const response = await axios.get(
            `http://172.105.57.17:1337/api/profiles/?populate=%2A`
          );
          console.log("response", response.data.data);
          let userProfile = response.data.data.filter((u) => u.id == storageData?.user_profile?.id);
          setUserProfile(userProfile[0].attributes);
          console.log("userProfile ",userProfile);
        } catch (error) {
          console.error(error);
        }
      }
      getUser();
    }
  }, [storageData]);

  // useEffect(() => {
  //   if (storageData == null) {
  //     toast.error("You must be loged in first!");
  //     router.push("/signIn");
  //   }
  // }, [storageData]);

  const getAllDataAndPost = (userid) => {
    const edit1 = JSON.parse(sessionStorage.getItem("edit1"));
    const edit2 = JSON.parse(sessionStorage.getItem("edit2"));
    const edit3 = JSON.parse(sessionStorage.getItem("edit3"));
    const edit4 = JSON.parse(sessionStorage.getItem("edit4"));

    console.log(edit1, edit2, edit3, edit4);
    // horoscope_document: edit4.horrorscopeImages,
    // createdAt: "2023-03-06T10:53:39.299Z",
    // updatedAt: "2023-03-06T10:53:39.299Z",
    // publishedAt: "2023-03-06T10:53:39.190Z",
    // locale: "en",
    // password: edit1.pass,
    // user: response.data.user.id,

    var data2 = JSON.stringify({
      data: {
        first_name: edit2.firstName,
        last_name: edit2.lastName,
        Chooese_groom_bride: edit2.groomOrBride,
        Choose_veg_nonveg: edit2.vegOrNonVeg,
        date_of_birth: edit2.dateOfBirth,
        star: edit2.star,
        Height: edit2.height,
        Color: edit2.color,
        educational_qualification: edit2.educationalQualifications,
        career_detail: edit2.careerDetails,
        Salary_monthly_income: edit2.salary,
        family_property_details: edit2.familyPropertyDetails,
        Expection: edit2.expectation,
        phone_number: edit2.phoneNumber,
        caste: edit2.caste,
        marriage_status: edit2.marriageStatus,
        profile_photo: edit2.profileImages,
        father_name: edit3.fatherName,
        mother_name: edit3.motherName,
        father_native: edit3.fatherNative,
        mother_native: edit3.motherNative,
        father_profession: edit3.fatherProfession,
        mother_profession: edit3.motherProfession,
        parents_contact_number: edit3.phoneNumber,
        address: edit3.address,
        Father: edit3.father ? "Father" : " ",
        Mother: edit3.mother ? "Mother" : " ",
        brothers: edit3.brothers,
        elder_brothers: edit3.elderBrothers,
        younger_brothers: edit3.youngerBrothers,
        married_brothers: edit3.marriedBrothers,
        sisters: edit3.sisters,
        elder_sisters: edit3.elderSisters,
        younger_sisters: edit3.youngerSisters,
        married_sisters: edit3.marriedSisters,
        zodiacs_sign: edit4.zodiacSign,
        tamil_year: edit4.tamilYear,
        tamil_month: edit4.tamilMonth,
        udayati_nazhikai: edit4.udayatiNazhikai,
        day: edit4.day,
        birth_time: edit4.birthTime + ":00.000",
        star_foot: edit4.starFoot,
        ascendant: edit4.ascendant,
        birthplace: edit4.birthplace,
        presence_of_natal_direction: edit4.presenceOfNatalDirection,
        horoscope_document: edit4.horrorscopeImages,
        username: edit1.user,
        email: edit1.email,
      },
    });

    var config2 = {
      method: "put",
      maxBodyLength: Infinity,
      url: `http://172.105.57.17:1337/api/profiles/${storageData?.user_profile?.id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data2,
    };

    axios(config2)
      .then(function (response) {
        console.log("edit response", response.data);
        toast.success("Profile Edited");
        sessionStorage.removeItem("edit1");
        sessionStorage.removeItem("edit2");
        sessionStorage.removeItem("edit3");
        sessionStorage.removeItem("edit4");

        axios
          .get(
            `http://172.105.57.17:1337/api/users/${storageData?.id}?populate=user_profile`
          )
          .then((res) => {
            console.log("userprop res", res);
            if (localStorage.hasOwnProperty("user")) {
              localStorage.setItem("user", JSON.stringify(res.data));
            } else {
              sessionStorage.setItem("user", JSON.stringify(res.data));
            }
            // router.push("/profiledetail/" + res.data.user_profile.id);
            router.push("/profile");
          })
          .catch((error) => {
            console.error("userprop error", error);
          });
      })
      .catch(function (error) {
        console.log("put error,", error);
      });
  };

  return (
    <div
      className={
        "bg-[#E0E0E0] py-10 w-full max-md:bg-white max-md:w-fit max-md:flex max-md:justify-start"
      }
    >
      <div className="bg-white w-auto mx-auto pt-12 pb-10">
        <EditProfileHeader index={screen} />
        {screen == 1 && (
          <EditProfileForm1
            screen={screen}
            setScreen={setScreen}
            userData={userProfile}
          />
        )}
        {screen == 2 && (
          <EditProfileForm2
            screen={screen}
            setScreen={setScreen}
            userData={userProfile}
          />
        )}
        {screen == 3 && (
          <EditProfileForm3
            screen={screen}
            setScreen={setScreen}
            userData={userProfile}
          />
        )}
        {screen == 4 && (
          <EditProfileForm4
            screen={screen}
            setScreen={setScreen}
            getAllDataAndPost={getAllDataAndPost}
            userData={userProfile}
          />
        )}
      </div>
    </div>
  );
};

export default EditProfile;
