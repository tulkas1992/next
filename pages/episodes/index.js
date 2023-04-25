import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import endPoints from "@/services/apis";
import Image from "next/image";
import Link from "next/link";

const episodes = () => {
  const [episode, setEpisode] = useState([]);
  const [search, setSearch] = useState("")

  const getEpisodes = async () => {
    const response = await axios.get(endPoints.episode.all);

    setEpisode(response.data.results);
    console.log(response);
  };

  useEffect(() => {
    
     getEpisodes()
     document.body.className = "hola"
    
  
  }, []);

   

  return (
    <div className=" h-auto ">
        <h3 className="text-[22px] font-semibold mb-10">Episodios</h3>

    <div className="flex flex-wrap h-auto ">
     {episode.length > 0 ? (
  episode.map((locationItem) => (
    <div key={locationItem.id} className="w-1/3 flex flex-col h-auto p-2  mb-10 ">
    <Link href={locationItem.url} className="flex items-center bg-primary hover:bg-gray-300 drop-shadow-md p-3 rounded-lg flex-grow">


      <Image src="/universe.jpg" width={100} height={100} className="rounded-full object-cover w-[60px] h-[60px] mr-3"></Image>
      <div>
      <h2 className="text-[18px] font-semibold">{locationItem.name}</h2>
      <div className="text-[14px]">Tipo: {locationItem.type}</div>
      <div className="text-[14px]">Dimensión: {locationItem.dimension}</div>
      <div className="text-[14px]">Personas: </div>
      </div>
    </Link>

    </div>
  ))
) : (
  <p>No hay personajes para mostrar.</p>
)}

    </div>
    </div>
  );
};

export default episodes;
