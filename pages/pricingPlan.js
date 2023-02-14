import React,{useState,useEffect} from 'react'
import Breadcrumb from '@/components/breadcrumb'
import LeftPricingPlanComponent from '@/components/pricingPlanScreen/leftPricingPlanComponent'
import RightPricingPlanComponent from '@/components/pricingPlanScreen/rightPricingPlanComponent'
import axios from 'axios';

const PricingPlan = () => {

  const [pricing, setpricing] = useState([]);
  async function getUser() {
    try {
      const response = await axios.get('http://172.105.57.17:1337/api/pricing-plan/?populate=%2A');
      setpricing(response.data.data.attributes);
      console.log('response', response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  console.log('pricing',pricing)
useEffect(() => {
  getUser();
}, [])
  return (
    <div className='bg-[#E0E0E0]'>
        <Breadcrumb screens={["Home","Search","Pricing Plan"]}/>
        <p className='font-[500] text-dark text-[30px] text-center mt-20 mb-3'>Choose your Pricing Plan</p>
        <p className='font-[400] text-dark text-[14px] opacity-50 text-center pb-16'>{pricing.Pricing_Label}</p>
        <div className='flex justify-center items-center gap-16 pb-20'>
            <LeftPricingPlanComponent pricing={pricing}/>
            <RightPricingPlanComponent pricing={pricing}/>
        </div>
    </div>
  )
}

export default PricingPlan