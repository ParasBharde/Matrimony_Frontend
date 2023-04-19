import React,{useState,useEffect} from 'react'
import Breadcrumb from '@/components/breadcrumb'
import LeftPricingPlanComponent from '@/components/pricingPlanScreen/leftPricingPlanComponent'
import RightPricingPlanComponent from '@/components/pricingPlanScreen/rightPricingPlanComponent'
import axios from 'axios';

const PricingPlan = () => {

  const [pricing, setpricing] = useState([]);
  async function getUser() {

    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://172.105.57.17:1337/api/pricing-plan',
      headers: { 
        'Authorization': 'Bearer 3ad527b6e04e45a25b5c7a57d8e796af06f0853e2fa7c4551566c2096b18b80500bdaf2fc61dace337df1dc8c2a0026075026b10589f9c9d009a72165635b72012c305bf52929b73a79c97e1e5a53e7193f812604f83fa679731fa19540e9ecd7112dc224f0cccd4624294b05ec2864b552bdf7905d65736410f0cf2774c3994'
      }
    };
    
    axios(config)
    .then(function (response) {
      setpricing(response.data.data.attributes)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  
useEffect(() => {
  getUser();
}, [])
  return (
    <div className="bg-white  max-md:p-7 max-md:h-[100%] h-[100vh]">
      {/* bg-[#E0E0E0] max-md:bg-[#E0E0E0]  */}
      <div className="max-md:hidden max-md:bg-white ">
      {/* max-md:bg-[#E0E0E0] */}
        <Breadcrumb screens={["Home", "Search", "Pricing Plan"]} />
      </div>
      <p className="font-[500] text-dark text-[30px] text-center mb-3 max-md:pt-5">
        Choose your Pricing Plan
      </p>
      <p className="font-[400] text-dark text-[14px] opacity-50 text-center pb-16 max-md:text-xl">
        {pricing.Pricing_Label}
      </p>
      <div className="flex justify-center items-center gap-16 pb-20 max-md:flex-col max-md:w-full max-md:bg-white ">
      {/* max-md:bg-[#E0E0E0] */}
        <LeftPricingPlanComponent pricing={pricing} />
        <RightPricingPlanComponent pricing={pricing} />
      </div>
    </div>
  );
}

export default PricingPlan