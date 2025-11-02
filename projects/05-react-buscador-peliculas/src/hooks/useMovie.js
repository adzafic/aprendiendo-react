import { useRef, useState,useMemo,useCallback } from "react";
import { getListMovies } from "../services/movie.js";

export function  useMovies({ searchMovie, sortMovies }) {
  const [listMovies, setListMovies] = useState([]);
  const previosSearch = useRef(searchMovie);
  const getMovies = useCallback(async ({searchMovie}) => {
      if (previosSearch.current === searchMovie) return;
      previosSearch.current = searchMovie;
      const movies = await getListMovies({ searchMovie });
      setListMovies(movies.movies);
    },[]);

  const sortedMovies = useMemo(() => {
    return sortMovies
    ? [...listMovies].sort((a, b) => a.title.localeCompare(b.title))
    : listMovies;
  }, [sortMovies, listMovies]);

  return { listMovies:sortedMovies, getMovies };
}