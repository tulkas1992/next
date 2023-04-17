import Head from 'next/head'
import { useState, useEffect } from 'react';
import "@fontsource/inter";
import styles from '@/styles/Home.module.css'
import Layout from '../components/layout';



export default function Home() {

  const [personajes, setPersonajes] = useState(null);
  const [value, setValue] = useState('');


const handleChange = (event) => {
 
  // setValue(event.target.value);
  let valor = event.target.value;


}



  return (
    <>
    <div className={styles.main}>
    <Layout >

    <div className='w-[70vw]'>
      <input type='text' placeholder='Filtra el personaje' value={value}  onChange={handleChange} ></input>
      <h1>Esto viene desde el inicio aca colocamos la informacion de el personaje</h1>
     </div>
    </Layout>
   
     

     </div>
    </>
  )
}



//curso https://www.youtube.com/watch?v=pFT8wD2uRSE&t=319s&ab_channel=midulive 
// min 42m