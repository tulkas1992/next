import { useState, useEffect, useContext } from "react";
import { CharacterContext } from "@/context/CharacterContext";
import endPoints from "@/services/apis";
import Link from "next/link";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import ButtonAddFavorite from "./ButtonAddFavorite";


const Personajes = () => {

  const { characters, addCharacter, removeCharacter } = useContext(CharacterContext);
  const newCharacter = { id: 6, name: 'Unity', species: 'Hivemind', gender: 'Non-binary' };

  const [personajes, setPersonajes] = useState([]);
  const [numPersonajesDisLike, setNumPersonajesDisLike] = useState(0)
  const [personajesFavorites, setPersonajesFavorites] = useState([]);
  const [value, setValue] = useState("");
  const [numPage, setNumPage] = useState("");



  const handleChange = (event) => {
    // setValue(event.target.value);
    let valor = event.target.value;
  };

  const handleClickLike = (key) => {
    const objLikePersonaje = personajes.find(
      (personaje) => personaje.id === key
    );
    const newPersonajesFavorites = [...personajesFavorites, objLikePersonaje];
    const newPersonajes = personajes.filter((personaje) => personaje.id !== key);
    setPersonajes(newPersonajes);
    const {id, image, name, species, gender} = objLikePersonaje;
    addCharacter({id,image,name,species,gender});
   
  };

  useEffect(() => {
     fetchData();
  }, []);



  const fetchData = async() => {
    const res = await fetch(endPoints.characters.all);
    const data = await res.json();
    const { results, info } = data;

    const filtro = results.sort((a, b) => a.name.localeCompare(b.name));

    setPersonajes(filtro.slice(0 - 8));
    setNumPage(info.next);
    
  }

  return (
    <>
      <div className="flex flex-col w-[343px] ">
              
        <h3 className="font-[600] text-[13px] mb-[20px] mt-[36px] pl-[17px]">Favoritos ({characters.length})</h3>
        {characters &&
          characters.map((personaje, index) => (
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
                  <p className="">
                    {personaje.species} - {personaje.gender}
                  </p>
                </Link>
              </div>
              <ButtonAddFavorite data={personaje} remove={true} />
            </div>
          ))}
        <h3 className="font-[600] text-[13px] mb-[20px] mt-[36px] pl-[17px]">Aleatorios (7)</h3>

        {personajes &&
          personajes.map((personaje, index) => (
            <div
              key={personaje.id}
              id={index}
              className={
                index == 0
                  ? "cart-doble"
                  : "cart-simple"
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
              <ButtonAddFavorite data={personaje} color={false} />
            </div>
          ))}

       {/* <span>Siguiente pagina: {numPage}</span>*/}
      </div>
    </>
  );
};
export default Personajes;
