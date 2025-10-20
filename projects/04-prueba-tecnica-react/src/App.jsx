import { useEffect, useState } from "react";
import { getRandomFact } from "./servicios/fact.js";
import "./App.css";

const CAT_API_IMAGE_URL = (text) =>
  `https://cataas.com/cat/says/${text}?fontSize=30&fontColor=red`;

function App() {
  const [fact, setFact] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

  useEffect(() => {
    if (!fact) return;

    const threeFirstWordsFromFact = fact.split(" ", 3);
    const newImageUrl = CAT_API_IMAGE_URL(threeFirstWordsFromFact);
    setImageUrl(newImageUrl);
  }, [fact]);

  const handleClick = () => {
    getRandomFact().then((newFact) => setFact(newFact));
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
