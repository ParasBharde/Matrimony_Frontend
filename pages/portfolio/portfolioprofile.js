import React from "react";
import Topnavbar from "@/components/portfoliodetails/topnavbar";
import Profiledetail from "@/components/portfoliodetails/profiledetail";
import Header from "@/components/header";
import { useRouter } from "next/router";

const Portfolioprofile = () => {
  const router = useRouter();
  return (
    <>
     <div className="colom">
     <Profiledetail />

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
