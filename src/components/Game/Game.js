import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running'); // 'running' or 'won' or 'lost'
  const [guessResults, setGuessResults] = React.useState([]);

  const handleSubmitGuess = (userGuess) => {
    const nextGuessResults = [...guessResults, userGuess];
    setGuessResults(nextGuessResults);
    if (userGuess.toUpperCase() === answer) setGameStatus('won');
    if (userGuess.toUpperCase() !== answer && nextGuessResults.length === NUM_OF_GUESSES_ALLOWED) setGameStatus('lost');
  };

  return (
    <>
      {gameStatus === 'won' && <WonBanner numOfGuesses={guessResults.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      <GuessResults guessResults={guessResults} answer={answer} />
    </>
  );
}

export default Game;
