export const TURNS = {
  X: "x",
  O: "o",
};
export const WINNING_COMBOS = [
  [0, 1, 2], // filas
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // columnas
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonales
  [2, 4, 6],
];