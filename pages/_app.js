import '@/styles/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {

  const router=useRouter()

  return (
  <>
  {(router.pathname=="/"||router.pathname=="/signIn")?null:<Header/>}
  <Component {...pageProps} />
  {router.pathname=="/signIn"?null:<Footer/>}
  </>
  
  )

}
