import { Cuadrado } from "./Cuadrado";
export const Winner = ({ winner, resetGame }) => {
  if (winner == null) return;
  const winnerText = winner == false ? "Empate" : "Gano";
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
          <Cuadrado>{winner}</Cuadrado>
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
};
