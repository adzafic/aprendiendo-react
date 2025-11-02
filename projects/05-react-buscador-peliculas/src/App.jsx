import "./App.css";
import { useEffect, useState, useRef } from "react";

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

function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    console.log("useEffect search", { search });
    console.log("first Render", isFirstRender.current);
    if (isFirstRender.current) {
      isFirstRender.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con solo numeros");
      return;
    }
    if (search.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);
  return { search, setSearch, error };
}

function useMovies({ searchMovie }) {
  const [listMovies, setListMovies] = useState([]);
  useEffect(() => {
    const movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${
      import.meta.env.VITE_OMDB_API_KEY
    }&s=${searchMovie}`;
    fetch(movieUrl)
      .then((response) => response.json())
      .then((data) => {
        const mapedMovies = data?.Search?.map((movie) => {
          return {
            title: movie.Title,
            tear: movie.Year,
            imdbID: movie.imdbID,
            poster: movie.Poster,
          };
        });
        setListMovies(mapedMovies);
      });
  }, [searchMovie]);
  return { listMovies };
}

function App() {
  const { search, setSearch, error } = useSearch();
  const { listMovies } = useMovies({ searchMovie: search });
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
    console.log(value, fields.search);

    //setSearch({ searchMovie: fields.search });
    setSearch(fields.search);
  };
  const handleChange = function (event) {
    const fields = Object.fromEntries(new FormData(event.target.form));
    setSearch(fields.search);
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
