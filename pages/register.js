/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import RegisterHeader from "@/components/registerScreen/registerHeader";
import RegisterForm1 from "@/components/registerScreen/registerForm1";
import RegisterForm2 from "@/components/registerScreen/registerForm2";
import RegisterForm3 from "@/components/registerScreen/registerForm3";
import RegisterForm4 from "@/components/registerScreen/registerForm4";

import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useStorage } from "@/hooks/useStorage";

import axios from "axios";

const Register = () => {
  const router = useRouter();

  const [screen, setScreen] = useState(1);
  const storageData = useStorage();
  // useEffect(() => {
  // if (adminUser) {
  //   console.log(storageData);
  //   console.log(storageData?.adminUser);
  //   toast.info("User Created Succe");
  //   router.push("/admin/manageuser");

  // }
  //   if (storageData) {

  //     toast.info("User Already Logged In");
  //     router.push("/profiledetail/" + storageData?.user_profile?.id);
  //   }
  // }, [storageData]);

  const getAllDataAndPost = () => {
    const rg1 = JSON.parse(sessionStorage.getItem("rg1"));
    const rg2 = JSON.parse(sessionStorage.getItem("rg2"));
    const rg3 = JSON.parse(sessionStorage.getItem("rg3"));
    const rg4 = JSON.parse(sessionStorage.getItem("rg4"));
    const adminUser = JSON.parse(sessionStorage.getItem("adminUser"));
    console.log(rg1, rg2, rg3, rg4);

    var data = JSON.stringify({
      username: rg1.user,
      email: rg1.email,
      password: rg1.pass,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/auth/local/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
       
          console.log("First User Registered", response.data);
          toast.success("Account Created");
          var data2 = JSON.stringify({
            data: {
              first_name: rg2.firstName,
              last_name: rg2.lastName,
              Chooese_groom_bride: rg2.groomOrBride,
              Choose_veg_nonveg: rg2.vegOrNonVeg,
              date_of_birth: rg2.dateOfBirth,
              star: rg2.star,
              Height: rg2.height,
              Color: rg2.color,
              educational_qualification: rg2.educationalQualifications,
              career_detail: rg2.careerDetails,
              Salary_monthly_income: rg2.salary,
              family_property_details: rg2.familyPropertyDetails,
              Expection: rg2.expectation,
              phone_number: rg2.phoneNumber,
              caste: rg2.caste,
              marriage_status: rg2.marriageStatus,
              profile_photo: rg2.profileImages,
              father_name: rg3.fatherName,
              mother_name: rg3.motherName,
              father_native: rg3.fatherNative,
              mother_native: rg3.motherNative,
              father_profession: rg3.fatherProfession,
              mother_profession: rg3.motherProfession,
              parents_contact_number: rg3.phoneNumber,
              address: rg3.address,
              Father: rg3.father ? "Father" : " ",
              Mother: rg3.mother ? "Mother" : " ",
              brothers: rg3.brothers,
              elder_brothers: rg3.elderBrothers,
              younger_brothers: rg3.youngerBrothers,
              married_brothers: rg3.marriedBrothers,
              sisters: rg3.sisters,
              elder_sisters: rg3.elderSisters,
              younger_sisters: rg3.youngerSisters,
              married_sisters: rg3.marriedSisters,
              zodiacs_sign: rg4.zodiacSign,
              tamil_year: rg4.tamilYear,
              tamil_month: rg4.tamilMonth,
              udayati_nazhikai: rg4.udayatiNazhikai,
              day: rg4.day,
              birth_time: rg4.birthTime + ":00.000",
              star_foot: rg4.starFoot,
              ascendant: rg4.ascendant,
              birthplace: rg4.birthplace,
              presence_of_natal_direction: rg4.presenceOfNatalDirection,
              horoscope_document: rg4.horrorscopeImages,
              username: rg1.user,
              email: rg1.email,
              password: rg1.pass,
              user: response.data.user.id,
            },
          });

          var config2 = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://172.105.57.17:1337/api/profiles",
            headers: {
              "Content-Type": "application/json",
            },
            data: data2,
          };

          axios(config2)
            .then(function (response) {
              console.log("response", response);
              const secres = response;
              toast.success("Profile Registered");
              if (adminUser) {
                router.push("/admin/manageuser");
                sessionStorage.removeItem("rg1");
                sessionStorage.removeItem( "rg2");
                sessionStorage.removeItem("rg3");
                sessionStorage.removeItem("rg4");

                localStorage.clear("rg1");
                localStorage.clear("rg2");
                localStorage.clear("rg3");
                localStorage.clear("rg4");

              } else {
                router.push("/profiledetail/" + response.data.data.id);
                sessionStorage.removeItem("rg1");
                sessionStorage.removeItem( "rg2");
                sessionStorage.removeItem("rg3");
                sessionStorage.removeItem("rg4");

                localStorage.clear("rg1");
                localStorage.clear("rg2");
                localStorage.clear("rg3");
                localStorage.clear("rg4");
                localStorage.setItem("user", JSON.stringify(response.data.data));
                console.log(response.data.data,'after Register')
              }

              localStorage.setItem("user", JSON.stringify(response.data.data));
              console.log(response.data.data,'after Register')

            })
            .catch(function (error) {
              let e = error?.response?.data?.error?.details?.errors;
              console.log(e);
              for (let i = 0; i < e.length; i++) {
                toast.error(e[i].message);
              }
            });
      
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error);
      });
  };

  return (
    <div
      className={
        "bg-[#E0E0E0] py-10 w-full max-md:bg-white max-md:w-fit max-md:flex max-md:justify-start"
      }
    >
      <div className="bg-white w-auto mx-auto pt-12 pb-10">
        <RegisterHeader index={screen} />
        {screen == 1 && <RegisterForm1 screen={screen} setScreen={setScreen} />}
        {screen == 2 && <RegisterForm2 screen={screen} setScreen={setScreen} />}
        {screen == 3 && <RegisterForm3 screen={screen} setScreen={setScreen} />}
        {screen == 4 && (
          <RegisterForm4
            screen={screen}
            setScreen={setScreen}
            getAllDataAndPost={getAllDataAndPost}
          />
        )}
      </div>
    </div>
  );
};

export default Register;
