import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import Keyboard from '../Keyboard/Keyboard';

function Game() {
  const [secret, setSecret] = React.useState(sample(WORDS));
  const [gameStatus, setGameStatus] = React.useState('running'); // 'running' or 'won' or 'lost'
  const [guessResults, setGuessResults] = React.useState([]);
  const [userGuess, setUserGuess] = React.useState("");

  console.info({ secret });

  const restartGame = () => {
    setSecret(sample(WORDS));
    setGameStatus('running');
    setGuessResults([]);
    setUserGuess("");
  };

  const handleSubmitGuess = (userGuess) => {
    const nextGuessResults = [...guessResults, userGuess];
    setGuessResults(nextGuessResults);
    if (userGuess.toUpperCase() === secret) setGameStatus('won');
    if (userGuess.toUpperCase() !== secret && nextGuessResults.length === NUM_OF_GUESSES_ALLOWED) setGameStatus('lost');
  };

  const handleKeyboardGuess = (letter) => {
    setUserGuess(userGuess + letter);
  };

  return (
    <>
      {gameStatus === 'won' && <WonBanner numOfGuesses={guessResults.length} />}
      {gameStatus === 'lost' && <LostBanner answer={secret} />}
      {(gameStatus === 'won' || gameStatus === 'lost') && (<button onClick={restartGame}>Play Again</button>)}
      <GuessInput handleSubmitGuess={handleSubmitGuess} setUserGuess={setUserGuess} userGuess={userGuess} gameStatus={gameStatus} />
      <GuessResults guessResults={guessResults} answer={secret} />
      <Keyboard handleKeyboardGuess={handleKeyboardGuess} />
    </>
  );
}

export default Game;
