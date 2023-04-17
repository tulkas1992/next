import "../styles/globals.css";
import Head from 'next/head'
import '@fortawesome/fontawesome-free/css/all.min.css';
  


export default function App({ Component, pageProps }) {
  return <>
       <Head>
        <title>Createss Next App</title>
      
      </Head>
      <h1 className="bg-red-500 border border-red-500">Estp esta en todos lados</h1>
  <Component {...pageProps} />
  </>

}
