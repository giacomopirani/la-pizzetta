import L, { type LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "motion/react";
import { SiGooglemaps } from "react-icons/si";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerIconPiazzetta from "../assets/logo-pizzeria.png";

const position: LatLngExpression = [43.95832110261532, 12.742496005883467];
const nomePizzeria = "La Pizzetta";
const locationPizzeria = "Via Giuseppe di Vittorio, 9, 47841 Cattolica RN";

const customIcon = new L.Icon({
  iconUrl: markerIconPiazzetta,
  iconSize: [90, 80],
  iconAnchor: [10, 80],
  popupAnchor: [0, -80],
  className: "cursor-pointer",
});

const MapSection = () => {
  return (
    <section className="w-full flex flex-col items-center space-y-4 pb-6 border-t-[#AA9782] border-1">
      <div className="text-center mb-6 mt-14">
        <motion.h2
          className="text-3xl md:text-4xl font-bold uppercase text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          dove siamo
        </motion.h2>
        <motion.div
          className="mt-3 h-1.5 w-32 bg-[#b19173] mx-auto rounded"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
      {/* Mappa */}
      <div className="w-full border border-gray-200 shadow-md overflow-hidden">
        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={false}
          className="h-[300px] sm:h-[400px] w-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <div className="text-center">
                <p
                  className="text-black font-semibold text-base mb-1"
                  style={{ fontFamily: "Hoverage, sans-serif" }}
                >
                  🍕 La Pizzetta
                </p>

                <hr className="my-1" />
                <p className="text-xs text-gray-600 leading-tight">
                  Via Giuseppe di Vittorio, 9<br />
                  47841 Cattolica RN
                </p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Bottone alternativo sotto la mappa */}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          nomePizzeria + " " + locationPizzeria
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1 bg-green-600 hover:bg-green-800 text-white px-6 py-2 rounded-md text-sm transition shadow-md"
      >
        <SiGooglemaps size={20} />
        Apri su Google Maps
      </a>
    </section>
  );
};

export default MapSection;
