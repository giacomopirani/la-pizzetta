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
      <div className="w-full border border-gray-200 shadow-md overflow-hidden mb-6">
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

      {/* Bottone animato con effetti avanzati */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Anello pulsante di sfondo */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Secondo anello con delay */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 opacity-20"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            nomePizzeria + " " + locationPizzeria
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-4 rounded-xl text-base font-semibold shadow-2xl overflow-hidden group cursor-pointer "
          whileHover={{
            scale: 1.05,
            boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.5)",
          }}
          whileTap={{
            scale: 0.98,
            boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.3)",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          {/* Effetto shimmer di sfondo */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />

          {/* Particelle fluttuanti */}
          <motion.div
            className="absolute top-1 left-4 w-1 h-1 bg-white/60 rounded-full"
            animate={{
              y: [0, -8, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.2,
            }}
          />
          <motion.div
            className="absolute top-2 right-6 w-1 h-1 bg-white/40 rounded-full"
            animate={{
              y: [0, -6, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.8,
            }}
          />

          {/* Icona con animazioni */}
          <motion.div
            className="relative z-10"
            whileHover={{
              rotate: [0, -10, 10, 0],
              scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
          >
            <SiGooglemaps size={24} className="drop-shadow-sm" />
          </motion.div>

          {/* Testo con effetto typewriter hover */}
          <motion.span
            className="relative z-10 tracking-wide"
            whileHover={{
              textShadow: "0 0 8px rgba(255,255,255,0.8)",
            }}
          >
            Apri su Google Maps
          </motion.span>

          {/* Indicatore visivo "clicca qui" */}
          <motion.div
            className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Bordo luminoso animato */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-white/30"
            animate={{
              borderColor: [
                "rgba(255,255,255,0.3)",
                "rgba(255,255,255,0.6)",
                "rgba(255,255,255,0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Effetto hover - onde concentriche */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100"
            initial={false}
            whileHover={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 0.6,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default MapSection;
