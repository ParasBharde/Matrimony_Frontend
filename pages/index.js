import React from 'react'
import Hero from '@/components/IndexScreen/hero'
import Heading from '@/components/IndexScreen/heading'
import AboutUs from '@/components/IndexScreen/aboutUs'
import SuccessStories from '@/components/IndexScreen/successStories'
import BestGiftFromYou from '@/components/IndexScreen/bestGiftFromYou'
import ContactInformation from '@/components/IndexScreen/contactInformation'


const Index = () => {
  return (
    <>
       <Hero/>
       <Heading/>
       <AboutUs/>
       <SuccessStories/>
       <BestGiftFromYou/>
       <ContactInformation/>
    </>
  )
}

export default Index