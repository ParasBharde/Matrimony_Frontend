import react from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import profile from '@/assets/profile.png'
import quote from '@/assets/left-quote.png'

const AboutUs = () => {
    return (
        <>
         <Head>
        <title>About Us | Youji</title>
        <meta name="description" content="Shop for healthy and fresh kampung poultry and farm grown poultry products at your door step" />
      </Head>
      <div className=" bg-bg-about_us bg-cover bg-no-repeat min-h-[26vh] md:min-h-[50vh]">
        <div className="bg-black/60 items-center min-h-[26vh] md:min-h-[50vh] flex flex-col justify-center">
          <div >
            <h1 className="text-center pt-5  xs:text-6xl text-5xl  text-brand_color uppercase ">
              About Us
            </h1>
            <div className="flex justify-center items-center  bg-blend-darken">
              <svg
                width="98"
                height="109"
                className="transform rotate-90 xs:scale-100 scale-75"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <title>background</title>
                  <rect
                    fill="none"
                    id="canvas_background"
                    height="111"
                    width="100"
                    y="-1"
                    x="-1"
                  />
                  <g
                    display="none"
                    overflow="visible"
                    y="0"
                    x="0"
                    height="100%"
                    width="100%"
                    id="canvasGrid"
                  >
                    <rect
                      fill="url(#gridpattern)"
                      strokeWidth="0"
                      y="0"
                      x="0"
                      height="100%"
                      width="100%"
                    />
                  </g>
                </g>
                <g>
                  <title>Layer 1</title>
                  <ellipse
                    ry="6"
                    rx="6"
                    id="svg_5"
                    cy="7.953125"
                    cx="49"
                    fillOpacity="null"
                    strokeOpacity="null"
                    strokeWidth="0.001"
                    stroke="white"
                    fill="white"
                  />
                  <rect
                    id="svg_9"
                    height="105"
                    width="2"
                    y="13.953125"
                    x="48"
                    fillOpacity="null"
                    strokeOpacity="null"
                    strokeWidth="0.001"
                    stroke="white"
                    fill="white"
                  />
                </g>
              </svg>
              <h1 className="xs:mx-5 xs:text-2xl mx-2 text-lg text-white text-center">
                Who we are
              </h1>
              <svg
                width="98"
                height="109"
                className="transform -rotate-90 xs:scale-100 scale-75"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <title>background</title>
                  <rect
                    fill="none"
                    id="canvas_background"
                    height="111"
                    width="100"
                    y="-1"
                    x="-1"
                  />
                  <g
                    display="none"
                    overflow="visible"
                    y="0"
                    x="0"
                    height="100%"
                    width="100%"
                    id="canvasGrid"
                  >
                    <rect
                      fill="url(#gridpattern)"
                      strokeWidth="0"
                      y="0"
                      x="0"
                      height="100%"
                      width="100%"
                    />
                  </g>
                </g>
                <g>
                  <title>Layer 1</title>
                  <ellipse
                    ry="6"
                    rx="6"
                    id="svg_5"
                    cy="7.953125"
                    cx="49"
                    fillOpacity="null"
                    strokeOpacity="null"
                    strokeWidth="0.001"
                    stroke="white"
                    fill="white"
                  />
                  <rect
                    id="svg_9"
                    height="105"
                    width="2"
                    y="13.953125"
                    x="48"
                    fillOpacity="null"
                    strokeOpacity="null"
                    strokeWidth="0.001"
                    stroke="white"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-3  border-b border-gray-300">
        <p className="md:ml-48 ml-6">
          <span>Home</span>
          <span className="mx-5">{">"}</span>
          <span className="text-gray-600">About Us</span>
        </p>
      </div>
      <div className="grid grid-cols-1 ml-5 md:grid-cols-2 gap-y-6 gap-x-6 xl:ml-44 xl:mr-44 lg:ml-24 lg:mr-24 md:ml-4 md:mr-4 mt-8">
        <div>
          <h2 className="text-2xl mb-6  md:mt-24">
            Bringing tradition to modern age
          </h2>
          <p className="pr-5 text-lg">
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining essentially 
          unchanged. It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently with desktop 
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="md:flex md:flex-col md:justify-center mr-5">
          <div className="md:self-end md:mt-20 md:block flex flex-col justify-center items-center">
            <div className="border-8 border-gray-200 xls:h-l-img xls:w-l-img xs:h-m-img xs:w-96 w-72 h-s-img">
              <Image src={profile} width={500} height={400} className="object-cover" alt="About Us Image" />
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
          <h2 className="text-2xl mb-6 mt-2 md:mt-16 ">A Fresh Idea</h2>
          <p className="pr-5 text-lg">
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining essentially 
          unchanged. It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently with desktop 
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="mt-6 md:mt-10 mb-12 grid grid-cols-1 ml-5 md:grid-cols-2 gap-y-6 gap-x-6 xl:ml-44 xl:mr-44 lg:ml-24 lg:mr-24 md:ml-4 md:mr-4">
        <div className="md:block flex flex-col justify-center items-center mr-5">
          <div className="border-8 border-gray-200 md:mt-20 xls:h-l-img xls:w-l-img xs:h-m-img xs:w-96 w-72 h-s-img">
            <Image src={profile} width={500} height={400} className="object-cover" alt="About Us Image 2" />
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl mb-6 mt-4 md:mt-24 ">The Courage to Move Forward</h2>
          <p className="pr-5 text-lg">
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining essentially 
          unchanged. It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently with desktop 
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="flex ml-5">
        <div className="flex-auto xl:ml-44 xl:mr-44 lg:ml-24 lg:mr-24 md:ml-4 md:mr-4 ">
          <h2 className="text-2xl mb-6 md:mt-16 ">The Extra Mile</h2>
          <p className="pr-5 text-lg">
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining essentially 
          unchanged. It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently with desktop 
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining essentially 
          unchanged. It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently with desktop 
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <br></br> <br></br>
      <br></br>
      <div className="flex justify-center transform md:translate-y-7 md:-translate-x-48 -translate-x-32 translate-y-8 ">
        <div>
          <Image src={quote} alt="About Us Image 3" />
        </div>
      </div>
      <div className="flex justify-center md:mb-64 mb-32">
        <div className="md:w-96 w-72 flex bg-gray-100 justify-center align-center rounded-lg">
          <div className="p-8">
            <blockquote className="text-lg">
              {" "}
              While It takes a unique product and good
              customer service to set up a good business, it also
              takes courage to be able to keep moving forward.
            </blockquote>
          </div>
        </div>
      </div>
        </>
    );
}

export default AboutUs;