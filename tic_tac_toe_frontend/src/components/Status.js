import React from "react";

/**
 * PUBLIC_INTERFACE
 * Displays game status text.
 */
export default function Status({ nextPlayer, winner, isDraw }) {
  let title = `Next player: ${nextPlayer}`;
  let subtitle = "Place three in a row to win.";

  if (winner) {
    title = `Winner: ${winner}`;
    subtitle = "Nice play — start a new game to play again.";
  } else if (isDraw) {
    title = "Draw";
    subtitle = "No winner this round — try again.";
  }

  return (
    <div className="ttt-status" aria-live="polite">
      <div className="ttt-status__title">{title}</div>
      <div className="ttt-status__subtitle">{subtitle}</div>
    </div>
  );
}
