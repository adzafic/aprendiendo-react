import { Filters } from "./Filters";

export function Header({ handelSubmit }) {
  return (
    <>
      <h1>My Shopping Cart</h1>
      <Filters handelSubmit={handelSubmit} />
    </>
  );
}
