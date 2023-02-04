import React from 'react'
import Breadcrumb from '@/components/breadcrumb'
import LeftPricingPlanComponent from '@/components/pricingPlanScreen/leftPricingPlanComponent'
import RightPricingPlanComponent from '@/components/pricingPlanScreen/rightPricingPlanComponent'

const PricingPlan = () => {
  return (
    <div className='bg-[#E0E0E0]'>
        <Breadcrumb screens={["Home","Search","Pricing Plan"]}/>
        <p className='font-[500] text-dark text-[30px] text-center mt-20 mb-3'>Choose your Pricing Plan</p>
        <p className='font-[400] text-dark text-[14px] opacity-50 text-center pb-16'>Lorem ipsum dolor sit amet consectetur. Nunc at in accumsan </p>
        <div className='flex justify-center items-center gap-16 pb-20'>
            <LeftPricingPlanComponent/>
            <RightPricingPlanComponent/>
        </div>
    </div>
  )
}

export default PricingPlan