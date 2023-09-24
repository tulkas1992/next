import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import endPoints from "@/services/apis";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/tailwind.config";

const episodes = () => {
  const [episode, setEpisode] = useState([]);
  const [search, setSearch] = useState("")
  const [numEpisode , setNumEpisode] = useState("");

  const getEpisodes = async () => {
    const response = await axios.get(endPoints.episode.all);

    setEpisode(response.data.results);
    setNumEpisode(response.data.info.count)
    console.log(response);
  };

  useEffect(() => {
    
     getEpisodes()
     document.body.className = "hola"
    
  
  }, []);
console.log(theme.extend.backgroundColor.secundary);
   
  return (
    <div className=" h-auto ">
        <h3 className="text-[22px] font-semibold mb-10">Episodios</h3>

        <div>
          <h4>Numero de Episodios {numEpisode}</h4>
        </div>

    <div className="flex flex-wrap h-auto ">
     {episode.length > 0 ? (
  episode.map((locationItem) => (
    <div key={locationItem.id} className="w-1/3 group-[]: flex flex-col h-auto p-2  mb-2 ">
    <Link href={"/episodes/"+locationItem.id} className="flex items-start bg-primary hover:bg-gray-300 drop-shadow-md p-3 rounded-lg flex-grow">


      <Image src={"https://ui-avatars.com/api/?name="+locationItem?.name+"&color="+theme.extend.colors.yellow.slice(1)+"&background="+theme.extend.backgroundColor.secundary.slice(1)} width={50} height={50} className="rounded-full w-[50px] h-[50px] mr-3 "></Image>
      <div className="">
      <h2 className="text-[18px] font-semibold group-hover:text-red">{locationItem.name.length <= 20 ? locationItem.name : locationItem.name.slice(0,20)+"..."}</h2>
      <div className="text-[14px] text-gray-700">Episodio: {locationItem.episode}</div>
      <div className="text-[12px] text-gray-500">Al aire: {locationItem.air_date}</div>
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
