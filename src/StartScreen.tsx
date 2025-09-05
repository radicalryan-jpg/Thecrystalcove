import React, { useState } from "react";
import "./StartScreen.css";
import bg from "./assets/the-crystal-cove.png";

export default function StartScreen() {
  const [started, setStarted] = useState(false);

  return (
    <div className="viewport">
      {/* 1920x1080 logical stage with your background */}
      <div className="scene-1080p" style={{ backgroundImage: `url(${bg})` }}>
        {!started && (
          <div className="ui-layer">
            <button
              className="play-btn"
              onClick={() => setStarted(true)}
              aria-label="Play"
            >
              Play
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


