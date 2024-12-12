// LeafletMap.tsx
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const map = L.map("map", {
        center: [60.4522, 22.267],
        zoom: 12,
        zoomControl: false,
        attributionControl: false,
      });

      L.tileLayer(
        `https://api.maptiler.com/maps/basic-v2-dark/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`
      ).addTo(map);

      const avatarIcon = L.divIcon({
        className: "custom-avatar-icon",
        html: `
          <div style="
            display: flex; 
            align-items: center; 
            justify-content: center; 
            width: 60px; 
            height: 60px; 
            border-radius: 50%; 
            background: #e4e4e7; 
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
            padding: 0; 
            margin: 0;">
              <img src="/pfp.jpg" alt="avatar" style="
                width: 50px; 
                height: 50px; 
                border-radius: 50%; 
                display: block; 
                padding: 0; 
                margin: 0;">
          </div>`,
      });

      L.marker([60.4518, 22.2666], { icon: avatarIcon }).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <div
      id="map"
      className="absolute inset-0 rounded-xl leaflet-container"
      style={{ height: "100%", border: "none", background: "transparent" }}
    ></div>
  );
};

export default LeafletMap;
