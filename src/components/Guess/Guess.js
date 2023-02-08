import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess = '', answer }) {
  const data = checkGuess(guess, answer);

  return (
    <p className="guess">
      <span className={data ? `cell ${data[0].status}` : `cell`}>{guess[0]}</span>
      <span className={data ? `cell ${data[1].status}` : `cell`}>{guess[1]}</span>
      <span className={data ? `cell ${data[2].status}` : `cell`}>{guess[2]}</span>
      <span className={data ? `cell ${data[3].status}` : `cell`}>{guess[3]}</span>
      <span className={data ? `cell ${data[4].status}` : `cell`}>{guess[4]}</span>
    </p>
  );
}

export default Guess;
