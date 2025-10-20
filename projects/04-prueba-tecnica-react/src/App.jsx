import { use, useEffect, useState } from "react";

const CAT_API_FACTS_URL = "https://catfact.ninja/fact";
const CAT_API_IMAGE_URL = (text) =>
  `https://cataas.com/cat/says/${text}?fontSize=30&fontColor=red`;

function App() {
  const [fact, setFact] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(CAT_API_FACTS_URL)
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  }, []);

  useEffect(() => {
    if (!fact) return;
    //const firstWordFromFact = fact.split(" ")[0];
    const threeFirstWordsFromFact = fact.split(" ", 3);
    const newImageUrl = CAT_API_IMAGE_URL(threeFirstWordsFromFact);
    setImageUrl(newImageUrl);
  }, [fact]);

  return (
    <>
      <h1>Prueba Técnica API CATS</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={fact} />}
    </>
  );
}

export default App;
