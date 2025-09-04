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


        {/* Crystal outline overlay (matches shards; glows on hover) */}
<svg
  className={`sc-crystalOutline ${hoverCrystal ? "on" : ""}`}
  viewBox="0 0 100 100"
  aria-hidden
>
  {/* center tall shard */}
  <path
    className="sc-crystalPath"
    d="M50 14 L58 38 L58 70 L42 70 L42 38 Z"
  />
  {/* left large shard */}
  <path
    className="sc-crystalPath"
    d="M33 35 L39 48 L39 72 L27 72 L27 52 Z"
  />
  {/* right large shard */}
  <path
    className="sc-crystalPath"
    d="M67 35 L73 52 L73 72 L61 72 L61 48 Z"
  />
  {/* far-left small shard */}
  <path
    className="sc-crystalPath"
    d="M23 48 L28 58 L28 70 L20 70 L20 60 Z"
  />
  {/* far-right small shard */}
  <path
    className="sc-crystalPath"
    d="M77 48 L82 60 L82 70 L74 70 L74 58 Z"
  />
  {/* base chips (optional accents) */}
  <path className="sc-crystalChip" d="M36 72 L41 76 L34 76 Z" />
  <path className="sc-crystalChip" d="M64 72 L69 76 L62 76 Z" />
</svg>


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
