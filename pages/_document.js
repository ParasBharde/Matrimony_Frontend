import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html lang="en">
      <Head>
      {/* <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <body>
      {/* <div id="google_translate_element"></div> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
