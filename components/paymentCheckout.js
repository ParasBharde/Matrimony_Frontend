import axios from "axios";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Breadcrumb from "./breadcrumb";
import { toast } from "react-toastify";
import { useStorage } from "@/hooks/useStorage";
import Image from "next/image";
import Pay from "@/assets/pay.png";

const PaymentCheckout = () => {
  const { query: plan } = useRouter();
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focused, setFocused] = useState("");
  const storage = useStorage();
  // console.log(storage)
  const router = useRouter();
  const [pricing, setpricing] = useState([]);
  async function getUser() {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/pricing-plan",
      headers: {
        Authorization:
          "Bearer 3ad527b6e04e45a25b5c7a57d8e796af06f0853e2fa7c4551566c2096b18b80500bdaf2fc61dace337df1dc8c2a0026075026b10589f9c9d009a72165635b72012c305bf52929b73a79c97e1e5a53e7193f812604f83fa679731fa19540e9ecd7112dc224f0cccd4624294b05ec2864b552bdf7905d65736410f0cf2774c3994",
      },
    };

    axios(config)
      .then(function (response) {
        setpricing(response.data.data.attributes);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const dateOnly = `${year}-${month}-${day}`;
  console.log(dateOnly);

  const postCardData = () => {
    let data = JSON.stringify({
      data: {
        name: name,
        card_number: cardNumber,
        secure_code: cvv,
        email: email,
        user: storage?.id,
        user_profile: storage?.user_profile?.id,
        expiry_date: expiry,
      },
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/card-detail",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        toast.success("Purchased Successfully", 1000);
        let data1 = JSON.stringify({
          data: {
            users_permissions_user: storage?.id,
            user_profile: storage?.user_profile?.id,
            start_date: dateOnly,
            end_date: dateOnly,
            status: "active",
            card_detail: response?.data?.data?.id,
          },
        });

        let config1 = {
          method: "post",
          maxBodyLength: Infinity,
          url: "http://172.105.57.17:1337/api/subscription-details",
          headers: {
            "Content-Type": "application/json",
          },
          data: data1,
        };

        axios
          .request(config1)
          .then((response) => {
            console.log(response);
            toast.success("Subscription Activated!", 1000);
            router.push("/portfolio/portfolio");
            getSubscriptionDetail();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [checkPrem, setprem] = useState();
  const getSubscriptionDetail = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://172.105.57.17:1337/api/subscription-details?populate=card_detail.user_profile.user",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log("data", response.data.data);
        response.data.data
          ?.filter(
            (u) =>
              u?.attributes?.card_detail?.data?.attributes?.user_profile?.data
                ?.id === storage?.user_profile?.id
          )
          .map((m) => {
            setprem(m.attributes.status);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(checkPrem);

  React.useEffect(() => {
    getUser();
    getSubscriptionDetail();
  }, [storage]);

  const handleCVCChange = (e) => {
    setCvv(e.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCardNumberChange = (event) => {
    const formattedNumber = formatCardNumber(event.target.value);
    setCardNumber(formattedNumber);
  };

  const handleFocusChange = (event) => {
    setFocused(event.target.name);
  };

  const handleExpiryChange = (event) => {
    const { value } = event.target;
    const formattedExpiry = value
      .replace(/\s/g, "") // Remove spaces
      .replace(/[^0-9]/g, "") // Remove non-numeric characters
      .slice(0, 4); // Limit to 4 characters (MMYY)

    if (formattedExpiry.length <= 2) {
      setExpiry(formattedExpiry);
    } else {
      const month = formattedExpiry.slice(0, 2);
      const year = formattedExpiry.slice(2, 4);

      const truncatedMonth = Math.min(12, parseInt(month, 10));
      const expiryDate = `${truncatedMonth
        .toString()
        .padStart(2, "0")}/${year}`;

      setExpiry(expiryDate);
    }
  };

  const clearData = () => {
    setCardNumber("");
    setCvv("");
    setEmail("");
    setName("");
    setExpiry("");
  };

  const validate = () => {
    if (
      (cardNumber === "" && cvv === "" && email === "" && expiry === "") ||
      name === ""
    ) {
      toast.error("Mandetory fields are Required!");
      return false;
    } else {
      postCardData();
      clearData();
    }
  };

  const formatCardNumber = (input) => {
    return input
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  return (
    <div style={{ background: "#E0E0E0" }} className="pb-5">
      <Breadcrumb screens={["Home", "Payment Checkout"]} />
      <div className="relative mx-auto w-[80%] bg-white">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Secure Checkout
                <span className="mt-2 block h-1 w-10 bg-main sm:w-20"></span>
              </h1>

              <div className="main_frm">
                <div className="frm flex flex-row p-10">
                  <form action="" className="mt-10 flex flex-col space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-gray-500"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john.capler@fang.com"
                        className={`mt-1 block w-80 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-orange-400`}
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="card-number"
                        className="text-xs font-semibold text-gray-500"
                      >
                        Card number *
                      </label>
                      <input
                        type="tel"
                        name="number"
                        onFocus={handleFocusChange}
                        id="cardNumber"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={19}
                        placeholder="1234-5678-XXXX-XXXX"
                        className={`block w-80 rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-orange-400`}
                      />
                    </div>
                    <div className="flex  items-start">
                      <div className="mr-6 block">
                        <p className="text-xs font-semibold text-gray-500">
                          Expiration date *
                        </p>
                        <input
                          type="tel"
                          name="expiry"
                          placeholder="MM/YY Expiry"
                          value={expiry}
                          onChange={handleExpiryChange}
                          onFocus={handleFocusChange}
                          className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-orange-400"
                        />
                      </div>
                      <div className="mr-6 block">
                        <p
                          htmlFor="security-code"
                          className="text-xs font-semibold text-gray-500"
                        >
                          Security code *
                        </p>
                        <input
                          id="cvv"
                          value={cvv}
                          maxLength={3}
                          placeholder="Security code"
                          type="tel"
                          name="cvc"
                          onChange={handleCVCChange}
                          onFocus={handleFocusChange}
                          className="block w-[9.5rem] rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 
                        shadow-sm outline-none transition focus:ring-2 focus:ring-orange-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="card-name"
                        className="text-xs font-semibold text-gray-500"
                      >
                        Card name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Cardholder Name"
                        value={name}
                        onChange={handleNameChange}
                        onFocus={handleFocusChange}
                        id="name"
                        className="mt-1 block w-80 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-orange-400"
                      />
                    </div>
                  </form>
                  <h1 className="qrcode relative text-2xl font-medium text-gray-700 sm:text-2xl ">
                    Or
                  </h1>
                </div>
                <div className="block">
                <Image
                  src={Pay}
                  className="qrpay h-52 w-56 object-cover "
                  alt="Picture of the author"
                />
                <address ><span className="font-bold text-red-700 ">Note:</span>If your payment is done. Kindly contact to admin.
                <br/><a className="font-medium" href="mailto:paras@scus.tech">Click Here</a></address>
              </div>
              </div>
              <p className="mt-10 text-center text-sm font-semibold text-gray-500">
                By placing this order you agree to the{" "}
                <a
                  href="#"
                  className="whitespace-nowrap text-main underline hover:text-orange-600"
                >
                  Terms and Conditions
                </a>
              </p>
              <button
                title={checkPrem === "active" ? "Plan Already Purchased!" : ""}
                type="submit"
                className={`mt-4 inline-flex w-full items-center justify-center rounded
                 bg-main py-2.5 px-4 text-base font-semibold 
                 tracking-wide text-white text-opacity-80 outline-none ring-offset-2
                  transition hover:text-opacity-100 focus:ring-2 focus:ring-orange-400
                   sm:text-lg ${
                     checkPrem === "active"
                       ? "cursor-not-allowed"
                       : "cursor-pointer"
                   }`}
                onClick={() => {
                  if (checkPrem === "active") {
                    console.log("false");
                    toast.info("Subscription Already Purchased!", 1000);

                    return false;
                  } else {
                    validate();
                    return true;
                  }
                }}
              >
                Place Order
              </button>
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <h2 className="sr-only">Order summary</h2>
            <div>
              {/* <img
                src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              /> */}
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-main to-orange-500 opacity-95"></div>
            </div>
            <div className="relative">
              <div className="mb-4">
                <p className="text-lg font-bold text-white">Selected Plan</p>
              </div>
              <p className="mb-3">
                <i className="fa-solid text-white fa-circle-check"></i>
                <span className="text-sm font-medium ml-2 text-white">
                  {plan.plan == "1"
                    ? pricing.pricing_plan1_point1
                    : pricing.pricing_plan2_point1}
                </span>
              </p>
              <p className="mb-3">
                <i className="fa-solid text-white fa-circle-check"></i>
                <span className="text-sm font-medium ml-2 text-white">
                  {plan.plan == "1"
                    ? pricing.pricing_plan1_point2
                    : pricing.pricing_plan2_point2}{" "}
                </span>
              </p>
              <p className="mb-3">
                <i className="fa-solid text-white fa-circle-check"></i>
                <span className="text-sm font-medium ml-2 text-white">
                  {plan.plan == "1"
                    ? pricing.pricing_plan1_point3
                    : pricing.pricing_plan2_point3}{" "}
                </span>
              </p>

              <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
              <div className="space-y-2">
                <p className="flex justify-between text-lg font-bold text-white">
                  <span>Total price:</span>
                  <span>
                    {plan.plan == "1"
                      ? pricing.Pricing_Plan1
                      : pricing.Pricing_Plan2}{" "}
                    /-
                  </span>
                </p>
              </div>
            </div>
            <div className="relative mt-10 text-white">
              <h3 className="mb-5 text-lg font-bold">Support</h3>
              <p className="text-sm font-semibold">
                +01 234 567 890{" "}
                <span className="font-light">(International)</span>
              </p>
              <p className="mt-1 text-sm font-semibold">
                support@matrimony.com{" "}
                <span className="font-light">(Email)</span>
              </p>
              <p className="mt-2 text-xs font-medium">
                Call us now for payment related issues
              </p>
            </div>
            <div className="relative mt-10 flex">
              <p className="flex flex-col">
                <span className="text-sm font-bold text-white">
                  Money Back Guarantee
                </span>
                <span className="text-xs font-medium text-white">
                  within 30 days of purchase
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCheckout;
