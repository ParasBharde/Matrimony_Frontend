import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import "@/css/allfile.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <ToastContainer />
      {router.pathname == "/" ||
      router.pathname == "/signIn" ||
      router.pathname == "/admin/adminpanel" ||
      router.pathname == "/admin/manageuser" ||
      router.pathname == "/admin/managelist" ||
      router.pathname == "/admin/profile" ||
      router.pathname == "/admin" ? null : (
        <Header />
      )}
      <Component {...pageProps} />
      {router.pathname == "/signIn" ||
      router.pathname == "/admin/adminpanel" ||
      router.pathname == "/admin/manageuser" ||
      router.pathname == "/admin/managelist" ||
      router.pathname == "/admin/profile" ||
      router.pathname == "/admin" ? null : (
        <Footer />
      )}
    </>
  );
}
