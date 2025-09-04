import React, { useState } from "react";
import "./StartScreen.css";

/**
 * Props:
 *  - bg: background image (your Crystal Cove art)
 *  - onStart?: callback when Play is clicked (optional)
 */
export default function StartScreen({
  bg,
  onStart,
}: {
  bg: string;
  onStart?: () => void;
}) {
  const [started, setStarted] = useState(false);
  const [hoverCabin, setHoverCabin] = useState(false);
  const [hoverCrystal, setHoverCrystal] = useState(false);
  const [hoverInfo, setHoverInfo] = useState(false);

  const handleStart = () => {
    setStarted(true);
    onStart?.();
  };

  return (
    <div
      className="sc-root"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Title + Play (fade out after click) */}
      <div className={`sc-titleWrap ${started ? "sc-fadeOut" : ""}`}>
        <button className="sc-playBtn" onClick={handleStart} aria-label="Play">
          Play
        </button>
      </div>

      {/* Interactive overlays (active after Play) */}
      {started && (
        <>
         {/* Cabin glow overlay (SVG so it matches the cabin + roof shape) */}
          <svg
          className={`sc-cabinGlow ${hoverCabin ? "on" : ""}`}
          viewBox="0 0 100 100"
            aria-hidden
            >
          {/* House body + roof peak (adjust points if needed) */}
              <path d="M15 65 L15 42 L50 25 L85 42 L85 65 Z" />
              </svg>

          {/* Crystal glow overlay */}
          <div
            className={`sc-glow ${hoverCrystal ? "sc-glowCrystalOn" : "sc-glowCrystal"}`}
            aria-hidden
          />

          {/* Invisible hot-zones for hover detection */}
          <button
            aria-label="Cabin"
            className="sc-hotCabin"
            onMouseEnter={() => setHoverCabin(true)}
            onMouseLeave={() => setHoverCabin(false)}
          />
          <button
            aria-label="Crystal entrance"
            className="sc-hotCrystal"
            onMouseEnter={() => setHoverCrystal(true)}
            onMouseLeave={() => setHoverCrystal(false)}
          />

          {/* Info button + tooltip (blue i) */}
          <div className="sc-infoWrap">
            <button
              aria-label="Info"
              className="sc-infoBtn"
              onMouseEnter={() => setHoverInfo(true)}
              onMouseLeave={() => setHoverInfo(false)}
            >
              i
            </button>
            <div className={`sc-tooltip ${hoverInfo ? "sc-tooltipOn" : ""}`}>
              for those that want guides
            </div>
          </div>
        </>
      )}
    </div>
  );
}
