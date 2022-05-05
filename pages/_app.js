import '../styles/globals.css'
import Navbar from './../components/navbar'
import Footer from './../components/footer'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return <>
  <SessionProvider session={pageProps.session}>
  <Navbar />
    <Component {...pageProps} />
  <Footer />
  </SessionProvider>
  </>
}

export default MyApp
