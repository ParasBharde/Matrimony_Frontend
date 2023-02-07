import React from "react";
import Topnavbar from "@/components/portfoliodetails/topnavbar";
import Profiledetail from "@/components/portfoliodetails/profiledetail";
import Footer from "@/components/footer";
import { useRouter } from 'next/router';

const Portfolioprofile = () => {
    const router = useRouter()
    return (
        <>
         <Topnavbar />
          <Profiledetail />
          <Footer />
        </>
      );
}

export default Portfolioprofile;