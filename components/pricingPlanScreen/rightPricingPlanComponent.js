import React from 'react'

const RightPricingPlanComponent = () => {
  return (
    <div className='bg-white py-5 px-14 rounded-lg'>
                <p className='text-[16px] font-[400] text-center mb-5'>Member Plan</p>
                <p className='text-[30px] font-[500] text-center mb-5'>₹1000/year</p>
                <p className='mb-3'><i class="fa-solid text-main fa-circle-check"></i><span className='font-[400] text-[12px] ml-2'>Renewal Charges - Rs.500 /year</span></p>
                <p className='mb-3'><i class="fa-solid text-main fa-circle-check"></i><span className='font-[400] text-[12px] ml-2'>50 Downloads can available </span></p>
                <p className='mb-3'><i class="fa-solid text-main fa-circle-check"></i><span className='font-[400] text-[12px] ml-2'>Lorem ipsum dolor sit amet</span></p>
                <p className='text-white bg-main py-2 px-10 rounded-md mx-auto cursor-pointer text-center max-w-min mt-10'>Buy</p>
            </div>
  )
}

export default RightPricingPlanComponent