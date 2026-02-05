import React from "react";
import Square from "./Square";

/**
 * PUBLIC_INTERFACE
 * Renders a 3x3 board.
 */
export default function Board({ squares, onPlayAt, disabled, winningLine }) {
  return (
    <div className="ttt-board" role="grid" aria-label="Tic Tac Toe board">
      {squares.map((value, idx) => {
        const isWinningSquare = Array.isArray(winningLine)
          ? winningLine.includes(idx)
          : false;

        return (
          <div key={idx} role="gridcell" className="ttt-board__cell">
            <Square
              value={value}
              onClick={() => onPlayAt(idx)}
              disabled={disabled || value !== null}
              isWinningSquare={isWinningSquare}
            />
          </div>
        );
      })}
    </div>
  );
}
