import React, { useState, useEffect } from "react";
import profile from "@/assets/profile.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
// import * as Heart  from "react-heart";


const Portfoliodetails = ({ id }) => {
  const router = useRouter();

  const [profiles, setprofiles] = useState([]);
  const [active, setActive] = useState(false);

  async function getUser() {
    const { slug } = router.query;
    try {
      const response = await axios.get(
        `http://172.105.57.17:1337/api/profiles/?populate=%2A&slug=${slug}}`
      );
      setprofiles(response.data.data);
      console.log("response", response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [id]);

  return (
    <>
      <div class="container_card grid lg:grid-cols-4">
        {profiles.length > 0 &&
          profiles.map((itms) => {
            console.log("itmssss", itms);
            return (
              <>
                <div class="max-w-xs mx-9 mb-2">
                  <div className="cards">
                    <div
                      onClick={() => {
                        router.push({
                          pathname: "/profiledetail/[id]/",
                          query: { id: itms.id },
                        });





                      }}
                      className="relative"
                    >
                      <picture >
                          <img className="img_card block h-auto w-60" src={`http://172.105.57.17:1337${itms.attributes.profile_photo.data[0].attributes.url}`} alt="" />
                      </picture>

                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          width: "30",
                          height: "25",
                          top: "10",
                          right: "10",
                        }}
                        className="absolute top-0 right-0 m-2 rounded flex items-center justify-center w-10 h-11 text-white text-sm font-bold"
                      >
                        <svg
                          className="absolute rounded"
                          width="24"
                          height="21"
                          viewBox="0 0 24 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.8401 2.61085C20.3294 2.09985 19.7229 1.6945 19.0555 1.41793C18.388 1.14137 17.6726 0.999023 16.9501 0.999023C16.2276 0.999023 15.5122 1.14137 14.8448 1.41793C14.1773 1.6945 13.5709 2.09985 13.0601 2.61085L12.0001 3.67085L10.9401 2.61085C9.90843 1.57916 8.50915 0.999558 7.05012 0.999558C5.59109 0.999558 4.19181 1.57916 3.16012 2.61085C2.12843 3.64254 1.54883 5.04182 1.54883 6.50085C1.54883 7.95988 2.12843 9.35916 3.16012 10.3908L4.22012 11.4508L12.0001 19.2308L19.7801 11.4508L20.8401 10.3908C21.3511 9.88009 21.7565 9.27366 22.033 8.6062C22.3096 7.93875 22.4519 7.22334 22.4519 6.50085C22.4519 5.77836 22.3096 5.06295 22.033 4.39549C21.7565 3.72803 21.3511 3.12161 20.8401 2.61085V2.61085Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

{/* <Heart 
                        style={{color: "white",}}
                        animationScale = '1.2'
                        animationTrigger = "both" 
                        animationDuration = '.2'
                       
                        onClick={() => setActive(!active)}
                        /> */}
                     
                      </div>
                    </div>
                    <header class="coloumn items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                        <span
                          class="no-underline hover:underline text-black"
                          href="#"
                        >
                          {itms.attributes.first_name}{" "}
                          {itms.attributes.last_name}
                        </span>
                      </h1>
                      <p
                        style={{ color: "rgba(30, 30, 30, 0.5)" }}
                        class="text-grey-darker text-sm"
                      >
                        {itms.attributes.educational_qualification}
                      </p>
                    </header>
                    <footer class="card flex items-center justify-evenly leading-none p-4 md:p-4">
                      <p class="ml-2 text-sm">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 4.3475L8.7275 6.065L9.08 6.8975L9.98 6.9725L11.8325 7.13L10.4225 8.3525L9.74 8.945L9.9425 9.83L10.3625 11.6375L8.7725 10.6775L8 10.1975L7.2275 10.6625L5.6375 11.6225L6.0575 9.815L6.26 8.93L5.5775 8.3375L4.1675 7.115L6.02 6.9575L6.92 6.8825L7.2725 6.05L8 4.3475ZM8 0.5L5.8925 5.4725L0.5 5.93L4.595 9.4775L3.365 14.75L8 11.9525L12.635 14.75L11.405 9.4775L15.5 5.93L10.1075 5.4725L8 0.5Z"
                            fill="#F98B1D"
                          />
                        </svg>
                      </p>

                      <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                        {" "}
                        {itms.attributes.star}
                      </p>
                      <svg
                        width="2"
                        height="23"
                        viewBox="0 0 2 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 0V23" stroke="#F98B1D" />
                      </svg>
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.25 2H11.5V0.5H10V2H4V0.5H2.5V2H1.75C0.9175 2 0.2575 2.675 0.2575 3.5L0.25 14C0.25 14.825 0.9175 15.5 1.75 15.5H12.25C13.075 15.5 13.75 14.825 13.75 14V3.5C13.75 2.675 13.075 2 12.25 2ZM12.25 14H1.75V6.5H12.25V14ZM12.25 5H1.75V3.5H12.25V5ZM7 8.75H10.75V12.5H7V8.75Z"
                          fill="#F98B1D"
                        />
                      </svg>
                      <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>20 Years</p>
                      <svg
                        width="2"
                        height="23"
                        viewBox="0 0 2 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 0V23" stroke="#F98B1D" />
                      </svg>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 1.425C6.87 1.425 7.575 2.13 7.575 3C7.575 3.87 6.87 4.575 6 4.575C5.13 4.575 4.425 3.87 4.425 3C4.425 2.13 5.13 1.425 6 1.425ZM6 8.175C8.2275 8.175 10.575 9.27 10.575 9.75V10.575H1.425V9.75C1.425 9.27 3.7725 8.175 6 8.175ZM6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM6 6.75C3.9975 6.75 0 7.755 0 9.75V12H12V9.75C12 7.755 8.0025 6.75 6 6.75Z"
                          fill="#F98B1D"
                        />
                      </svg>
                      <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>
                        {" "}
                        {itms.attributes.marriage_status}
                      </p>
                    </footer>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Portfoliodetails;

