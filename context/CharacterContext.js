import { createContext, useState, useEffect } from 'react';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  const addCharacter = (character) => {
     // Verificar si el personaje ya existe en el estado
  const characterExists = characters.some((c) => c.id === character.id);
  if (characterExists) {
    console.log(`El personaje con el id ${character.id} ya existe`);
    return false;
  }
  // Agregar el personaje al estado
  setCharacters([...characters, character]);
  localStorage.setItem('characters', JSON.stringify(characters));
  return true;

  };

  const removeCharacter = (id) => {
    const newCharacters = characters.filter((character) => character.id !== id);
    setCharacters(newCharacters);
    const addStorage = localStorage.setItem('characters', JSON.stringify(newCharacters));
    return true;
  };

  //  useEffect(() => {
  //   // Guardar los datos en el almacenamiento local
  //   localStorage.setItem('characters', JSON.stringify(characters));
  // }, [characters]);

  useEffect(() => {
    // Obtener los datos del almacenamiento local al inicio
    const storedCharacters = localStorage.getItem('characters');
    console.log("storage", storedCharacters);
    if (storedCharacters) {
      setCharacters(JSON.parse(storedCharacters));
    }
  }, []);


  return (
    <CharacterContext.Provider value={{ characters, addCharacter, removeCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};