import React from "react";
import Portfoliodetails from "@/components/portfoliodetails/portfoliodetails";
import Portfolioheader from "@/components/portfoliodetails/portfolioheader";
import { useRouter } from "next/router";


const Portfolio = () => {
  const router = useRouter();
  return (
    <>
      <div className="colo" style={{backgroundColor:'#e0e0e0',marginBottom:'4rem'}}>
        <Portfolioheader />
        <Portfoliodetails />
      </div>
      <style global jsx>{`
        body {
          background: #e0e0e0;
          margin: 0;
          padding: 0;  
        }
      `}</style>
    </>
  );
};

export default Portfolio;
