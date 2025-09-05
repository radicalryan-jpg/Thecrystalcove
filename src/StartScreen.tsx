import React, { useState } from "react";
import "./StartScreen.css";
import bg from "./assets/the-crystal-cove.png";

export default function StartScreen() {
  const [hoverCabin, setHoverCabin] = useState(false);
  const [hoverCrystal, setHoverCrystal] = useState(false);

  return (
    <div className="viewport">
      <div className="scene-1080p" style={{ backgroundImage: `url(${bg})` }}>
        <div className="ui-layer">
          {/* ---------- CABIN HOTSPOT (drives 8 pane glows) ---------- */}
          <div
            className="hot-cabin"
            aria-label="Hearth"
            onMouseEnter={() => setHoverCabin(true)}
            onMouseLeave={() => setHoverCabin(false)}
            onClick={() => console.log("Go to Hearth")}
          />

          {/* 8 small pane glows (4 per window) */}
          {/* Left window panes (TL, TR, BL, BR) */}
          <div className={`paneGlow pL1 ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`paneGlow pL2 ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`paneGlow pL3 ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`paneGlow pL4 ${hoverCabin ? "on" : ""}`} aria-hidden />
          {/* Right/front window panes (TL, TR, BL, BR) */}
          <div className={`paneGlow pR1 ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`paneGlow pR2 ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`paneGlow pR3 ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`paneGlow pR4 ${hoverCabin ? "on" : ""}`} aria-hidden />

          {/* ---------- CRYSTAL/CAVE HOTSPOT ---------- */}
          <div
            className="hot-crystal"
            aria-label="Crystal Cove"
            onMouseEnter={() => setHoverCrystal(true)}
            onMouseLeave={() => setHoverCrystal(false)}
            onClick={() => console.log("Enter Crystal Cove")}
          />

          {/* Cave interior glow (polygon clipped) */}
          <div className={`caveGlowShape ${hoverCrystal ? "on" : ""}`} aria-hidden />
        </div>
      </div>
    </div>
  );
}
