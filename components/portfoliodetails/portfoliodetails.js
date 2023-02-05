import React from "react";
import profile from "@/assets/profile.png";
import Image from "next/image";

const Portfoliodetails = () => {
  return (
    <>
      <div class="container_card container my-12 mx-auto px-4 md:px-10">
        <div class="flex flex-wrap -mx-1 lg:-mx-2 w-10/12 ">
          <div class="cards my-1 bg-white px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden  ">
              <a href="#">
                <Image
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={profile}
                />
              </a>

              <header class="coloumn items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    V. Megha Akash
                  </a>
                </h1>
                <p
                  style={{ color: "rgba(30, 30, 30, 0.5)" }}
                  class="text-grey-darker text-sm"
                >
                  B.sc, M.sc - Software Engineer HCL Tech...
                </p>
              </header>

              <footer class="card flex items-center justify-evenly leading-none p-4 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
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
                </a>
                <p style={{ color: "rgba(30, 30, 30, 0.5)" }}> Hastham</p>
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
                <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Unmarried</p>

                {/* <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a> */}
              </footer>
            </article>
          </div>

          <div class="cards my-1 bg-white px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden  ">
              <a href="#">
                <Image
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={profile}
                />
              </a>

              <header class="coloumn items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    V. Megha Akash
                  </a>
                </h1>
                <p
                  style={{ color: "rgba(30, 30, 30, 0.5)" }}
                  class="text-grey-darker text-sm"
                >
                  B.sc, M.sc - Software Engineer HCL Tech...
                </p>
              </header>

              <footer class="card flex items-center justify-evenly leading-none p-4 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
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
                </a>
                <p style={{ color: "rgba(30, 30, 30, 0.5)" }}> Hastham</p>
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
                <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Unmarried</p>

                {/* <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a> */}
              </footer>
            </article>
          </div>

          <div class="cards my-1 bg-white px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden  ">
              <a href="#">
                <Image
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={profile}
                />
              </a>

              <header class="coloumn items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    V. Megha Akash
                  </a>
                </h1>
                <p
                  style={{ color: "rgba(30, 30, 30, 0.5)" }}
                  class="text-grey-darker text-sm"
                >
                  B.sc, M.sc - Software Engineer HCL Tech...
                </p>
              </header>

              <footer class="card flex items-center justify-evenly leading-none p-4 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
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
                </a>
                <p style={{ color: "rgba(30, 30, 30, 0.5)" }}> Hastham</p>
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
                <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Unmarried</p>

                {/* <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a> */}
              </footer>
            </article>
          </div>

          <div class="cards my-1 bg-white px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden  ">
              <a href="#">
                <Image
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={profile}
                />
              </a>

              <header class="coloumn items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    V. Megha Akash
                  </a>
                </h1>
                <p
                  style={{ color: "rgba(30, 30, 30, 0.5)" }}
                  class="text-grey-darker text-sm"
                >
                  B.sc, M.sc - Software Engineer HCL Tech...
                </p>
              </header>

              <footer class="card flex items-center justify-evenly leading-none p-4 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
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
                </a>
                <p style={{ color: "rgba(30, 30, 30, 0.5)" }}> Hastham</p>
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
                <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Unmarried</p>

                {/* <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a> */}
              </footer>
            </article>
          </div>

          <div class="cards my-1 bg-white px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden  ">
              <a href="#">
                <Image
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={profile}
                />
              </a>

              <header class="coloumn items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    V. Megha Akash
                  </a>
                </h1>
                <p
                  style={{ color: "rgba(30, 30, 30, 0.5)" }}
                  class="text-grey-darker text-sm"
                >
                  B.sc, M.sc - Software Engineer HCL Tech...
                </p>
              </header>

              <footer class="card flex items-center justify-evenly leading-none p-4 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
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
                </a>
                <p style={{ color: "rgba(30, 30, 30, 0.5)" }}> Hastham</p>
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
                <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Unmarried</p>

                {/* <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a> */}
              </footer>
            </article>
          </div>

          <div class="cards my-1 bg-white px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden  ">
              <a href="#">
                <Image
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src={profile}
                />
              </a>

              <header class="coloumn items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    V. Megha Akash
                  </a>
                </h1>
                <p
                  style={{ color: "rgba(30, 30, 30, 0.5)" }}
                  class="text-grey-darker text-sm"
                >
                  B.sc, M.sc - Software Engineer HCL Tech...
                </p>
              </header>

              <footer class="card flex items-center justify-evenly leading-none p-4 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
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
                </a>
                <p style={{ color: "rgba(30, 30, 30, 0.5)" }}> Hastham</p>
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
                <p style={{ color: "rgba(30, 30, 30, 0.5)" }}>Unmarried</p>

                {/* <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a> */}
              </footer>
            </article>
          </div>

        

      
        </div>
      </div>
      
      <style global jsx>{`
       body {
          background: #e0e0e0;
        }
      `}</style>
    </>
  );
};

export default Portfoliodetails;
