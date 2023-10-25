import React, { useState, useEffect } from "react";
import axios from "axios";
import Portfoliodetails from "@/components/portfoliodetails/portfoliodetails";
import Portfolioheader from "@/components/portfoliodetails/portfolioheader";
import { useRouter } from "next/router";
import { useCalculateAge } from "@/hooks/useCalculateAge";
import { useStorage } from "@/hooks/useStorage";

const Portfolio = () => {
  const router = useRouter();
  const [filteredProfiles, setFilteredProfiles] = useState({});
  const [profiles, setprofiles] = useState([]);
  const [total, setTotal] = useState(0);
  const storageData = useStorage();
  console.log(storageData);

  
  const check =  storageData?.id;
  console.log(check)
  useEffect(() => {
    async function getUser() {
      var config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://172.105.57.17:1337/api/profiles/?populate=%2A",
        headers: {
          Authorization:
            "Bearer Bearer 3ad527b6e04e45a25b5c7a57d8e796af06f0853e2fa7c4551566c2096b18b80500bdaf2fc61dace337df1dc8c2a0026075026b10589f9c9d009a72165635b72012c305bf52929b73a79c97e1e5a53e7193f812604f83fa679731fa19540e9ecd7112dc224f0cccd4624294b05ec2864b552bdf7905d65736410f0cf2774c3994",
        },
      };

      axios(config)
        .then(function (response) {
          let profiles = response.data.data.filter((item) => {return item?.attributes.user.data.id != storageData?.id;
          });
          console.log(profiles)
          setprofiles(profiles);
          setFilteredProfiles(profiles);
          setTotal(profiles.length);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getUser();
  }, [storageData, check]);

console.log('filteredProfiles',filteredProfiles)
  const calculateAge = useCalculateAge();

  const handleFilterQuery = (query) => {
    console.log("query1", query);
    if (
      query.looking == "Choose" &&
      query.star == "Choose" &&
      query.ageFrom == "" &&
      query.ageTo == "" &&
      query.marriageStatus == "Choose"
    ) {
      setFilteredProfiles(profiles);
      setTotal(profiles.length);
      return;
    }

    let filteredProfiles = profiles;
    if (query.looking !== "Choose") {
      filteredProfiles = filteredProfiles.filter((profile) => {
        return profile.attributes.Chooese_groom_bride == query.looking;
      });
    }

    if (query.star !== "Choose") {
      filteredProfiles = filteredProfiles.filter((profile) => {
        return profile.attributes.star == query.star;
      });
    }

    if (query.ageFrom !== undefined && query.ageFrom !== "") {
      let queryAgeFrom = Number(query.ageFrom);
      filteredProfiles = filteredProfiles.filter((profile) => {
        const age = calculateAge(profile.attributes.date_of_birth);
        return age >= queryAgeFrom;
      });
    }

    if (query.ageTo !== undefined && query.ageTo !== "") {
      let queryAgeTo = Number(query.ageTo);
      filteredProfiles = filteredProfiles.filter((profile) => {
        const age = calculateAge(profile.attributes.date_of_birth);
        return age <= queryAgeTo;
      });
    }

    if (query.marriageStatus !== "Choose") {
      filteredProfiles = filteredProfiles.filter((profile) => {
        return profile.attributes.marriage_status == query.marriageStatus;
      });
    }

    setFilteredProfiles(filteredProfiles);
    setTotal(filteredProfiles.length);
  };
  return (
    <>
      <div className="colo" style={{ backgroundColor: "white" }}>
        <Portfolioheader handleFilterQuery={handleFilterQuery} className="bg-blue-500"/>
        <Portfoliodetails allprofiles={filteredProfiles} total={total} />
      </div>
      <style jsx>{`
        .colo {
          backgroundColor:'#e0e0e0'
          height: auto;
          padding: auto;  
        //  margin-bottom: 4rem;
        }
      `}</style>
    </>
  );
};

export default Portfolio;
