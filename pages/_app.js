import "../styles/globals.css";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "@/components/layout";
import ThemeContext from "@/context/ThemeContext";


export default function App({ Component, pageProps, dataProps }) {

const valoresContext = {
  color: "text-white",
  bg: "bg-black"
}
  
  return (
    <>
      <ThemeContext.Provider value={valoresContext}>
        <Layout data={dataProps}>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();
  const { results, info } = data;

  const dataProps = results.sort((a, b) => a.name.localeCompare(b.name));
  console.log("desde la fssssu", dataProps);
  return {
    props: {
      dataProps,
    },
  };
}
