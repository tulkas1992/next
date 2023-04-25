import Head from "next/head";
import { useState, useEffect } from "react";
import "@fontsource/inter";
import Layout from "../../components/layout";
import PersonajesSingle from "../../components/personajeSingle";
import { useRouter } from "next/router";
import endPoints from "@/services/apis";
import Link from "next/link";

export default function personaje({ dataProps }) {
  const [infoPersonajes, setInfoPersonajes] = useState(null);
  const [id, setId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const { query } = router;
      const id = query.id;
      const res = await fetch(endPoints.characters.single(id));
      const data = await res.json();
      setInfoPersonajes(data);
      setId(id);
      console.log(data);
    }

    if (router.query.id) {
      fetchData();
    }
  }, [router]);

  return (
    <>
      <div className="w-[70vw] max-lg:b border-b border-1 pb-10 mb-10 border-gray">
        <img
          src={infoPersonajes?.image}
          className="w-[175px] mx-auto h-auto rounded-full mb-[8px]"
        />

        <h1 className="text-[24px] font-[700] color-[#111827] mb-[30px]">
          {infoPersonajes?.name}{" "}
        </h1>
        <div className="grid grid-cols-2">
          <div className="pb-[16px]">
            <h2 className="text-[16px] font-[600] color-[#111827]">Specie </h2>
            <span className="text-[16px] font-[300] color-[#6B7280]">
              {infoPersonajes?.species}
            </span>
          </div>
          <div className="pb-[16px]">
            <h2 className="text-[16px] font-[600] color-[#111827]">Sexo </h2>
            <span className="text-[16px] font-[300] color-[#6B7280]">
              {infoPersonajes?.gender}
            </span>
          </div>
         
          <div className="pb-[16px]">
            <h2 className="text-[16px] font-[600] color-[#111827]">Origin </h2>
            <span className="text-[16px] font-[300] text-[#53C629]">
              <Link
                href={`/location/${infoPersonajes?.origin.url
                  .split("/")
                  .pop()}`}
              >
                {infoPersonajes?.origin.name}
              </Link>
            </span>
          </div>
          <div className="pb-[16px]">
            <h2 className="text-[16px] font-[600] color-[#111827]">
              Ultimo lugar visto{" "}
            </h2>
            <span className="text-[16px] font-[300] text-[#53C629]">
              <Link
                href={`/location/${infoPersonajes?.location.url
                  .split("/")
                  .pop()}`}
              >
                {infoPersonajes?.location.name}
              </Link>
            </span>
          </div>
          <div className="pb-[16px]">
            <h2 className="text-[16px] font-[600] color-[#111827]">Status </h2>
            <span className="text-[16px] font-[300] color-[#6B7280]">
              {infoPersonajes?.status}
            </span>
          </div>
          <div className="pb-[16px]">
            <h2 className="text-[16px] font-[600] color-[#111827]">Creado </h2>
            <span className="text-[16px] font-[300] color-[#6B7280]">
              {infoPersonajes?.created}
            </span>
          </div>
          <div className="pb-[16px]">
            <h2 className="text-[16px] font-[600] color-[#111827]">Tipo </h2>
            <span className="text-[16px] font-[300] color-[#6B7280]">
              {infoPersonajes?.type? infoPersonajes?.type: "Desconocido" }
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="text-[20px] font-[600] color-[#111827] mb-[30px]">
          Episodios
        </h3>
        {infoPersonajes?.episode &&
          infoPersonajes.episode.map((item) => {
            return (
              <Link href={item} key={item} className="block text-[#53C629]">
                Episodio #{item.split("/").pop()}
              </Link>
            );
          })}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();
  const { results, info } = data;

  const { query } = context;
  //Recibir un parametro desde get llamado "q" del lado del servidor
  const { q = "", link = "" } = query;
  console.log("sds" + q + link);

  const dataProps = results.sort((a, b) => a.name.localeCompare(b.name));
  return {
    props: {
      dataProps,
    },
  };
}

//curso https://www.youtube.com/watch?v=pFT8wD2uRSE&t=319s&ab_channel=midulive
// min 42m
