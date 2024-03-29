import { useRouter } from "next/router";
import React,{useEffect} from "react";
import { useStorage } from "@/hooks/useStorage";

const RightPricingPlanComponent = (props) => {
  const router = useRouter();
  const storage = useStorage();

  return (
    <div className="bg-white py-5 px-14 rounded-lg max-md:w-full max-md:text-center max-md:text-2xl shadow-2xl">
      <p className="text-[16px] font-[400] text-center mb-5">Gold Plan</p>
      <p className="text-[30px] font-[500] text-center mb-5">
        ₹{props.pricing.Pricing_Plan2}
      </p>
      <p className="mb-3">
        <i className="fa-solid text-main fa-circle-check"></i>
        <span className="font-[400] text-[12px] ml-2">
          {props.pricing.pricing_plan2_point1}
        </span>
      </p>
      <p className="mb-3">
        <i className="fa-solid text-main fa-circle-check"></i>
        <span className="font-[400] text-[12px] ml-2">
          {props.pricing.pricing_plan2_point2}{" "}
        </span>
      </p>
      <p className="mb-3">
        <i className="fa-solid text-main fa-circle-check"></i>
        <span className="font-[400] text-[12px] ml-2">
          {props.pricing.pricing_plan2_point3}
        </span>
      </p>
      <div className="flex justify-center items-center">
        <button
        onClick={() => {
          if (storage) {
            router.push({
              pathname: '/checkout',
              query: {plan: 2}
            }, '/checkout');
          } else {
            router.push('/signIn')
          }
     
        }}
         className="bg-main text-white py-2 px-10 rounded-md mx-auto cursor-pointer text-center mt-10">
          Buy
        </button>
      </div>
    </div>
  );
};

export default RightPricingPlanComponent;
