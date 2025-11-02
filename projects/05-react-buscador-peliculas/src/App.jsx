import "./App.css";
import { useRef, useState } from "react";
import { useMovies } from "./hooks/useMovie.js";
import { useSearch } from "./hooks/useSearch.js";

//todo: separar en componentes
function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => {
        return (
          <li className="movie" key={movie.imdbID}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img
              src={movie.poster}
              alt={`Poster de la pelicula ${movie.title}`}
            />
          </li>
        );
      })}
    </ul>
  );
}

function MoMoviesResults() {
  return <h2>No se encontraron peliculas</h2>;
}

function Movies({ listMovies }) {
  const HayPeliculas = listMovies?.length > 0;
  return HayPeliculas ? (
    <ListOfMovies movies={listMovies} />
  ) : (
    <MoMoviesResults />
  );
}

function App() {
  const { search, setSearch, error } = useSearch();
  const [sortMovies, setSortMovies] = useState(false);
  const { listMovies, getMovies } = useMovies({
    searchMovie: search,
    sortMovies,
  });
  const searchInputRef = useRef();

  const handleSubmit = function (event) {
    event.preventDefault();
    /* no controlada
    const fields = new FormData(event.target);
    const search = fields.get("search");
    setSearch({ searchMovie: fields.search });
    */

    const fields = Object.fromEntries(new FormData(event.target));
    const value = searchInputRef.current.value;

    //setSearch({ searchMovie: fields.search });
    //setSearch(fields.search);
    getMovies({ searchMovie: fields.search });
  };
  const handleChange = function (event) {
    const fields = Object.fromEntries(new FormData(event.target.form));
    setSearch(fields.search);
    getMovies({ searchMovie: fields.search });
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador Peliculas</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="busqueda">Busca tu pelicula</label>
          <input
            onChange={handleChange}
            name="search"
            type="text"
            placeholder="Avengers, Star Wars, The Matrix..."
            ref={searchInputRef}
          />
          {error && (
            <div>
              <p style={{ color: "red" }}>{error}</p>
            </div>
          )}
          <input
            type="checkbox"
            onChange={(e) => setSortMovies(e.target.checked)}
          />
          <label htmlFor="sort-movies">Ordenar por titulo</label>
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies listMovies={listMovies} />
      </main>
    </div>
  );
}

export default App;
