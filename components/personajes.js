import { useState, useEffect } from "react";
import endPoints from "@/services/apis";
import Link from "next/link";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [numPersonajesLike, setNumPersonajesLike] = useState(0)
  const [numPersonajesDisLike, setNumPersonajesDisLike] = useState(0)
  const [personajesFavorites, setPersonajesFavorites] = useState([]);
  const [value, setValue] = useState("");
  const [numPage, setNumPage] = useState("");



  const handleChange = (event) => {
    // setValue(event.target.value);
    let valor = event.target.value;
  };

  const handleClickLike = (id) => {
    const objLikePersonaje = personajes.find(
      (personaje) => personaje.id === id
    );
    const newPersonajesFavorites = [...personajesFavorites, objLikePersonaje];
    const newPersonajes = personajes.filter((personaje) => personaje.id !== id);
    setPersonajes(newPersonajes);
    setPersonajesFavorites(newPersonajesFavorites);
    setNumPersonajesLike(personajesFavorites.length+1)
    setNumPersonajesDisLike(personajes.length-1)
  };

  useEffect(() => {
     fetchData();
  }, []);



  const fetchData = async() => {
    const res = await fetch(endPoints.characters.all);
    const data = await res.json();
    const { results, info } = data;

    const filtro = results.sort((a, b) => a.name.localeCompare(b.name));

    setPersonajes(filtro);
    setNumPage(info.next);
    
  }

  return (
    <>
      <div className="flex flex-col w-[343px] ">
       
        <h3 className="font-[600] text-[13px] mb-[20px] mt-[36px] pl-[17px]">Starred character ({numPersonajesLike})</h3>
        {personajesFavorites &&
          personajesFavorites.map((personaje, index) => (
            <div
              key={personaje.id}
              id={index}
              className={
                index == 0
                  ? "col-span-2 flex flex-row p-[20px] bg-primary justify-start items-center m-[5px]  rounded-[16px] border-t-[1px] "
                  : "col-span-1 flex flex-row p-[20px] bg-primary justify-start items-center m-[5px] rounded-[16px]"
              }
            >
              <div className="flex items-center">
                <img
                  src={personaje.image}
                  className="w-[25px] h-[25px] rounded-full"
                  alt={personaje.name}
                />
              </div>
              <div className="pl-[10px] w-[247px]">
              <Link href={`/personaje/${personaje.id}`}>

                <h2 className="text-[16px] font-[600]">{personaje.name}</h2>
                  <p>
                    {personaje.species} - {personaje.status}
                  </p>
                </Link>
              </div>
              <div className="w-[32px] h-[32px] bg-white flex rounded-full justify-center items-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  color="#53C629"
                  onClick={(e) => handleClickLike(personaje.id)}
                  width={20} 
                />
              </div>
            </div>
          ))}
        <h3 className="font-[600] text-[13px] mb-[20px] mt-[36px] pl-[17px]">Characters ({numPersonajesDisLike})</h3>

        {personajes &&
          personajes.map((personaje, index) => (
            <div
              key={personaje.id}
              id={index}
              className={
                index == 0
                  ? "col-span-2 flex flex-row p-[20px] hover:bg-primary justify-start items-center m-[5px] hover:rounded-[16px] border-t-[1px] border-gray"
                  : "col-span-1 flex flex-row p-[20px] hover:bg-primary justify-start items-center m-[5px] hover:rounded-[16px] border-t-[1px] border-gray"
              }
            >
              <div className="flex items-center">
                <Image
                  src={personaje.image}
                  className="w-[25px] h-[25px] rounded-full"
                  width={25}
                  height={25}
                  priority={true}
                  alt={personaje.name}
                />
              </div>
              <div className="pl-[10px] w-[247px]">
                <Link href={`/personaje/${personaje.id}`}>
                  <h2 className="text-[16px] font-[600]">{personaje.name}</h2>
                  <p>
                    {personaje.species} - {personaje.status}
                  </p>
                </Link>
              </div>
              <div
                className="w-[32px] h-[32px] bg-white flex rounded-full justify-center items-center"
                onClick={(e) => handleClickLike(personaje.id)}
              >
                <FontAwesomeIcon icon={faHeart} color="#e5e7eb" width={20} />
              </div>
            </div>
          ))}

       {/* <span>Siguiente pagina: {numPage}</span>*/}
      </div>
    </>
  );
};
export default Personajes;
