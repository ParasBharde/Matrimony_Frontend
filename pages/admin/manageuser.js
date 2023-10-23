import React, { useState, useEffect } from "react";
import Manageuserdash from "@/components/customerpanel/manageuserdash";
import Sidenav from "@/components/customerpanel/sidenav";
import Topnav from "@/components/customerpanel/topnav";
import Footernav from "@/components/customerpanel/footernav";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useCalculateAge } from "@/hooks/useCalculateAge";

const Manageuser = () => {
  const { data: session, status } = useSession({
    required: true,
  });
  const calculateAge = useCalculateAge();

  const [filteredProfiles, setFilteredProfiles] = useState({});
  const [profiles, setprofiles] = useState([]);
  useEffect(() => {
    async function getUser() {
      var config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://172.105.57.17:1337/api/profiles/?populate=%2A",
        headers: {
          Authorization:
            "Bearer 3ad527b6e04e45a25b5c7a57d8e796af06f0853e2fa7c4551566c2096b18b80500bdaf2fc61dace337df1dc8c2a0026075026b10589f9c9d009a72165635b72012c305bf52929b73a79c97e1e5a53e7193f812604f83fa679731fa19540e9ecd7112dc224f0cccd4624294b05ec2864b552bdf7905d65736410f0cf2774c3994",
        },
      };

      axios(config)
        .then(function (response) {
          console.log("response", response);
          setprofiles(response.data.data);
          setFilteredProfiles(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getUser();
  }, []);
  console.log("filteredProfiles", filteredProfiles);

  const handleFilterQuery = (query) => {
    console.log(query);
    let updatedFilteredProfiles = profiles;

    if (
      query?.gender == "Choose" &&
      query?.zodiac == "Choose" &&
      query?.minAge == "" &&
      query?.maxAge == "" &&
      query?.maritalStatus == "Choose" &&
      query?.education == ""
    ) {
      setFilteredProfiles(profiles);
      return;
    } else {
      console.log(updatedFilteredProfiles)
      if (query.gender !== "Choose") {
         updatedFilteredProfiles = updatedFilteredProfiles.filter((profile) => profile.attributes.Chooese_groom_bride == query.gender).map(u=> {return u});
      } else if (query.zodiac !== "Choose") {
        updatedFilteredProfiles = updatedFilteredProfiles.filter((profile) => {
          {
            return profile.attributes.zodiacs_sign == query.zodiac;
          }
        });
      } else if (query.minAge !== undefined && query.minAge !== "") {
        const queryAgeFrom = Number(query.minAge);
        updatedFilteredProfiles = updatedFilteredProfiles.filter((profile) => {
          const age = calculateAge(profile.attributes.date_of_birth);
          return age >= queryAgeFrom;
        });
      } else if (query.maxAge !== undefined && query.maxAge !== "") {
        const queryAgeTo = Number(query.maxAge);
        updatedFilteredProfiles = updatedFilteredProfiles.filter((profile) => {
          const age = calculateAge(profile.attributes.date_of_birth);
          return age <= queryAgeTo;
        });
      } else if (query.maritalStatus !== "Choose") {
        updatedFilteredProfiles = updatedFilteredProfiles.filter((profile) => {
          return profile.attributes.marriage_status == query.maritalStatus;
        });
      } else if (query.education !== "") {
        updatedFilteredProfiles = updatedFilteredProfiles.filter((profile) => {
          return (
            profile.attributes.educational_qualification == query.education
          );
        });
      }
       else {
        setFilteredProfiles(profiles);
      }
    }

    setFilteredProfiles(updatedFilteredProfiles);
  };
  console.log(filteredProfiles);
  if (!session) {
    return <></>;
  }
  return (
    <>
      <Sidenav />
      <Topnav />
      <Manageuserdash
        handleFilterQuery={handleFilterQuery}
        allprofiles={filteredProfiles}
      />
      <Footernav />
    </>
  );
};

export default Manageuser;
