import React, { useEffect, useRef } from "react";
import Image from "next/image";
import loc from "@/assets/SVG/location.svg";
import axios from "axios";
import { toast } from "react-toastify";
import contact_uss from "@/assets/contact_uss.svg";
const ContactUs = () => {
  const [loading, setLoading] = React.useState(false);
  const name = useRef();
  const email = useRef();
  const query = useRef();

  const Postdata = async (e) => {
    e.preventDefault();

    var data = JSON.stringify({
      data: {
        name: name.current.value,
        email: email.current.value,
        message: query.current.value,
      },
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/contacts/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toast.success("Message Sent!");
        // alert("Message Sent Successfully");
        name.current.value = "";
        email.current.value = "";
        query.current.value = "";
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Invalid Input!");
      });
  };

  return (
    <>
      <div className= "min-h-[26vh] md:min-h-[50vh] flex justify-center items-center relative">
        <Image src={contact_uss} alt="Contact us image" className="w-full"/>
        <div className="absolute">
            <h1 className="text-center pt-5  xs:text-6xl text-5xl  text-brand_color uppercase text-white font-bold">
              Contact Us
            </h1>
          </div>
      </div>
      <section className="text-gray-600 body-font relative -mb-28">
        <div className="container px-5 py-10 mx-auto flex md:mb-40 sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60541.43450475207!2d73.80660490000002!3d18.4909208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf9ec7efff6d%3A0xa6b851f01122aad2!2sD%20Mart%20-%20Karve%20Nagar!5e0!3m2!1sen!2sin!4v1675871441996!5m2!1sen!2sin"
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-normal text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <div className="flex items-center">
                  <Image
                    src={loc}
                    alt="Logo 1 Contact Us"
                    className="w-4 transform mdl:scale-75 scale-60"
                  />
                  <h1 className="w-full pl-5  cursor-pointer">
                    testing testing #01-93 testing testing
                  </h1>
                </div>
                <div className="flex items-center">
                  <Image
                    src={loc}
                    alt="Logo 2 Contact Us"
                    className="w-4 transform mdl:scale-75 scale-60"
                  />
                  <h1 className="w-full pl-5  cursor-pointer">
                    Block 441 Pasir Ris Drive 6 #01-76 testing 123456
                  </h1>
                </div>
                <div className="flex items-center">
                  <Image
                    src={loc}
                    alt="Logo 3 Contact Us"
                    className="w-4 transform mdl:scale-75 scale-60"
                  />
                  <h1 className="w-full pl-5  cursor-pointer">
                    681 Hougang Ave 8 #01-877 testing 789456
                  </h1>
                </div>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-normal text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <p className="text-yellow-500 leading-relaxed">
                  paras@scus.tech
                </p>
                <h2 className="title-font font-normal text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+91 1234567895</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Submit a Query
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Fill up the form to get a call back
            </p>
            <form>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={name}
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  // value={email.Email}
                  ref={email}
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  ref={query}
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                onClick={Postdata}
                type="submit"
                className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg"
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-yellow-600"></div>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
