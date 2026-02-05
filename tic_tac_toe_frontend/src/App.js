import React, { useMemo, useState } from "react";
import "./App.css";

import Board from "./components/Board";
import Status from "./components/Status";
import Controls from "./components/Controls";
import { calculateWinner, isBoardFull } from "./utils/ticTacToe";

function createEmptyBoard() {
  return Array(9).fill(null);
}

// PUBLIC_INTERFACE
function App() {
  const [squares, setSquares] = useState(() => createEmptyBoard());
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, line: winningLine } = useMemo(
    () => calculateWinner(squares),
    [squares]
  );

  const draw = !winner && isBoardFull(squares);
  const nextPlayer = xIsNext ? "X" : "O";
  const gameOver = Boolean(winner) || draw;

  const handlePlayAt = (idx) => {
    // Ignore clicks if game is over or square is already filled.
    if (gameOver || squares[idx] !== null) return;

    setSquares((prev) => {
      const next = prev.slice();
      next[idx] = xIsNext ? "X" : "O";
      return next;
    });
    setXIsNext((prev) => !prev);
  };

  const handleReset = () => {
    setSquares(createEmptyBoard());
    setXIsNext(true);
  };

  return (
    <div className="App">
      <main className="ttt-page">
        <div className="ttt-card">
          <h1 className="ttt-heading">Tic Tac Toe</h1>

          <Status nextPlayer={nextPlayer} winner={winner} isDraw={draw} />

          <Board
            squares={squares}
            onPlayAt={handlePlayAt}
            disabled={gameOver}
            winningLine={winningLine}
          />

          <Controls onReset={handleReset} />
        </div>
      </main>
    </div>
  );
}

export default App;
