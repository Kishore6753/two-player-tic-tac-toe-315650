/**
 * Tic Tac Toe game utility helpers.
 */

/**
 * @typedef {('X'|'O'|null)} PlayerMark
 */

/**
 * @typedef {Object} WinnerResult
 * @property {PlayerMark} winner
 * @property {number[] | null} line
 */

/**
 * PUBLIC_INTERFACE
 * Determine if the current board has a winner.
 * @param {PlayerMark[]} squares A 9-length array representing the board.
 * @returns {WinnerResult} Winner info including the winning line (indices) if any.
 */
export function calculateWinner(squares) {
  const lines = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    const v = squares[a];
    if (v && v === squares[b] && v === squares[c]) {
      return { winner: v, line: [a, b, c] };
    }
  }

  return { winner: null, line: null };
}

/**
 * PUBLIC_INTERFACE
 * Returns true if all squares are filled.
 * @param {PlayerMark[]} squares
 * @returns {boolean}
 */
export function isBoardFull(squares) {
  return squares.every((s) => s !== null);
}
