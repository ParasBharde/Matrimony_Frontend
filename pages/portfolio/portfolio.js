import React from "react";
import Portfoliodetails from "@/components/portfoliodetails/portfoliodetails";
import Portfolioheader from "@/components/portfoliodetails/portfolioheader";
import { useRouter } from "next/router";


const Portfolio = () => {
  const router = useRouter();
  return (
    <>
      <div className="colo" style={{}}>
        <Portfolioheader />
        <Portfoliodetails />
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
