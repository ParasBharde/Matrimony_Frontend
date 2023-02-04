import '@/styles/globals.css'
import Footer from '@/components/footer'
import '@/css/allfile.scss'

export default function App({ Component, pageProps }) {
  return <><Component {...pageProps} /></>
  // return <><Component {...pageProps} /><Footer /></>

}
