import React from "react";
import { useState } from 'react'
import { useMapEvents } from "react-leaflet";
import { MapContainer, TileLayer,Popup,Marker,Circle} from 'react-leaflet';
import './Map.css';


function Map() {
  return (
    <MapContainer center={[13.73826 ,100.532413]} zoom={18} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker />
  </MapContainer>
  );
}
function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)

      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Circle center={position} radius={60} />
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default Map