export const Cuadrado = ({ children, updateBoard, posicion, isSelected }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(posicion);
  };
  return (
    <div onClick={handleClick} className={className} key={posicion}>
      {children}
    </div>
  );
};
