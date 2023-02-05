import React from "react";
import Portfoliodetails from "@/components/portfoliodetails/portfoliodetails";
import Topnavbar from "@/components/portfoliodetails/topnavbar";
import Portfolioheader from "@/components/portfoliodetails/portfolioheader";

const Portfolio = () => {
  return (
    <>
        <Topnavbar />
        <Portfolioheader />
        <Portfoliodetails />
    </>
  );
};

export default Portfolio;
