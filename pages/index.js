import Head from 'next/head'
import { useState, useEffect } from 'react';
import "@fontsource/inter";
import styles from '@/styles/Home.module.css'
import Layout from '../components/layout';
import PersonajesSingle from '../components/personajeSingle';
import { useRouter } from 'next/router';



export default function Home() {

  const [personajes, setPersonajes] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    const id = query.id;
    // Aquí puedes hacer lo que necesites con el ID
  console.log("id de la ruta"+id);

  }, [router]);


  return (
    <>
    <div className={styles.main}>
    <Layout >

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



//curso https://www.youtube.com/watch?v=pFT8wD2uRSE&t=319s&ab_channel=midulive 
// min 42m