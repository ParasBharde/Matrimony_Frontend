import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import "@/css/allfile.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";


const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  const router = useRouter();
  return (
    <>
     
      <ToastContainer />
      {router.pathname == "/" ||
      router.pathname == "/signIn" ||
      router.pathname == "/admin/adminpanel" ||
      router.pathname == "/admin/manageuser" ||
      router.pathname == "/admin/managelist" ||
      router.pathname == "/admin/orderHistory" ||
      router.pathname == "/admin/profile" ||
      router.pathname == "/admin" ? null : (
        <Header />
      )}
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="lazyOnload" />
      </SessionProvider>
      {router.pathname == "/signIn" ||
      router.pathname == "/admin/adminpanel" ||
      router.pathname == "/admin/manageuser" ||
      router.pathname == "/admin/managelist" ||
      router.pathname == "/admin/orderHistory" ||
      router.pathname == "/admin/profile" ||
      router.pathname == "/admin" || 
      router.pathname == "/admin/welcome" ||
      router.pathname == "/changePassword" ? null : (
        <Footer />
      )}
    </>
  );
};

export default App;
