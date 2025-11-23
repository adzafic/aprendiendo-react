import { useEffect, useState } from "react";
import { Products } from "./components/Products";
const URL = "https://dummyjson.com/products";
const URL_SEARCH = "https://dummyjson.com/products/search?q=";

function App() {
  var [filters, setFilters] = useState({});
  var [products, setProducts] = useState([]);

  useEffect(() => {
    console.table("Fetching products with filters:", filters);
    var url = URL;
    if (filters.product) {
      url = `${URL_SEARCH}${filters.product}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [filters]);

  function handelSubmit(event) {
    console.log("Submitting form");
    event.preventDefault();
    var formData = new FormData(event.target);
    var newFilters = {
      product: formData.get("product"),
    };
    console.log("New filters:", newFilters);
    setFilters(newFilters);
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <form className="filters" onSubmit={handelSubmit}>
        <input type="text" placeholder="Search products..." name="product" />
        <button type="submit">Apply Filters</button>
      </form>
      <Products products={products} />
    </>
  );
}

export default App;
