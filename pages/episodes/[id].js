import Head from "next/head";
import { useState, useEffect } from "react";
import "@fontsource/inter";
import Layout from "../../components/layout";
// import episodesSingle from '../../components/episodeSingle';
import { useRouter } from "next/router";
import endPoints from "@/services/apis";
import Image from "next/image";
import PersonajesSingle from "@/components/personajeSingle";

export default function episode({ dataProps }) {
  const [episode, setEpisode] = useState(null);

  const [locationEpisode, setLocationEpisode] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, [router]);

  useEffect(() => {
    if (episode) {
      fetchepisode(episode.characters).then((data) => setLocationEpisode(data));
    }
  }, [episode]);

  // funcion llamar a la api
  const fetchData = async () => {
    const { query } = router;
    const id = query.id;
    const res = await fetch(endPoints.episode.single(id));
    const data = await res.json();
    setEpisode(data);
  };

  const fetchepisode = async (episode) => {
    
    if (!episode || !Array.isArray(episode)) {
      return null;
    }
    const characterPromises = episode.map(async (characterUrl) => {
      const res = await fetch(characterUrl);
      const data = await res.json();
      return data;
    });

    const characterData = await Promise.all(characterPromises);
    return characterData;
  };

  const Locationepisode = ({ episode }) => {
    const id = episode.split("/").pop();
    return (
      <ul>
        <li>
          <a href={"/episode/" + id}>
            {episode} - {id}
          </a>
        </li>
      </ul>
    );
  };

  return (
    <>
      <div className="w-auto max-lg:b border-b border-1 pb-10 mb-10 border-gray">
        <img
          src={episode?.image}
          className="w-[175px] mx-auto h-auto rounded-full mb-[8px]"
        />

        <h1 className="text-[24px] font-[700] color-[#111827] mb-[30px]">
          <span className="font-[600]">Episodio: </span>
          {episode?.name}{" "}
        </h1>

        <div className="grid grid-cols-2">
          <div className="pb-[16px]">
            <h2 className="text-[16px] font-[600] color-[#111827]">
              Fecha al aire{" "}
            </h2>
            <span className="text-[16px] font-[300] color-[#6B7280]">
              {episode?.air_date}
            </span>
          </div>
          <div className="pb-[16px]">
            <h2 className="text-[16px] font-[600] color-[#111827]">Episode </h2>
            <span className="text-[16px] font-[300] color-[#6B7280]">
              {episode?.episode}
            </span>
          </div>
          <div className="pb-[16px]">
            <h2 className="text-[16px] font-[600] color-[#111827]">Creado </h2>
            <span className="text-[16px] font-[300] color-[#6B7280]">
              {episode?.created}
            </span>
          </div>
          <div className="pb-[16px]">
            <h2 className="text-[16px] font-[600] color-[#111827]">Numero de personajes </h2>
            <span className="text-[16px] font-[300] color-[#6B7280]">
              {episode?.characters?.length}
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="text-[20px] font-[600] color-[#111827] mb-[30px]">
          Personajes de este episodio{" "}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {locationEpisode &&
            locationEpisode.map((characterItem) => (
              <PersonajesSingle data={characterItem}></PersonajesSingle>
            ))}
        </div>
        {/* 
      {episode.episode.map((residentItem) => {

        <h4>{residentItem}</h4>
      })} */}
      </div>
    </>
  );
}

//curso https://www.youtube.com/watch?v=pFT8wD2uRSE&t=319s&ab_channel=midulive
// min 42m
