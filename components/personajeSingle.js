import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonAddFavorite from "./ButtonAddFavorite";

  
const PersonajesSingle = (props) => {
  //const [personajes, setPersonajes] = useState(null);
  const {key, data} = props




  return (
    <Link href={"/personaje/"+data.id} title={data.name} className="relative">
         <div key={data.id} className="flex flex-col h-auto bg-primary drop-shadow-md rounded-lg overflow-hidden">
          <div>
          <Image src={data.image} alt={data.name}  width={90} height={90} layout="responsive"/>

          </div>
          <div className="p-2">
            
              <h2 className="truncate text-[16px] font-[600]">{data.name}</h2>
              <p className="text-[14px] ">{data.species}</p>
              </div>
              <div  className={data.status === "Alive" ? "label-alive" : "label-none"} >{data.status === 'Alive' ? 'Vivo' : (data.status === 'Dead' ? 'Muerto' : 'Desconocido')}</div>
            
            </div>
            <div className="absolute -top-3 -left-3">
             <ButtonAddFavorite data={data} />
             </div>
        </Link>

  );
};

export default PersonajesSingle;
