import { useEffect, useRef } from "react";
import L from "leaflet";
import $ from "jquery";

// import Leaflet CSS
import "leaflet/dist/leaflet.css";

// import the plugin’s CSS and JS
import "../lib/leaflet-weather/Leaflet.Weather.css";
import "../lib/leaflet-weather/Leaflet.Weather.js";

const WeatherMap = ({ apiKey, center = [-34.5817, -58.4244], zoom = 13 }) => {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    // initialize map once
    if (!mapInstance.current) {
      mapInstance.current = L.map(mapContainer.current).setView(center, zoom);

      // add OSM tile layer
      L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      // add the weather control
      L.control.weather({ apiKey }).addTo(mapInstance.current);
    }

    // cleanup on unmount
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [apiKey, center, zoom]);

  return (
    <div
      ref={mapContainer}
      className="w-full rounded-2xl"
      style={{
        width: "100%",
        height: "90vh",
        minHeight: "400px",
        maxHeight: "900px",
      }}
      id="weather-map"
    />
  );
};

export default WeatherMap;
