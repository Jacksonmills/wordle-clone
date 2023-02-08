import React from "react";

function ResultsBanner({ win, lose }) {
  return (
    <>
      {
        win && <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      }
      {lose && <div className="sad banner">
        <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
      </div>}
    </>
  );
}

export default ResultsBanner;
