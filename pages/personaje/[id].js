import Head from 'next/head'
import { useState, useEffect } from 'react';
import "@fontsource/inter";
import Layout from '../../components/layout';
import PersonajesSingle from '../../components/personajeSingle';
import { useRouter } from 'next/router';



export default function personaje({dataProps}) {

  const [infoPersonajes, setInfoPersonajes] = useState(null);
  const [id , setId] = useState(null)
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const { query } = router;
      const id = query.id;
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      setInfoPersonajes(data);
      setId(id);
    }

    if (router.query.id) {
      fetchData();
    }
  }, [router]);

  return (
    <>
    <div>
    <Layout data={dataProps}>

    <div className='w-[70vw]'>
      <img src={infoPersonajes?.image} className="w-[75px] h-[75px] rounded-full mb-[8px  ]" />

      <h1 className='text-[24px] font-[700] color-[#111827] mb-[30px]'>{infoPersonajes?.name} </h1>
      <div className='pb-[16px]'>
      <h2 className='text-[16px] font-[600] color-[#111827]'>Specie </h2>
      <span className='text-[16px] font-[300] color-[#6B7280]'>{infoPersonajes?.species}</span>
      </div>
      <div className='pb-[16px]'>
       <h2 className='text-[16px] font-[600] color-[#111827]'>Status </h2>
      <span className='text-[16px] font-[300] color-[#6B7280]'>{infoPersonajes?.status}</span>
      </div>
      <div className='pb-[16px]'>
       <h2 className='text-[16px] font-[600] color-[#111827]'>Origin </h2>
      <span className='text-[16px] font-[300] color-[#6B7280]'>{infoPersonajes?.origin.name}</span>
      </div>

     </div>

    </Layout>
   
     

     </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();
  const { results, info } = data;

  const { query } = context;
  //Recibir un parametro desde get llamado "q" del lado del servidor
  const { q = "" , link = ""} = query;
  console.log("sds" +  q+ link);

  
  const dataProps   = results.sort((a, b) => a.name.localeCompare(b.name));
  return {
    props: {
      dataProps
    }
  }
}



//curso https://www.youtube.com/watch?v=pFT8wD2uRSE&t=319s&ab_channel=midulive 
// min 42m