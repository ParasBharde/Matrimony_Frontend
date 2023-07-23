import React, { useState } from "react";
import Topnav from "@/components/customerpanel/topnav";
import Footernav from "@/components/customerpanel/footernav";
import Sidenav from "@/components/customerpanel/sidenav";
import Managelistdash from "@/components/customerpanel/managelistdash";
import { useSession } from "next-auth/react";

const ManageList = () => {
  const { data: session, status } = useSession({
    required: true,
  });
  console.log("status", session);

  if(!session) {
    return <></>
  }
  return (
    <>
      <Sidenav />
      <Topnav />
      <Managelistdash />
      <Footernav />
    </>
  );
};

export default ManageList;
