import React from "react";

/**
 * PUBLIC_INTERFACE
 * Game controls (Reset/New Game).
 */
export default function Controls({ onReset }) {
  return (
    <div className="ttt-controls">
      <button type="button" className="ttt-button" onClick={onReset}>
        New Game
      </button>
    </div>
  );
}
