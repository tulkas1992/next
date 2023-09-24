import "../styles/globals.css";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "@/components/layout";
import { CharacterProvider } from '../context/CharacterContext';


export default function App({ Component, pageProps, dataProps }) {


  return (
    <>
    <CharacterProvider>
        <Layout data={dataProps}>
          <Component {...pageProps} />
        </Layout>
      </CharacterProvider>
    </>
    
  );
}

export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();
  const { results, info } = data;

  const dataProps = results.sort((a, b) => a.name.localeCompare(b.name));
  return {
    props: {
      dataProps,
    },
  };
}
