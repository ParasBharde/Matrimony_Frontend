import React, { useState } from "react";
import Topnav from "@/components/customerpanel/topnav";
import Footernav from "@/components/customerpanel/footernav";
import Sidenav from "@/components/customerpanel/sidenav";
import { useSession } from "next-auth/react";
import Orderhistory from "@/components/customerpanel/orderHistory";

const OrderHistory = () => {
  const { data: session, status } = useSession({
    required: true,
  });

  if(!session) {
    return <></>
  }
  return (
    <>
      <Sidenav />
      <Topnav />
      <Orderhistory />
      <Footernav />
    </>
  );
};

export default OrderHistory;
