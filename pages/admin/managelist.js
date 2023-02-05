import React from "react";
import Topnav from "@/components/customerpanel/topnav";
import Footernav from "@/components/customerpanel/footernav";
import Sidenav from "@/components/customerpanel/sidenav";
import Managelistdash from "@/components/customerpanel/managelistdash";

const ManageList = () => {
  return (
    <>
      <Sidenav />
      <Topnav />
      <Footernav />
      <Managelistdash />
    </>
  );
};

export default ManageList;
