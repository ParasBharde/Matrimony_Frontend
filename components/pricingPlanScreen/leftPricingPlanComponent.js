import { useRouter } from "next/router";
import React, { useEffect } from "react";

const LeftPricingPlanComponent = (props) => {
  const router = useRouter();
  useEffect(()=>{

  },[])
  return (
    <div className="bg-main text-white py-5 px-14 rounded-lg max-md:w-full max-md:text-center max-md:text-2xl max-md:p-5 shadow-2xl">
      <p className="text-[16px] font-[400] text-center mb-5">Free Plan</p>
      <p className="text-[30px] font-[500] text-center mb-5">
        ₹{props.pricing.Pricing_Plan1}
      </p>
      <p className="mb-3">
        <i className="fa-solid fa-circle-check"></i>
        <span className="font-[400] text-[12px] ml-2">
          {props.pricing.pricing_plan1_point1}
        </span>
      </p>
      <p className="mb-3">
        <i className="fa-solid fa-circle-check"></i>
        <span className="font-[400] text-[12px] ml-2">
          {props.pricing.pricing_plan1_point2}
        </span>
      </p>
      <p className="mb-3">
        <i className="fa-solid fa-circle-check"></i>
        <span className="font-[400] text-[12px] ml-2">
          {props.pricing.pricing_plan1_point3}
        </span>
      </p>
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            router.push(
              {
                pathname: "/checkout",
                query: { plan: 1 },
              },
              "/checkout"
            );
          }}
          className="text-main bg-white py-2 px-10 rounded-md mx-auto cursor-pointer text-center mt-10"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default LeftPricingPlanComponent;
