import { useState } from "react";
import { Cuadrado } from "./components/Cuadrado";
import { Winner } from "./components/Winner";
import { TURNS } from "./constantes";
import { checkWinnerCombo, checkEndGame } from "./logic/board";

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

    if (checkEndGame(nuevoTablero)) {
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
      <Winner winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
