import React from "react";
import Manageuserdash from "@/components/customerpanel/manageuserdash";
import Sidenav from "@/components/customerpanel/sidenav";
import Topnav from "@/components/customerpanel/topnav";

const Manageuser = () => {
  return (
    <>
      <Sidenav />
      <Topnav />
      <Manageuserdash />
    </>
  );
};

export default Manageuser;