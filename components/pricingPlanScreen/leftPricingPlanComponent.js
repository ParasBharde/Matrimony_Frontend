import React from 'react'

const LeftPricingPlanComponent = () => {
  return (
    <div className='bg-main text-white py-5 px-14 rounded-lg'>
                <p className='text-[16px] font-[400] text-center mb-5'>Free Plan</p>
                <p className='text-[30px] font-[500] text-center mb-5'>₹0</p>
                <p className='mb-3'><i class="fa-solid fa-circle-check"></i><span className='font-[400] text-[12px] ml-2'>No Renewal Charges</span></p>
                <p className='mb-3'><i class="fa-solid fa-circle-check"></i><span className='font-[400] text-[12px] ml-2'>5 Downloads can available</span></p>
                <p className='mb-3'><i class="fa-solid fa-circle-check"></i><span className='font-[400] text-[12px] ml-2'>Lorem ipsum dolor sit amet</span></p>
                <p className='text-main bg-white py-2 px-10 rounded-md mx-auto cursor-pointer text-center max-w-min mt-10'>Buy</p>
            </div>
  )
}

export default LeftPricingPlanComponent