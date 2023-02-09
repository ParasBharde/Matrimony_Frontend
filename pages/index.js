import React from 'react'
import Hero from '@/components/IndexScreen/hero'
import Heading from '@/components/IndexScreen/heading'
import AboutUs from '@/components/IndexScreen/aboutUs'
import SuccessStories from '@/components/IndexScreen/successStories'
import BestGiftFromYou from '@/components/IndexScreen/bestGiftFromYou'
import ContactInformation from '@/components/IndexScreen/contactInformation'
import { useRouter } from "next/router";
import Footer from '@/components/footer'

const Index = () => {
  const router = useRouter();
  return (
    <>
       <Hero/>
       <Heading/>
       <AboutUs />
       <SuccessStories/>
       <BestGiftFromYou/>
       <ContactInformation/>
    </>
  )
}

export default Index