import { use, useEffect, useState } from "react";

const CAT_API_FACTS_URL = "https://catfact.ninja/fact";
const CAT_API_IMAGE_URL = (text) =>
  `https://cataas.com/cat/says/${text}?fontSize=10&fontColor=red`;

function App() {
  const [fact, setFact] = useState(null);
  const [firstWord, setFirstWord] = useState(null);

  useEffect(() => {
    fetch(CAT_API_FACTS_URL)
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  }, []);

  useEffect(() => {
    if (!fact) return;
    //const firstWordFromFact = fact.split(" ")[0];
    const threeFirstWordsFromFact = fact.split(" ", 3);
    setFirstWord(threeFirstWordsFromFact);
  }, [fact]);

  return (
    <>
      <h1>Prueba Técnica API CATS</h1>
      {fact && <p>{fact}</p>}
      {firstWord && <img src={CAT_API_IMAGE_URL(firstWord)} alt={fact} />}
    </>
  );
}

export default App;
