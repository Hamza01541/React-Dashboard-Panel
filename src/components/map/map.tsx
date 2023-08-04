import { useEffect } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

const MapComponent = () => {
  let map: L.Map;
  const initializeMap = () => {
    const mapEL = document.getElementById("map");
    if (mapEL) {
      if (!map) {
        map = L.map(mapEL).setView([51.505, -0.09], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "",
        }).addTo(map);
      }
    }
  };

  useEffect(() => {
    if (!map) {
      initializeMap();
    }
  }, []);

  return <div id="map" className="map-container" ></div>;
};

export default MapComponent;
