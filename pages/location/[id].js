  import Head from 'next/head'
  import { useState, useEffect } from 'react';
  import "@fontsource/inter";
  import Layout from '../../components/layout';
  import PersonajesSingle from '../../components/personajeSingle';
  import { useRouter } from 'next/router';
  import endPoints from '@/services/apis';



  export default function personaje({dataProps}) {

    const [residents, setInfoLocation] = useState(null);

    const [locationResidents, setLocationResidents] = useState(null);
    const router = useRouter();

    useEffect(() => {
      fetchData();
    }, [router]);
  
    useEffect(() => {
      if (residents) {
        fetchResidents(residents.residents).then((data) => 
        setLocationResidents(data)
        );
      }
    }, [residents]);
 

  // funcion llamar a la api
    const fetchData = async() => {
      const { query } = router;
      const id = query.id;
      const res = await fetch(endPoints.location.single(id));
      const data = await res.json();
      setInfoLocation(data);
    }

    const fetchResidents = async (residents) => {
      // const residentUrl = residents.residents
      const residentPromises = residents.map(async (residentUrl) => {
        const res = await fetch(residentUrl);
        const data = await res.json();
        return data;
      });
      const residentData = await Promise.all(residentPromises);
      return residentData;
    };


    const LocationResidents = ({ residents }) => {
      const id = residents.split("/").pop();
      return (
        <ul>
          <li><a href={"/personaje/"+id} >{residents} - {id}</a></li>
        </ul>
      )
    }


    return (
      <>

      <div className='w-auto max-lg:b border-b border-1 pb-10 mb-10 border-gray"'>
        <img src={residents?.image} className="w-[175px] mx-auto h-auto rounded-full mb-[8px]" />

        <h1 className='text-[24px] font-[700] color-[#111827] mb-[30px]'>{residents?.name} </h1>
        
        <div className='pb-[16px]'>
        <h2 className='text-[16px] font-[600] color-[#111827]'>Dimension </h2>
        <span className='text-[16px] font-[300] color-[#6B7280]'>{residents?.dimension}</span>
        </div>
        <div className='pb-[16px]'>
        <h2 className='text-[16px] font-[600] color-[#111827]'>Tipo </h2>
        <span className='text-[16px] font-[300] color-[#6B7280]'>{residents?.type}</span>
        </div>

      </div>
      <div className='container'>
        <h3 className='text-[20px] font-[600] color-[#111827] mb-[30px]'>Residentes en esta dimension</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

        {locationResidents && locationResidents.map((resident) => (
    <PersonajesSingle key={resident.id} data={resident} />
  ))}
  </div>
  {/* 
        {residents.residents.map((residentItem) => {

          <h4>{residentItem}</h4>
        })} */}
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