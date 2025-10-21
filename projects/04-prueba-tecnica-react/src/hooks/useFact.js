import { useEffect, useState } from "react";
import { getRandomFact } from "../servicios/fact.js";
const CAT_API_IMAGE_URL = (text) =>
  `https://cataas.com/cat/says/${text}?fontSize=30&fontColor=red`;

export const useFact = () => {
    const [fact, setFact] = useState(null);

    const refreshFact = () => {
      getRandomFact().then((newFact) => setFact(newFact));
    };
    useEffect(() => {
      refreshFact();
    }, []);
    return { fact, refreshFact };
  };

  export const useImageUerl = ({fact}) => {
    const [imageUrl, setImageUrl] = useState(null);
    useEffect(() => {
      if (!fact) return;

      const threeFirstWordsFromFact = fact.split(" ", 3);
      const newImageUrl = CAT_API_IMAGE_URL(threeFirstWordsFromFact);
      setImageUrl(newImageUrl);
    }, [fact]);

    return { imageUrl };
  }