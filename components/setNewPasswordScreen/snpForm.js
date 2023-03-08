import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SnpForm = () => {
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  let queryCode = router.query.code;
  console.log("code", queryCode);
  useEffect(() => {
    setCode(queryCode);
  }, [queryCode]);

  const resetPassword = (pass, confirmPass, code) => {
    var values = JSON.stringify({
      password: pass,
      passwordConfirmation: confirmPass,
      code: code,
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/auth/reset-password",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    axios(config)
      .then((response) => {
        console.log("reset password", response);
        router.push('/signIn')
      })
      .catch((error) => {
        console.error("reset password error: ", error);
      });
  };

  const validate = () => {
    if (pass.length < 8) {
      toast.error("Password must contain 8 or more characters");
      return false;
    }

    if (pass != confirmPass) {
      toast.error("Password is not equal to Confirm Password");
      return false;
    }
    console.log(pass, confirmPass);
    resetPassword(pass, confirmPass, code);
  };


  // const [alert, setAlert] = useState();
  // const [code, setCode] = useState("");

  // const router = useRouter();
  
  // let queryCode = router.query.code;
  // console.log("code", queryCode);
  // useEffect(() => {
  //   setCode(queryCode);
  // }, [queryCode]);

  // const initialValues = {
  //   password: "",
  //   passwordConfirmation: "",
  // };

  // const validationSchema = Yup.object({
  //   password: Yup.string().required("Required"),
  //   passwordConfirmation: Yup.string()
  //     .oneOf([Yup.ref("password"), null], "Passwords must match")
  //     .required("Required"),
  // });
  // const onSubmit = (values, { setSubmitting, resetForm }) => {
  //   setAlert();

  //   const qsearch = location.search;
  //   const code = new URLSearchParams(qsearch).get("code");
  //   console.log("code", code);
  //   values.code = code;

  //   axios
  //     .post("http://172.105.57.17:1337/api/auth/reset-password", values)
  //     .then((response) => {
  //       const message = `Your password has been resetted. In a few second you'll be redirected to login page.`;
  //       setAlert(["success", message]);
  //       toast.success(
  //         "Your password has been resetted. In a few second you'll be redirected to login page."
  //       );

  //       resetForm();

  //       setTimeout(() => {
  //         router.push("/signIn");
  //       }, 5000);
  //     })
  //     .catch((error) => {
  //       if (!error.response.data.message) {
  //         setAlert(["alert", "Something went wrong"]);
  //       } else {
  //         const messages = error.response.data.message[0].messages;
  //         toast.error("error.response.data.message[0].messages");
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
    <>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) =>
          onSubmit(values, { setSubmitting, resetForm })
        }
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <div>
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <Field
                className="form-control border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 max-md:w-[22rem]"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <div className="error">
                <ErrorMessage name="password" />
              </div>
            </div>

            <br />

            <div>
              <div>
                <label htmlFor="passwordConfirmation">Repeat Password</label>
              </div>
              <Field
                className="form-control border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 max-md:w-[22rem]"
                type="password"
                id="passwordConfirmation"
                name="passwordConfirmation"
                placeholder="Repeat password"
              />
              <div className="error">
                <ErrorMessage name="passwordConfirmation" />
              </div>
            </div>

            <br />

            <button
              className="btn text-white bg-main py-2 px-5 rounded-md cursor-pointer mt-5  w-[400px] text-center mx-auto max-md:w-[22rem]"
              type="submit"
              disabled={!isValid}
            >
              {!isSubmitting && "Reset password"}
              {isSubmitting && "Loading..."}
            </button>
          </Form>
        )}
      </Formik> */}


      <div className="mt-10 max-w-min mx-auto  ">
        <p className="text-dark font-[500] text-[14px] mb-2">Password</p>
        <input
          placeholder="Enter New Password"
          type={"password"}
          className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 max-md:w-[22rem]"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <p className="font-[400] text-[14px] opacity-50">
          Must be at least 8 characters
        </p>
      </div>
      <div className="mt-5 max-w-min mx-auto">
        <p className="text-dark font-[500] text-[14px] mb-2">
          Confirm Password
        </p>
        <input
          placeholder="Confirm Password"
          type={"password"}
          className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 max-md:w-[22rem]"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
      </div>
      <p onClick={validate} className="text-white bg-main py-2 px-5 rounded-md cursor-pointer mt-5  w-[400px] text-center mx-auto max-md:w-[22rem]">
        Reset Password
      </p>
    </>
  );
};

export default SnpForm;
