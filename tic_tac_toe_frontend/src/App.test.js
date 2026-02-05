import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders tic tac toe heading", () => {
  render(<App />);
  expect(screen.getByText(/tic tac toe/i)).toBeInTheDocument();
});
