import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
//!context alanı
export const FilmContext=createContext()


const API_KEY = process.env.REACT_APP_TMDB_KEY;

const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

//? bu sayfa https://api.themoviedb.org adresine üye olup film afişlerini bir diziye attığımız context sayfası


const MovieContext = ({children}) => {

const[filmler,setFilmler]=useState([])

const getirMovies=()=>{

axios.get(BASE_URL).then((res)=>setFilmler(res.data.results))

}

useEffect(() => {getirMovies()}, []);
// 

  return (
    <FilmContext.Provider value={{filmler}}>
      {children}
    </FilmContext.Provider>
  )
}

export default MovieContext