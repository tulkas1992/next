import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import endPoints from '@/services/apis';
import PersonajesSingle from './personajeSingle';
import Link from 'next/link';
import Image from 'next/image';



const SearchCharacter = () => {

const [characters, setCharacters] = useState(null);
const [valueFind, setValueFind] = useState("");
const searchInput = useRef(null);


const handleChange = async() => {

const value = searchInput.current.value
setValueFind(value)



const res = await fetch(endPoints.characters.findCharacter(value));
const data = await res.json();
const { results, info } = data;

setCharacters(value ? results : false);
}
  return (
  <div className='relative w-auto'>
    <input
      type="text"
      placeholder="Busca un personaje"
      value={valueFind}
      ref={searchInput}
      onChange={handleChange}
      className='w-full h-[35px] border border-gray-300 focus:bg-gray-300 focus:outline-none p-2'

    ></input>
{characters && (
  <div className='z-10 absolute bg-primary mt-2 h-[400px] overflow-y-scroll w-full'>
    {characters.map((character, index) => (
      <Link href={`/personaje/${character.id}`} className='mb-2'>
        <div key={character.id} className="flex flex-row h-auto  mb-3">
          <div>
            <Image src={character.image} alt={character.name} width={40} height={40} />
          </div>
          <div className="p-2 items-center">
            <h2 className="text-sm">{character.name}</h2>
          </div>
        </div>
      </Link>
    ))}
  </div>
)}

{!characters && (
  <div className='mt-5 text-sm'>
    <p>No hay personajes disponibles.</p>
  </div>
)}
  </div>
  )
}

export default SearchCharacter