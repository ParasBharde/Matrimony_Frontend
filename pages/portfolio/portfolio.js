import React from "react";
import Portfoliodetails from "@/components/portfoliodetails/portfoliodetails";
import Topnavbar from "@/components/portfoliodetails/topnavbar";
import Portfolioheader from "@/components/portfoliodetails/portfolioheader";
import Footer from "@/components/footer";
import { useRouter } from 'next/router';
import Navbar from "@/components/navbar";


const Portfolio = () => {
  const router = useRouter()
  return (
    <>
        <Topnavbar />
        {/* <Navbar /> */}
        <Portfolioheader />
        <Portfoliodetails />
        <Footer />
    </>
  );
};

export default Portfolio;
