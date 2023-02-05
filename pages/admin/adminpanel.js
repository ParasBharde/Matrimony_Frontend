import React from "react";
import Dashboard from "@/pages/admin/dashboard";
import Sidenav from "@/components/customerpanel/sidenav";
import Topnav from "@/components/customerpanel/topnav";
import Footernav from "@/components/customerpanel/footernav";

const Adminpanel = () => {
  return (
    <>
      {/* Side Navbar */}
      <Sidenav />

      {/* Top NavBar */}

      <Topnav />

      {/* Hedader Data */}
      <Dashboard />

      {/* Footer */}
      <Footernav />
      <style jsx>{`
        button {
          background: #f98b1d;
        }
        button:hover {
          background: #f98b1d;
          opacity: 0.7;
        }
        .user{
          color: black;
          disp
    
        }
        @media (max-width: 600px) {
          div {
            // background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: #e0e0e0;
        }
      `}</style>
    </>
  );
};
export default Adminpanel;
