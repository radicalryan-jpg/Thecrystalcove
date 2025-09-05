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

          {/* ----- CABIN HOTSPOT (drives window/door pane glows) ----- */}
          <div
            className="hot-cabin"
            onMouseEnter={() => setHoverCabin(true)}
            onMouseLeave={() => setHoverCabin(false)}
          />

          {/* 8 small pane glows (4 in each window). They only show when hoverCabin=true */}
          {/* Left window panes */}
          <div className={`paneGlow pL1 ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`paneGlow pL2 ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`paneGlow pL3 ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`paneGlow pL4 ${hoverCabin ? "on" : ""}`} aria-hidden />
          {/* Right/front window panes */}
          <div className={`paneGlow pR1 ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`paneGlow pR2 ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`paneGlow pR3 ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`paneGlow pR4 ${hoverCabin ? "on" : ""}`} aria-hidden />

          {/* ----- CRYSTAL HOTSPOT (drives cave interior glow) ----- */}
          <div
            className="hot-crystal"
            onMouseEnter={() => setHoverCrystal(true)}
            onMouseLeave={() => setHoverCrystal(false)}
          />
          {/* Soft, additive light inside the cave */}
          <div className={`caveGlow ${hoverCrystal ? "on" : ""}`} aria-hidden />

        </div>
      </div>
    </div>
  );
}


