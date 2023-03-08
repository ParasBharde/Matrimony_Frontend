import React, { useState } from "react";
import Image from "next/image";
import a2 from "@/assets/signUpAssets/a2.png";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validateEmail = (email) => {
    if (!emailRegex.test(email)) {
      toast.error("Please Enter a valid email");
      return false;
    }
    return true;
  };

  const handleSendEmail = (email) => {
    var data = JSON.stringify({
      email: email,
    });

    var config = {
      method: "post",
      url: "http://172.105.57.17:1337/api/auth/forgot-password",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((response) => {
        console.log("response", response);
        toast.success("Email sent on registered email address");
      })
      .catch((error) => {
        console.error("error", error);
        toast.error("Something went wrong");
      });
  };


  // const [alert,setAlert] = useState();
  // const initialValues = {
  //   email: "",
  // };

  // const validationSchema = Yup.object({
  //   email: Yup.string().email("Insert a valid email").required("Required"),
  // });

  // const onSubmit = (values, { setSubmitting, resetForm }) => {
  //   setAlert();

  //   axios
  //     .post("http://172.105.57.17:1337/api/auth/forgot-password", values)
  //     .then((response) => {
  //       const message = `Please check your email to reset your password.`;
  //       toast.success("Please check your email to reset your password.");
  //       setAlert(["success", message]);

  //       resetForm();
  //     })
  //     .catch((error) => {
  //       if (!error.response.data.message) {
  //         setAlert(["alert", toast.error("Please Enter Valid email")]);
  //       } else {
  //         const messages = error.response.data.message[0].messages;

  //         const list = [];
  //         messages.map((message, i) => {
  //           let item = "";
  //           if (i === 0) item += `<ul>`;

  //           item += `<li>${message.id}</li>`;

  //           if (i === messages.length - 1) item += `</ul>`;
  //           list.push(item);
  //         });

  //         setAlert(["alert", list]);
  //       }
  //     })
  //     .finally(() => {
  //       setSubmitting(false);
  //     });
  // };

  return (
    <div className="flex justify-center h-[80vh]">
      <div className="xl:w-[40%] lg:w-[50%] sm:w-[60%] w-full flex flex-col justify-center items-center">
        {/* <div className="xl:w-[40%] lg:w-[50%] sm:w-[60%] w-full flex flex-col justify-center items-center "> */}
        {/* <Image src={a2} alt="a2" /> */}
        <p className="text-dark font-[600] text-[24px] mt-10 max-lg:text-white">
          Welcome Back
        </p>
        <p className="text-dark font-[500] text-[14px] opacity-50 max-lg:text-white">
          Welcome back! Please enter your email
        </p>

        {/* <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) =>
            onSubmit(values, { setSubmitting, resetForm })
          }
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <div className="">
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <Field
                  className="form-control border border-[#E1E1E1] lg:w-[400px] sm:w-[300px] w-[100%] py-2 px-8 rounded-md"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <div className="error">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <br />

              <button
                className="btn text-white bg-main py-2 px-5 rounded-md cursor-pointer  lg:w-[400px] sm:w-[300px] w-[90%] text-center my-5"
                type="submit"
                disabled={!isValid}
              >
                {!isSubmitting && "Send link"}
                {isSubmitting && "Loading..."}
              </button>
            </Form>
          )}
        </Formik> */}

        <div className="mt-7 lg:w-[400px] sm:w-[300px] w-[90%]">
          <p className="text-dark font-[500] text-[14px]">Email*</p>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Your Email"
            className="border border-[#E1E1E1] lg:w-[400px] sm:w-[300px] w-[100%] py-2 px-8 rounded-md"
          />
        </div>
        <p
          className="text-white bg-main py-2 px-5 rounded-md cursor-pointer  lg:w-[400px] sm:w-[300px] w-[90%] text-center my-5"
          onClick={() => {
            if (validateEmail(email)) {
              console.log("email validate", email);
              handleSendEmail(email);
            }
          }}
        >
          Send Email
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
