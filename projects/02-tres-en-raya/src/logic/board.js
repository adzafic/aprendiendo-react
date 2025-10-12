import { WINNING_COMBOS } from "../constantes";
export const checkWinnerCombo = (boardToCheck) => {
  for (const [a, b, c] of WINNING_COMBOS) {
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};
export const checkEndGame= (boardToCheck) => {
 return boardToCheck.every((cell) => cell != null);
} 