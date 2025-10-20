const CAT_API_FACTS_URL = "https://catfact.ninja/fact";

export const getRandomFactAsync = async () => {
  const response = await fetch(CAT_API_FACTS_URL);
  const data = await response.json();
  return data.fact;
}

  
export const getRandomFact = () => {
  return fetch(CAT_API_FACTS_URL)
    .then((response) => response.json())
    .then((data) => data.fact);
}