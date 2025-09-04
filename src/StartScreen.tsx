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
         // ...inside {started && ( <> ... </> )}
{/* Cabin window glows (subtle idle, brighter on hover) */}
<div className={`sc-windowGlow sc-windowLeft ${hoverCabin ? "on" : ""}`} aria-hidden />
<div className={`sc-windowGlow sc-windowFront ${hoverCabin ? "on" : ""}`} aria-hidden />


     

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
