import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const Welcome = () => {
  const [authState, setAuthState] = useState({
    username: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleFieldChange = (e) => {
    setAuthState((old) => ({ ...old, [e.target.id]: e.target.value }));
  };
// console.log(authState)
  const router = useRouter();

  const handleAuth = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      ...authState,
      redirect: false,
    })
      .then((response) => {
        console.log("response", response);
        if (response.ok && rememberMe) {
          localStorage.setItem("adminUser", response.ok);
          toast.success("Successfully Logged In");
          router.push("/admin");
        } else if (response.ok){
          sessionStorage.setItem("adminUser", response.ok);
          toast.success("Successfully Logged In");
          router.push("/admin");
        }
         else {
          toast.error("Invalid login credentials");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // const login = () => {
  //   var data = JSON.stringify({
  //     identifier: email,
  //     password: password,
  //   });

  //   var config = {
  //     method: "post",
  //     url: "http://172.105.57.17:1337/api/auth/local",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       // console.log(JSON.stringify(response.data));

  //       var config2 = {
  //         method: "get",
  //         maxBodyLength: Infinity,
  //         url: "http://172.105.57.17:1337/api/users/me?populate=user_profile",
  //         headers: {
  //           Authorization: "Bearer " + response.data.jwt,
  //         },
  //       };

  //       axios(config2)
  //         .then(function (response) {
  //           let isAdmin = response.data.isAdmin;
  //           if(isAdmin == true) {
  //             localStorage.setItem("adminUser", response.data);
  //             toast.success("Successfully Logged In");
  //             router.push("/admin");
  //           } else {
  //             toast.error("Invalid login credentials");
  //           }

  //         })
  //         .catch(function (error) {
  //           toast.error(error.response.data.error.message);
  //         });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       toast.error(error.response.data.error.message);
  //     });
  // };

  // var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // const validate = () => {
  //   if (!(email && password)) {
  //     toast.error("Enter All Fields");
  //     return false;
  //   }

  //   if (!emailRegex.test(email)) {
  //     toast.error("Enter Valid Email");
  //     return false;
  //   }

  //   if (password.length < 8) {
  //     toast.error("Password must contain 8 or more characters");
  //     return false;
  //   }

  //   return true;
  // };

  // const adminUser = localStorage.getItem("adminUser");
  // const adminUser = localStorage.getItem("user");
  // if(adminUser) {
  //   router.push("/admin");
  //   toast.info("Admin is already logged in");
  // }

  return (
    <>
      <div className="max-w-lg mx-auto my-28 bg-white p-8 rounded-none shadow shadow-slate-300">
        <h1 className="text-2xl font-medium">Welcome Back</h1>
        <p className="text-slate-500 my-2">
          Welcome back! Please enter your details
        </p>

        <div className="flex flex-col space-y-5">
          <div>
            <p className="font-medium text-slate-700 pb-2">Email*</p>
            <input
              id="username"
              onChange={handleFieldChange}
              value={authState.username}
              type="text"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <p className="font-medium text-slate-700 pb-2">Password*</p>
            <input
              id="password"
              onChange={handleFieldChange}
              value={authState.password}
              type="password"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter Your Password"
            />
          </div>
          {/* <div className=" flex justify-between">
            <label className="block my-0">
              <input
                type="checkbox"
                className="leading-loose"
                style={{ width: "1.5rem", height: "1rem" }}
                onChange={(e) => {
                  setRememberMe(e.target.checked);
                }}
              />
              <span
                style={{ color: "#B6B3BE", fontSize: "1.1rem" }}
                className="py-2 text-sm leading-snug"
              >
                {" "}
                Remember me{" "}
              </span>
            </label>
          </div> */}
          <p
            className="text-white bg-main py-2 px-5 rounded-md cursor-pointer  lg:w-[400px] sm:w-[300px] w-[90%] text-center my-5"
            onClick={handleAuth}
            // onClick={() => {
            //   if (validate()) {
            //     // login();
            //     handleAuth();
            //   }
            // }}
          >
            Sign in
          </p>
          {/* <button
            className="w-full py-3 font-medium text-white rounded-lg  hover:shadow inline-flex space-x-2 items-center justify-center"
            onClick={() => {
              if (validate()) {
                login();
              }
            }}
          >
            Sign in
          </button> */}
        </div>
      </div>

      <style jsx>{`
        button {
          background: #f98b1d;
        }
        button:hover {
          background: #f98b1d;
          opacity: 0.7;
        }
        @media (max-width: 600px) {
          div {
            // background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: #e0e0e0;
        }
      `}</style>
    </>
  );
};
export default Welcome;
