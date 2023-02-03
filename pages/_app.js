import '@/styles/globals.css'
import Footer from '@/components/footer'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {

  const router=useRouter()

  return (
  <>
  <Component {...pageProps} />
  {router.pathname=="/signIn"?null:<Footer/>}
  </>
  
  )

}
