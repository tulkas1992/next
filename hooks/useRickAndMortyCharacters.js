import { useState, useEffect } from 'react';
import axios from 'axios';
import endPoints from '@/services/apis';

const useRickAndMortyCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const[nextPage, setNextPage] = useState(null);
  const[prevPage, setPrevPage] = useState(null);
  

  const fetchCharacters = async (page) => {
    const response = await axios.get(`${endPoints.characters.all}?page=${page}`);
    setCharacters(response.data.results);
    setTotalPages(response.data.info.pages);
    setNextPage(response.data.info.next);
    setPrevPage(response.data.info.prev)
    console.log("pagina hook", page);
  }
  // const fetchCharactersNextPage = async (page) => {
  //   const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
  //   setCharacters(response.data.results);
  //   setTotalPages(response.data.info.pages);
  //   console.log("pagina hook", page);
  // }

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  return { characters, totalPages, nextPage, prevPage};
};

export default useRickAndMortyCharacters;
