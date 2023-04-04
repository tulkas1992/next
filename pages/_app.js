import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
       <Head>
        <title>Createss Next App</title>
      
      </Head>
  <Component {...pageProps} />
  </>

}
