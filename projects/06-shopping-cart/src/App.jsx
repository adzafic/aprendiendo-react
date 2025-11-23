import { useState } from "react";
import { Products } from "./components/Products";

function App() {
  var [products, setProducts] = useState([]);
  useState(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <>
      <Products products={products} />
    </>
  );
}

export default App;
