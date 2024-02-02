import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really?",
  "Absolutely sure?",
  "Like 100% positive?",
  "You're missing out",
  "Okay enough playing around",
  "No seriously, stop",
  "Man...",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <div className="gif-container">
            <img
              alt="cute gif"
              src="https://tenor.com/view/catkiss-gif-3595658823685090282.gif"
            />
          </div>
          <div className="text">I love you !!</div>
        </>
      ) : (
        <>
          <div className="gif-container">
            <img
              alt="hearts"
              src="https://tenor.com/view/goma-goma-cat-goma-peach-goma-peach-love-peach-and-goma-gif-10012230355003332465.gif"
            />
          </div>

          <div className="text">Will you be my Valentine, darling?</div>
          <div>
            <button
              className="yes-button"
              onClick={() => setYesPressed(true)}
              style={{ fontSize: yesButtonSize }}
            >
              Yes
            </button>
            <button className="no-button" onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
