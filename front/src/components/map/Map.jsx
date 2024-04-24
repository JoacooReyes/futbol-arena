// import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-icon.png";

// const iconUbication = new L.icon({
//   iconUrl: icon,
//   iconShadow: iconShadow,
//   iconSize: [20, 40],
//   iconAnchor: [22, 94],
//   shadowAnchor: [22, 94],
//   popupAnchor: [-3, -76],
// });

export const Map = () => {
  return (
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0942592295423!2d-65.20888017330601!3d-26.83695412192995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0e8d0271b7%3A0x7946062ac490db30!2sGral.%20Paz%20576%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1713913981277!5m2!1ses!2sar" width="600" height="450" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full md:h-96 rounded-lg"></iframe>
      {/* <MapContainer
        center={[-26.8355457, -65.2098187]}
        zoom={15}
        scrollWheelZoom={false}
        className="w-400 h-250"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-26.8355457, -65.2098187]} icon={iconUbication}>
          <Popup>
            Futbol Arena
          </Popup>
        </Marker>
      </MapContainer> */}
    </div>
  );
};
