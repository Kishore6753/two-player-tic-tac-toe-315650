import React from "react";

/**
 * PUBLIC_INTERFACE
 * A single Tic Tac Toe square.
 */
export default function Square({ value, onClick, disabled, isWinningSquare }) {
  return (
    <button
      type="button"
      className={`ttt-square ${isWinningSquare ? "ttt-square--win" : ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={value ? `Square: ${value}` : "Empty square"}
    >
      {value}
    </button>
  );
}
