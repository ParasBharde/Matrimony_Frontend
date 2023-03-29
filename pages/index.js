import React, { useEffect, useState } from "react";
import Hero from "@/components/IndexScreen/hero";
import Heading from "@/components/IndexScreen/heading";
import AboutUs from "@/components/IndexScreen/aboutUs";
import SuccessStories from "@/components/IndexScreen/successStories";
import BestGiftFromYou from "@/components/IndexScreen/bestGiftFromYou";
import ContactInformation from "@/components/IndexScreen/contactInformation";
import { useRouter } from "next/router";
import axios from "axios";

const Index = ({ props }) => {
  const router = useRouter();
  const { locale } = useRouter();
  const [home, sethome] = useState([]);

  useEffect(() => {
    async function getHomeData() {
      let api = "http://172.105.57.17:1337/api/home/?populate=%2A";
      if (locale == "ta") {
        api = "http://172.105.57.17:1337/api/home/?populate=%2A&locale=ta-IN";
      } else if (locale == "en") {
        api = "http://172.105.57.17:1337/api/home/?populate=%2A";
      }
      var config = {
        method: "get",
        maxBodyLength: Infinity,
        url: api,
        headers: {
          Authorization:
            "Bearer 3ad527b6e04e45a25b5c7a57d8e796af06f0853e2fa7c4551566c2096b18b80500bdaf2fc61dace337df1dc8c2a0026075026b10589f9c9d009a72165635b72012c305bf52929b73a79c97e1e5a53e7193f812604f83fa679731fa19540e9ecd7112dc224f0cccd4624294b05ec2864b552bdf7905d65736410f0cf2774c3994",
        },
      };

      axios(config)
        .then(function (response) {
          sethome(response.data.data.attributes);
          // console.log("home data", response.data.data.attributes);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getHomeData();
  }, [locale]);

  return (
    <>
      <div className=""> 
      {/* min-w-min md:w-full */}
        <Hero homedata={home} />
        <Heading homedata={home} />
        <AboutUs homedata={home} />
        <SuccessStories homedata={home} />
        <BestGiftFromYou homedata={home} />
        <ContactInformation homedata={home} />
      </div>
    </>
  );
};

export default Index;
