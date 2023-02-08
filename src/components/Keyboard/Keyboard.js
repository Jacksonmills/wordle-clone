import React from "react";

function Keyboard({ handleKeyboardGuess }) {
  const qwerty = 'qwertyuiopasdfghjklzxcvbnm';
  const topRow = qwerty.slice(0, 9);
  const middleRow = qwerty.slice(9, 18);
  const bottomRow = qwerty.slice(18, 27);
  const keyboard = [topRow, middleRow, bottomRow];

  const handleKeyPress = (letter) => {
    handleKeyboardGuess(letter);
  };

  return (
    <div className="keyboard">
      {keyboard.map((row, index) => {
        const lettersArr = row.split('');
        return (
          <div key={index} className="keyboard__row">
            {lettersArr.map((letter, index) => (
              <button
                key={index}
                className="key"
                onClick={() => handleKeyPress(letter)}
              >
                {letter}
              </button >
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
