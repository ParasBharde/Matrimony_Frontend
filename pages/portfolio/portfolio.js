import React from "react";
import Portfoliodetails from "@/components/portfoliodetails/portfoliodetails";
import Topnavbar from "@/components/portfoliodetails/topnavbar";
import Portfolioheader from "@/components/portfoliodetails/portfolioheader";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";

const Portfolio = () => {
  const router = useRouter();
  return (
    <>
      <div className="colo">
        <Portfolioheader />
        <Portfoliodetails />
      </div>
      <style global jsx>{`
    
        .body{
          margin: 0;
          width: 100%;
          height: 100%;
        }
     
        .colo {
          background: #e0e0e0;
          width: 100%;
          height: 100%;
          margin-bottom: 4rem;
        }
      `}</style>
    </>
  );
};

export default Portfolio;
