import React from "react";
import Dashboard from "@/components/customerpanel/dashboard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Adminpanel = () => {
  const { data: session, status } = useSession({
    required: true,
  });


  if(!session) {
    return <></>
  }

  return (
    <>
      <Dashboard />
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
        // body {
        //   background: #e0e0e0;
        // }
      `}</style>
    </>
  );
};
export default Adminpanel;
