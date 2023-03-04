import React, { useState, useEffect } from "react";
import Portfoliodetails from "@/components/portfoliodetails/portfoliodetails";
import Portfolioheader from "@/components/portfoliodetails/portfolioheader";
import { useRouter } from "next/router";

import axios from "axios";

const Portfolio = () => {
  const router = useRouter();
  const [filteredProfiles, setFilteredProfiles] = useState({});
  const [profiles, setprofiles] = useState([]);
  // const [length, setLength] = useState(0);
  const [total, setTotal] = useState(0);

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
        setprofiles(response.data.data);
        setFilteredProfiles(response.data.data);
        setTotal(response.data.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //console.log("profiles", profiles);
  useEffect(() => {
    getUser();
  }, []);

  const calculateAge = (dateOfBirth) => {
    const birthYear = Number(dateOfBirth.slice(0, 4));
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const handleFilterQuery = (query) => {
    let filteredProfiles = profiles;
    if (query.looking != "Choose") {
      filteredProfiles = filteredProfiles.filter((profile) => {
        return profile.attributes.Chooese_groom_bride == query.looking;
      });
    }

    if (query.star != "Choose") {
      filteredProfiles = filteredProfiles.filter((profile) => {
        return profile.attributes.star == query.star;
      });
    }

    if (query.ageFrom != undefined) {
      let queryAgeFrom = Number(query.ageFrom);
      filteredProfiles = filteredProfiles.filter((profile) => {
        const age = calculateAge(profile.attributes.date_of_birth);
        return age >= queryAgeFrom;
      });
    }

    if (query.ageTo != undefined) {
      let queryAgeTo = Number(query.ageTo);
      filteredProfiles = filteredProfiles.filter((profile) => {
        const age = calculateAge(profile.attributes.date_of_birth);
        return age <= queryAgeTo;
      });
    }

    if (query.marriageStatus != "Choose") {
      filteredProfiles = filteredProfiles.filter((profile) => {
        return profile.attributes.marriage_status == query.marriageStatus;
      });
    }

    setFilteredProfiles(filteredProfiles);
  };
  return (
    <>
      <div className="colo" style={{}}>
        <Portfolioheader handleFilterQuery={handleFilterQuery} />
        <Portfoliodetails allprofiles={filteredProfiles} total={total} />
      </div>
      <style jsx>{`
        .colo {
          backgroundColor:'#e0e0e0'
          height: auto;
          padding: auto;  
         margin-bottom: 4rem;
        }
      `}</style>
    </>
  );
};

export default Portfolio;
