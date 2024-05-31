import { useState,useEffect } from "react";

export const useCharacter =()=>{
    const [characters, setCharacters]= useState([]);
    const url = "https://rickandmortyapi.com/api/character";

  //async await-->consultar
    const getCharacters = async () => {
    const response=await fetch(url) //obtiene los caracteres de la url
    const data =await response.json() //guarda los datos en un json
    setCharacters(data.results) //guarda los datos en el estado
    console.log(data);
  }

  //nfn crear una funcion
  //rfc para crear componentes
  //uef crear useEffect
  //usf crear el useState

  useEffect(() => {
    getCharacters();
    
  }, [])

  return{characters}

}