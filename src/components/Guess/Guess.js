import React from "react";
import { checkGuess } from "../../game-helpers";

import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return (
    <span className={className}>
      {letter}
    </span>
  );
}

function Guess({ guess = '', answer }) {
  const data = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5)
        .map((index) => (
          <Cell key={index} letter={guess[index]} status={data && data[index].status} />
        ))
      }
    </p>
  );
}

export default Guess;
