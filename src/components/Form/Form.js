import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Form({ guessResults, setGuessResults, win, lose }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === '') return;
    const upperValue = value.toUpperCase();
    const nextResults = [...guessResults, upperValue];
    setGuessResults(nextResults);
    setValue("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={value}
        disabled={win || lose}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
}

export default Form;
