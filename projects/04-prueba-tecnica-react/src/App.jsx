import "./App.css";
import { useFact } from "./hooks/useFact";

function App() {
  const { fact, imageUrl, getAndSetRandomFact } = useFact();

  const handleClick = () => {
    getAndSetRandomFact();
  };

  return (
    <main>
      <h1>Prueba Técnica API CATS</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={fact} />}
      </section>
    </main>
  );
}

export default App;
