import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import ss from "@/assets/indexAssets/ss.png"  
import axios from 'axios';

const SuccessStoriesCard = () => {

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
  //console.log('home',home)
useEffect(() => {
  getUser();
}, [])
  return (
    <>
      <div className="w-max bg-white shadow-md rounded-md m-5 max-md:w-full">
        <div className="max-md:">
          <Image src={ss} alt="ss" className="max-md:min-w-full " />

          <div className="flex justify-between items-center  px-5 max-md:justify-between  ">
            <div className="flex justify-between max-md:w-full max-md:m-6">
              <div className="flex flex-col items-start justify-center ">
                <p className="text-dark text-sm font-extrabold items-center justify-center max-md:text-2xl ">
                  Guna & Aadanya
                </p>
                <p className="text-[14px] text-dark max-md:text-xl">12 apr 2020</p>
              </div>
              <p className="text-white bg-main py-2 px-5 rounded-md my-4 ml-14 cursor-pointer ">
                View
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessStoriesCard