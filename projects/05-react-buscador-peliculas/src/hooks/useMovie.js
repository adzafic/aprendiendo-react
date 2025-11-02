import { useRef, useState } from "react";
import { getListMovies } from "../services/movie.js";

export function  useMovies({ searchMovie, sortMovies }) {
  const [listMovies, setListMovies] = useState([]);
  const previosSearch = useRef(searchMovie);
  const getMovies = async () => {
    if (previosSearch.current === searchMovie) return;
    previosSearch.current = searchMovie;
    const movies = await getListMovies({ searchMovie });
    setListMovies(movies.movies);
  };

  const sortedMovies = sortMovies
    ? [...listMovies].sort((a, b) => a.title.localeCompare(b.title))
    : listMovies;
  ;

  return { listMovies:sortedMovies, getMovies };
}