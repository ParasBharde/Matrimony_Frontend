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
      <div className="w-[20%] bg-white shadow-md rounded-md mx-5 max-md:w-full max-md:py-5">
        <div className="w-[full] ">
          <Image width={420} src={ss} alt="ss" />
        </div>
        <div className="flex justify-between items-center my-5 px-10">
          <div>
            <p className="text-dark text-[16px] font-semibold">
              Guna & Aadanya
            </p>
            <p className="text-[14px] text-dark">12 apr 2020</p>

            <p className="text-white bg-main py-2 px-5 rounded-md m-5 cursor-pointer max-md:">
              View
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessStoriesCard