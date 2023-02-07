import React from "react";
import Manageuserdash from "@/components/customerpanel/manageuserdash";
import Sidenav from "@/components/customerpanel/sidenav";
import Topnav from "@/components/customerpanel/topnav";
import Footernav from "@/components/customerpanel/footernav";

const Manageuser = () => {
  return (
    <>
      <Sidenav />
      <Topnav />
      <Manageuserdash />
      <Footernav />
    </>
  );
};

export default Manageuser;