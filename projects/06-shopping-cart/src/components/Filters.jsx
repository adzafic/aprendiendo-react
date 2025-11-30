import "./Filters.css";
import { useState } from "react";

export function Filters({ handelSubmit }) {
  var [minPrice, setMinPrice] = useState(0);

  function handleChangeMinPrice(event) {
    setMinPrice(Number(event.target.value));
  }
  return (
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
  );
}
