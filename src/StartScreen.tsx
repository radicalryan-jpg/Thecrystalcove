import React, { useState } from "react";
import "./StartScreen.css";
import bg from "./assets/the-crystal-cove.png";

/** Optional callbacks are props in case you want to wire navigation later. */
export default function StartScreen({
  onHearthClick,
  onCrystalClick,
}: {
  onHearthClick?: () => void;
  onCrystalClick?: () => void;
}) {
  const [hoverCabin, setHoverCabin] = useState(false);
  const [hoverCrystal, setHoverCrystal] = useState(false);

  return (
    <div className="viewport">
      <div className="scene-1080p" style={{ backgroundImage: `url(${bg})` }}>
        <div className="ui-layer">
          {/* ---------- Cabin hotspot (windows + door glow + tooltip) ---------- */}
          <div
            className="hot-cabin"
            aria-label="Hearth hotspot"
            onMouseEnter={() => setHoverCabin(true)}
            onMouseLeave={() => setHoverCabin(false)}
            onClick={() => onHearthClick?.()}
          />

          {/* Window & door glows (only visuals; follow your PNG) */}
          <div className={`windowGlow windowLeft ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`windowGlow windowFront ${hoverCabin ? "on" : ""}`} aria-hidden />
          <div className={`doorGlow ${hoverCabin ? "on" : ""}`} aria-hidden />

          {/* Tooltip near cabin when hovering */}
          {hoverCabin && (
            <div className="tooltip tooltip-cabin" role="note">
              Enter Hearth — tips & rest
            </div>
          )}

          {/* ---------- Crystal hotspot (cluster glow + tooltip) ---------- */}
          <div
            className="hot-crystal"
            aria-label="Crystal Cove hotspot"
            onMouseEnter={() => setHoverCrystal(true)}
            onMouseLeave={() => setHoverCrystal(false)}
            onClick={() => onCrystalClick?.()}
          />
          <div className={`crystalGlow ${hoverCrystal ? "on" : ""}`} aria-hidden />

          {hoverCrystal && (
            <div className="tooltip tooltip-crystal" role="note">
              Enter Crystal Cove
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

