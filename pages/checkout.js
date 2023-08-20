import React, { useEffect } from "react";
import PaymentCheckout from "@/components/paymentCheckout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Checkout = () => {
 

  return (
    <div>
      <PaymentCheckout />
    </div>
  );
};

export default Checkout;
