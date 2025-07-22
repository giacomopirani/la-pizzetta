import L, { type LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Fix per mostrare le icone dei marker in Vite/CRA
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
    .href,
});

const MapSection = () => {
  // Coordinate della tua pizzeria (modifica con quelle corrette)
  const position: LatLngExpression = [44.6488, 10.9254];

  return (
    <div className="w-full rounded-xl border border-gray-200 shadow-md overflow-hidden">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        className="h-[300px] sm:h-[400px] w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            🍕 <strong>Pizzeria del Corso</strong>
            <br />
            Via Garibaldi 10, Modena
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSection;
