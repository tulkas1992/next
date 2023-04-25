import Head from "next/head";
import { useState, useEffect } from "react";
import "@fontsource/inter";
import styles from "@/styles/Home.module.css";
import PersonajesSingle from "../components/personajeSingle";
import { useRouter } from "next/router";
import Nav from "../components/personajes";
import useRickAndMortyCharacters from "@/hooks/useRickAndMortyCharacters";

const Home = ({ dataProps }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { characters, totalPages, nextPage, prevPage } =
    useRickAndMortyCharacters(currentPage);
  const [next, setNext] = useState(nextPage);

  const handleClick = (numPage) => {
    console.log(numPage);
    setCurrentPage(numPage);
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(
   
    );
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={
            currentPage === i
              ? "hover:bg-primary active bg-primary relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 cursor-pointer focus:outline-offset-0"
              : "hover:bg-primary relative inline-flex items-center px-4 py-2 text-xs font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer pointer"
          }
          onClick={() => handleClick(i)}
        >
          {i}
        </li>
      );
    }


    return pageNumbers;
  };

  return (
    <>
      <div className={styles.main}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-20 ">
         
          {characters.map((character, index) => (

            <PersonajesSingle key={index} data={character} />
          
          ))}
        </div>


        <div className="w-auto">
        <ul id="page-numbers" className="w-auto flex flex-wrap gap-2 mb-20 ">{renderPageNumbers()}</ul>

          <div className="px-30">
            Victor Ruiz Reyes
            <br />
            vr242355@gmail.com
            <br />
            3153364783
          </div>
        </div>
      </div>
    </>
  );
};
/*
export async function getServerSideProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();
  const { results, info } = data;
  
  const dataProps   = results.sort((a, b) => a.name.localeCompare(b.name));
  console.log("desde la fssssu",dataProps);
  return {
    props: {
      dataProps
    }
  }
}
*/
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
export default Home;

/*

getServerSideProps-  se ejecuta en el servidor cada vez que se realiza una solicitud a la página. Esto significa que los datos se pueden actualizar en tiempo real y que se pueden realizar llamadas a la API cada vez que se carga la página. Se utiliza cuando necesitas datos actualizados en cada solicitud.

getStaticProps,- por otro lado, se ejecuta solo en tiempo de compilación, lo que significa que los datos se recuperan antes de que la página se publique en el servidor. Los datos se almacenan en caché y se reutilizan para todas las solicitudes. Es ideal para cuando los datos no cambian con frecuencia y no necesitas datos actualizados en cada solicitud.

Finalmente, getStaticPaths se utiliza en combinación con getStaticProps para generar páginas dinámicamente. Se utiliza cuando se tienen rutas dinámicas y se necesita generar una página para cada valor de la ruta dinámica. Por ejemplo, si tienes una página que muestra detalles de un producto y la URL es /products/[id], getStaticPaths se utiliza para generar una página para cada ID de producto.

En resumen, getServerSideProps se utiliza cuando necesitas datos actualizados en cada solicitud, getStaticProps se utiliza cuando los datos no cambian con frecuencia y getStaticPaths se utiliza para generar páginas dinámicamente. Es importante elegir la función correcta según las necesidades de tu aplicación.
*/
