import React from "react";
import Sidenav from "@/components/customerpanel/sidenav";
import Topnav from "@/components/customerpanel/topnav";
import Customerprofile from "@/components/customerpanel/customerprofile";
import Footernav from "@/components/customerpanel/footernav"; 
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession({
    required: true,
  });
  console.log("status", status);

  if(!session) {
    return <></>
  }
  return (
    <>
      <div className="data ">
        <Sidenav />
        <Topnav />
        <Customerprofile />
        <Footernav />
      </div>
      <style jsx>{``}</style>
      <style global jsx>{`
        .data {
          background: #e0e0e0;
          margin: 0;
          padding: 0;
          width:100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default Profile;
