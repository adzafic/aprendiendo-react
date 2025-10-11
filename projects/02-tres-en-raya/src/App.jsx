import { useState } from "react";
const TURNS = {
  X: "x",
  O: "o",
};
const WINNING_COMBOS = [
  [0, 1, 2], // filas
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // columnas
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonales
  [2, 4, 6],
];

const checkWinnerCombo = (boardToCheck) => {
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

const Cuadrado = ({ children, updateBoard, posicion, isSelected }) => {
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

function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (tablero[index] || winner) return;
    const nuevoTablero = [...tablero];
    nuevoTablero[index] = turn;
    setTablero(nuevoTablero);
    const newWinner = checkWinnerCombo(nuevoTablero);
    if (newWinner) {
      setWinner(newWinner);
    }

    const nuevoTurno = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(nuevoTurno);

    if (nuevoTablero.every((cell) => cell != null)) {
      setWinner(false);
    }
  };
  const resetGame = () => {
    setTablero(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);
  };

  return (
    <main className="board">
      <h1>Tres en Raya</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {tablero.map((value, index) => {
          return (
            <Cuadrado updateBoard={updateBoard} key={index} posicion={index}>
              {value}
            </Cuadrado>
          );
        })}
      </section>
      <section className="turn">
        <Cuadrado isSelected={turn == TURNS.X}>{TURNS.X}</Cuadrado>
        <Cuadrado isSelected={turn == TURNS.O}>{TURNS.O}</Cuadrado>
      </section>
      {winner != null && (
        <section className="winner">
          <div className="text">
            <h2>{winner == false ? "Empate" : "Gano"}</h2>
            <header className="win">
              <Cuadrado>{winner}</Cuadrado>
            </header>
            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
