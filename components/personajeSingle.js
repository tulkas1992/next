import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

  
const PersonajesSingle = (props) => {
  //const [personajes, setPersonajes] = useState(null);
  const {key, data} = props




  return (
    <Link href={"/personaje/"+data.id}>
         <div key={data.id} className="flex flex-col h-auto bg-primary drop-shadow-md rounded-lg overflow-hidden">
          <div>
          <Image src={data.image} alt={data.name}  width={90} height={90} layout="responsive"/>

          </div>
          <div className="p-2">
              <h2 className="truncate">{data.name}</h2>
              <p>{data.species}</p>
              </div>
            </div>
        
        </Link>
    
  );
};

export default PersonajesSingle;
