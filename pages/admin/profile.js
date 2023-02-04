import React from "react";
import Sidenav from "@/components/customerpanel/sidenav";
import Topnav from "@/components/customerpanel/topnav";
import Customerprofile from "@/components/customerpanel/customerprofile";

const Profile = () => {
  return (
    <>
      <Sidenav />
      <Topnav />
      <Customerprofile />
      <style jsx>{`
       
      `}</style>
      <style global jsx>{`
        body {
          background: #e0e0e0;
        }
      `}</style>
    </>
  );
};

export default Profile;
