import React, { useState, useEffect } from "react";
import axios from "axios";
import Topnavbar from "@/components/portfoliodetails/topnavbar";
import Header from "@/components/header";
import { useRouter } from "next/router";

const Portfolioprofile = () => {

  const router = useRouter();

  const [profilesdata, setprofilesdata] = useState([]);
  async function getUser() {
    try {
      const response = await axios.get(
        "http://172.105.57.17:1337/api/profiles/?populate=%2A"
      );
      setprofilesdata(response.data.data);
      console.log("response", response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
     <div className="colom">
     {/* <Profiledetail profilesdata={profilesdata}/> */}

     </div>
   
      <style global jsx>{`
        .body {
          margin: 0;
          width: 100%;
          height: 100%;
        }

        .colom {
          background: #e0e0e0;
          width: 100%;
          height: 100%;
          margin-bottom: 4rem;
        }
      `}</style>
    </>
  );
};

export default Portfolioprofile;
