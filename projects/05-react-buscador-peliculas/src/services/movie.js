const movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_OMDB_API_KEY}`;

export async function getListMovies({ searchMovie }) {
  if (searchMovie === "") {
    return [];
  }
  const response = await fetch(`${movieUrl}&s=${searchMovie}`);
  const data = await response.json();
  const mapedMovies = data?.Search?.map((movie) => {
    return {
      title: movie.Title,
      year: movie.Year,
      imdbID: movie.imdbID,
      poster: movie.Poster,
    };
  });
  return { movies: mapedMovies };
}