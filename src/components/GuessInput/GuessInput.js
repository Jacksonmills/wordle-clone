import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [userGuess, setUserGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(userGuess);
    setUserGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[a-zA-Z]{5}"
        title="Guess must be 5 characters ✨"
        minLength={5}
        maxLength={5}
        value={userGuess}
        disabled={gameStatus === 'won' || gameStatus === 'lost'}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setUserGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
