import React,{useEffect,useState} from 'react'
import Hero from '@/components/IndexScreen/hero'
import Heading from '@/components/IndexScreen/heading'
import AboutUs from '@/components/IndexScreen/aboutUs'
import SuccessStories from '@/components/IndexScreen/successStories'
import BestGiftFromYou from '@/components/IndexScreen/bestGiftFromYou'
import ContactInformation from '@/components/IndexScreen/contactInformation'
import { useRouter } from "next/router";
import axios from 'axios';

const Index = ({props}) => {
  const router = useRouter();
  const [home, sethome] = useState([]);
  async function getUser() {
    try {
      const response = await axios.get('http://172.105.57.17:1337/api/home/?populate=%2A');
      sethome(response.data.data.attributes);
      console.log('response', response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  console.log('home',home)
useEffect(() => {
  getUser();
}, [])

  return (
    <>
       <Hero homedata={home}/>
       <Heading homedata={home}/>
       <AboutUs homedata={home}/>
       <SuccessStories homedata={home}/>
       <BestGiftFromYou homedata={home}/>
       <ContactInformation homedata={home}/>
    </>
  )
}

export default Index