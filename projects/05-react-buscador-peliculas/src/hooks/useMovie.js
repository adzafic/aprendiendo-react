import { useRef, useState } from "react";
import { getListMovies } from "../services/movie.js";

export function  useMovies({ searchMovie }) {
  const [listMovies, setListMovies] = useState([]);
  const previosSearch = useRef(searchMovie);
  const getMovies = async () => {
    if (previosSearch.current === searchMovie) return;
    previosSearch.current = searchMovie;
    const movies = await getListMovies({ searchMovie });
    setListMovies(movies.movies);
  };
  return { listMovies, getMovies };
}