import { useState, useEffect } from "react";
import Link from "next/link";

  
const PersonajesSingle = () => {
  //const [personajes, setPersonajes] = useState(null);

 // https://rickandmortyapi.com/api/character/3
 useEffect(() => {
  async function fetchData() {
    const res = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await res.json();
    //const { results, info } = data;
    console.log(data);
  }

  fetchData();
}, []);

  return (
    <>

     hola mundo
    </>
  );
};

export default PersonajesSingle;
