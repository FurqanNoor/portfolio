"use client";

import React from "react";
import dynamic from "next/dynamic";
import "./MapBlock.css";

// Dynamically import LeafletMap component (client-side only)
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false, // Disable SSR for this component
});

const MapBlock: React.FC = () => {
  return (
    <div className="col-span-3">
      <div
        className="relative sm:h-full h-24 w-full flex flex-col justify-between overflow-hidden rounded-xl transform-gpu bg-zinc-900"
        style={{ border: "none", cursor: "pointer" }}
      >
        <LeafletMap />
      </div>
    </div>
  );
};

export default MapBlock;
