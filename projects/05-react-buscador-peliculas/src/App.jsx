import "./App.css";

function App() {
  console.log(import.meta.env.VITE_OMDB_API_KEY);
  return (
    <div className="page">
      <header>
        <h1>Buscador Peliculas</h1>
        <form action="">
          <label htmlFor="busqueda">Busca tu pelicula</label>
          <input type="text" placeholder="Avengers, Star Wars, The Matrix..." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main></main>
    </div>
  );
}

export default App;
