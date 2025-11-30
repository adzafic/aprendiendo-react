import "./Filters.css";
import { useState, useId } from "react";

export function Filters({ handelSubmit }) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceId = useId();
  const categoryId = useId();
  const productId = useId();

  function handleChangeMinPrice(event) {
    setMinPrice(Number(event.target.value));
  }
  return (
    <form className="filters" onSubmit={handelSubmit}>
      <div>
        <label htmlFor={productId}>Producto</label>
        <input
          id={productId}
          type="text"
          placeholder="Search products..."
          name="product"
        />
      </div>
      <div>
        <label htmlFor={categoryId}>Category</label>
        <select id={categoryId} name="category" defaultValue="all">
          <option value="all">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
      <div>
        <label htmlFor={minPriceId}>Min Price: </label>
        <span>{minPrice}</span>
        <input
          type="range"
          name="minPrice"
          defaultValue={0}
          id={minPriceId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
      </div>
      <button type="submit">Apply Filters</button>
    </form>
  );
}
