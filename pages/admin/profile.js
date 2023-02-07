import React from "react";
import Sidenav from "@/components/customerpanel/sidenav";
import Topnav from "@/components/customerpanel/topnav";
import Customerprofile from "@/components/customerpanel/customerprofile";
import Footernav from "@/components/customerpanel/footernav"; 

const Profile = () => {
  return (
    <>
      <Sidenav />
      <Topnav />
      <Customerprofile />
      <Footernav />
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
