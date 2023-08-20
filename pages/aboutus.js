import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import quote from "@/assets/left-quote.png";
import axios from "axios";
import about1 from "@/assets/about/about_1.svg";
import about2 from "@/assets/about/about_2.svg";
import about3 from "@/assets/about/about_3.svg";

const Aboutus = () => {
  const [about, setabout] = useState([]);

  const About = () => {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/about-page?populate=%2A",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setabout(response.data.data.attributes);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
 
  useEffect(() => {
    About();
  }, []);

  return (
    <>
  
    <Head>
        <title>About Us | Matrimony</title>
        <meta
          name="description"
          content="Shop for healthy and fresh kampung poultry and farm grown poultry products at your door step"
        />
      </Head>
      <div className=" bg-bg-about_us bg-cover bg-no-repeat min-h-[26vh] md:min-h-[50vh]">
        <div className="bg-black/60 min-h-[26vh] md:min-h-[50vh] flex justify-center items-center relative">
          <Image src={about1} alt="about us image" className="w-full"/>
          <div className="absolute">
            <h1 className="text-center pt-5  xs:text-6xl text-5xl  text-brand_color uppercase text-white font-bold">
              About Us
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 ml-5 md:grid-cols-2 gap-y-6 gap-x-6 xl:ml-44 xl:mr-44 lg:ml-24 lg:mr-24 md:ml-4 md:mr-4 mt-8">
        <div>
          <h2 className="text-2xl mb-6  md:mt-24">{about.label1} </h2>
          <p className="pr-5 text-lg">{about.label1_desc}</p>
        </div>
        <div className="md:flex md:flex-col md:justify-center mr-5">
          <div className="md:self-end md:mt-20 md:block flex flex-col justify-center items-center">
            <div className="border-8 border-gray-200 xls:h-l-img xls:w-l-img xs:h-m-img xs:w-96 w-82 h-s-img">
              <picture>
                <Image src={about2} alt="side image 1" />
              </picture>
            </div>
            <p className="italic text-center text-gray-500 mt-3">
              Founder of You Ji Poultry LLP, Ms. Sammi Tan
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex">
        <div className="flex-auto ml-5 xl:ml-44 xl:mr-44 lg:ml-24 lg:mr-24 md:ml-4 md:mr-4">
          <h2 className="text-2xl mb-6 mt-2 md:mt-16 ">{about.label2}</h2>
          <p className="pr-5 text-lg">{about.label2_desc}</p>
        </div>
      </div>
      <div className="mt-6 md:mt-10 mb-12 grid grid-cols-1 ml-5 md:grid-cols-2 gap-y-6 gap-x-6 xl:ml-44 xl:mr-44 lg:ml-24 lg:mr-24 md:ml-4 md:mr-4">
        <div className="md:block flex flex-col justify-center items-center mr-5">
          <div className="border-8 border-gray-200 md:mt-20 xls:h-l-img xls:w-l-img xs:h-m-img xs:w-96 w-82 h-s-img">
            <picture>
              <Image src={about3} alt="about image 3" />
              {/* <img
                className="img_profile_portfolio object-contain w-40 min-h-full"
                object-fit
                src={profile}
                // {`http://172.105.57.17:1337${about.founder_image2.data.attributes.url}`}
                alt=""
              /> */}
            </picture>
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl mb-6 mt-4 md:mt-24 ">{about.label3}</h2>
          <p className="pr-5 text-lg">{about.label3_desc}</p>
        </div>
      </div>
      <div className="flex ml-5">
        <div className="flex-auto xl:ml-44 xl:mr-44 lg:ml-24 lg:mr-24 md:ml-4 md:mr-4 ">
          <h2 className="text-2xl mb-6 md:mt-16 ">{about.label4}</h2>
          <p className="pr-5 text-lg">{about.label4_desc}</p>
        </div>
      </div>
      <br></br> <br></br>
      <br></br>
      <div className="flex justify-center transform md:translate-y-7 md:-translate-x-48 -translate-x-32 translate-y-8 ">
        <div>
          <Image src={quote} alt="About Us Image 3" />
        </div>
      </div>
      <div className="flex justify-center md:mb-20 mb-10">
        <div className="md:w-96 w-72 flex bg-gray-100 justify-center align-center rounded-lg">
          <div className="p-8">
            <blockquote className="text-lg">
              {" "}
              {about.aboutus_thought}
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;

