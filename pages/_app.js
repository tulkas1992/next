import "../styles/globals.css";
import Head from 'next/head'
import '@fortawesome/fontawesome-free/css/all.min.css';
  


export default function App({ Component, pageProps }) {
  return <>
       <Head>
        <title>Createss Next App</title>
      
      </Head>
  <Component {...pageProps} /> 
  </>

}
