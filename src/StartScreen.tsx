import React, { useState, useEffect } from "react";
import "./StartScreen.css";
import bg from "./assets/the-crystal-cove.png";

export default function StartScreen() {
  // Keep a started flag only if you still want to react to Play
  const [started, setStarted] = useState(false);

  // provide the bg to CSS so we can use background-size zooming
  useEffect(() => {
    document.documentElement.style.setProperty("--sc-bg", `url(${bg})`);
  }, []);

  return (
    <div className="sc-root">
      {/* Title is baked into the image.
          We only render the Play button and place it below the title area. */}
      {!started && (
        <div className="sc-titleWrap">
          <button
            className="sc-playBtn"
            onClick={() => setStarted(true)}
            aria-label="Play"
          >
            Play
          </button>
        </div>
      )}

      {/* All highlight/hot-zone/tooltip elements have been REMOVED */}
    </div>
  );
}

