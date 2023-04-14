import React from "react";
import Manageuserdash from "@/components/customerpanel/manageuserdash";
import Sidenav from "@/components/customerpanel/sidenav";
import Topnav from "@/components/customerpanel/topnav";
import Footernav from "@/components/customerpanel/footernav";
import { useSession } from "next-auth/react";

const Manageuser = () => {
  const { data: session, status } = useSession({
    required: true,
  });
  console.log("status", status);

  if(!session) {
    return <></>
  }
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