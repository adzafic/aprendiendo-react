import { useEffect, useState } from "react";
import { Products } from "./components/Products";
import data from "./mocks/products.json";
const URL = "https://dummyjson.com/products";
const URL_SEARCH = "https://dummyjson.com/products/search?q=";

function App() {
  var [filters, setFilters] = useState({
    product: "",
    category: "all",
    minPrice: 0,
  });
  var [minPrice, setMinPrice] = useState(0);
  var [products, setProducts] = useState([]);

  useEffect(() => {
    console.table("Fetching products with filters:", filters);
    console.log(data.products);
    var url = URL;
    if (filters.product) {
      url = `${URL_SEARCH}${filters.product}`;
    }
    const filterProducts = function (products) {
      console.log("Filtering products with filters:", products, filters);
      return products.filter((product) => {
        return (
          product.price >= filters.minPrice &&
          (filters.category == "all" || product.category === filters.category)
        );
      });
    };
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        var filteredProducts = filterProducts(data.products);
        setProducts(filteredProducts);
      });
    //var filteredProducts = filterProducts(data.products);
    //setProducts(filteredProducts);
  }, [filters]);

  function handelSubmit(event) {
    console.log("Submitting form");
    event.preventDefault();
    var formData = new FormData(event.target);
    var newFilters = {
      product: formData.get("product"),
      category: formData.get("category"),
      minPrice: Number(formData.get("minPrice")),
    };
    console.log("New filters:", newFilters);
    setFilters(newFilters);
  }

  function handleChangeMinPrice(event) {
    console.log("Changing filter:", event.target.name, event.target.value);
    setMinPrice(Number(event.target.value));
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <form className="filters" onSubmit={handelSubmit}>
        <div>
          <label htmlFor="product">Producto</label>
          <input type="text" placeholder="Search products..." name="product" />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select name="category" defaultValue="all">
            <option value="all">All</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
          </select>
        </div>
        <div>
          <label htmlFor="minPrice">Min Price: </label>
          <span>{minPrice}</span>
          <input
            type="range"
            name="minPrice"
            defaultValue={0}
            id="price"
            min="0"
            max="1000"
            onChange={handleChangeMinPrice}
          />
        </div>
        <button type="submit">Apply Filters</button>
      </form>
      <Products products={products} />
    </>
  );
}

export default App;
