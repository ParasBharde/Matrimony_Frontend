import React from 'react'
import Image from 'next/image'

import bgfy from "@/assets/indexAssets/bestGiftFromYou.png"

const BestGiftFromYou = ({homedata}) => {
  // console.log("bestgift",homedata.Best_Gift_Image);
  // console.log("bestgift",homedata.Best_Gift_Image.data.attributes.url);
  return (
    <Image width={1600} src={bgfy} alt="bgfy" className='max-md:min-w-full'/>
  )
}

export default BestGiftFromYou