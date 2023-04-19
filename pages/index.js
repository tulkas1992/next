import Head from 'next/head'
import { useState, useEffect } from 'react';
import "@fontsource/inter";
import styles from '@/styles/Home.module.css'
import Layout from '../components/layout';
import PersonajesSingle from '../components/personajeSingle';
import { useRouter } from 'next/router';
import Nav from "../components/personajes";



const Home = ({dataProps}) => {

  const [personajes, setPersonajes] = useState(null);
 console.log("BIEN",  dataProps);

  return (
    <>
    <div className={styles.main}>
      
    <Layout data={dataProps}>

 
    <div className='w-[70vw]'>
    <div className="px-30">
      Victor Ruiz Reyes<br/>
      vr242355@gmail.com<br/>
      3153364783
      
      </div>

     </div>

    </Layout>
   
     

     </div>
    </>
  )
}
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
  
  const dataProps   = results.sort((a, b) => a.name.localeCompare(b.name));
  console.log("desde la fssssu",dataProps);
  return {
    props: {
      dataProps
    }
  }
}
export default Home;


/*

getServerSideProps-  se ejecuta en el servidor cada vez que se realiza una solicitud a la página. Esto significa que los datos se pueden actualizar en tiempo real y que se pueden realizar llamadas a la API cada vez que se carga la página. Se utiliza cuando necesitas datos actualizados en cada solicitud.

getStaticProps,- por otro lado, se ejecuta solo en tiempo de compilación, lo que significa que los datos se recuperan antes de que la página se publique en el servidor. Los datos se almacenan en caché y se reutilizan para todas las solicitudes. Es ideal para cuando los datos no cambian con frecuencia y no necesitas datos actualizados en cada solicitud.

Finalmente, getStaticPaths se utiliza en combinación con getStaticProps para generar páginas dinámicamente. Se utiliza cuando se tienen rutas dinámicas y se necesita generar una página para cada valor de la ruta dinámica. Por ejemplo, si tienes una página que muestra detalles de un producto y la URL es /products/[id], getStaticPaths se utiliza para generar una página para cada ID de producto.

En resumen, getServerSideProps se utiliza cuando necesitas datos actualizados en cada solicitud, getStaticProps se utiliza cuando los datos no cambian con frecuencia y getStaticPaths se utiliza para generar páginas dinámicamente. Es importante elegir la función correcta según las necesidades de tu aplicación.
*/