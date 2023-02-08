import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form/Form';
import GuessResults from '../GuessResults/GuessResults';
import ResultsBanner from '../ResultsBanner/ResultsBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const win = guessResults.includes(answer);
  const lose = !guessResults.includes("LEARN") && guessResults.length === NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <ResultsBanner win={win} lose={lose} />
      <Form guessResults={guessResults} setGuessResults={setGuessResults} win={win} lose={lose} />
      <GuessResults guessResults={guessResults} answer={answer} />
    </>
  );
}

export default Game;
