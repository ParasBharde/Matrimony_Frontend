import React from "react";
import Portfoliodetails from "@/components/portfoliodetails/portfoliodetails";
import Topnavbar from "@/components/portfoliodetails/topnavbar";
import Portfolioheader from "@/components/portfoliodetails/portfolioheader";
import Footer from "@/components/footer";
import { useRouter } from "next/router";


const Portfolio = () => {
  const router = useRouter();
  return (
    <>
      <div className="colo" style={{backgroundColor:'#e0e0e0'}}>
        <Portfolioheader />
        <Portfoliodetails />
      </div>
    </>
  );
};

export default Portfolio;
