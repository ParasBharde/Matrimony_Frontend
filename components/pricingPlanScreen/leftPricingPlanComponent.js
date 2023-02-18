import React from 'react'

const LeftPricingPlanComponent = (props) => {
  console.log('props',props)
  return (
    <div className="bg-main text-white py-5 px-14 rounded-lg max-md:w-full max-md:text-center max-md:text-2xl">
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
      <p className="text-main bg-white py-2 px-10 rounded-md mx-auto cursor-pointer text-center max-w-min mt-10">
        Buy
      </p>
    </div>
  );
}

export default LeftPricingPlanComponent