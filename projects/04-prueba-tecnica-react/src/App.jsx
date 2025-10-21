import "./App.css";
import { useFact, useImageUerl } from "./hooks/useFact";

function App() {
  const { fact, refreshFact } = useFact();
  const { imageUrl } = useImageUerl({ fact });

  const handleClick = () => {
    refreshFact();
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
