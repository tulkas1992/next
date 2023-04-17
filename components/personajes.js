import { useState, useEffect } from "react";
import Link from "next/link";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
const Personajes = () => {
  const [personajes, setPersonajes] = useState(null);
  const [value, setValue] = useState("");
  const [numPage, setNumPage] = useState("");


  const handleChange = (event) => {
    // setValue(event.target.value);
    let valor = event.target.value;
  };

  const handleClickLike = (id) =>{

    // alert("sd")
    console.log(id)

    const objLikePersonaje = personajes.filter(personajes => personajes.id === id)
    const objRemove = personajes.filter(personajes => personajes.id !== id)
  
    setPersonajes(objRemove)
    console.log(objLikePersonaje);

  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://rickandmortyapi.com/api/character/");
      const data = await res.json();
      const { results, info } = data;

      const filtro = results.sort((a, b) => a.name.localeCompare(b.name));

      setPersonajes(filtro);
      setNumPage(info.next);
    }

    fetchData();
  }, []);



  return (
    <>
      <h2>{numPage} sss</h2>

      <div className="flex flex-col w-[343px] ">
        {personajes &&
          personajes.map((personaje, index) => (
            <div
              key={personaje.id}
              id={index}
              className={
                index == 0
                  ? "col-span-2 flex flex-row p-[20px] bg-primary justify-start items-center m-[5px]"
                  : "col-span-1 flex flex-row p-[20px] bg-primary justify-start items-center m-[5px]"
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
                <h2 className="text-[16px] font-[600]">{personaje.name}</h2>
                <Link href={`/personajes/${personaje.id}`}>
                  <p>
                    {personaje.species} - {personaje.status}
                  </p>
                </Link>
              </div>
              <div className="w-[32px] h-[32px] bg-white flex rounded-full justify-center items-center">
  <FontAwesomeIcon icon={faHeart}  color="#53C629" onClick={ (e) => handleClickLike(personaje.id) } />
</div>
    
             
            </div>
          ))}
      </div>
    </>
  );
};

export default Personajes;
