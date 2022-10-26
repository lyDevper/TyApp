import React from "react";
import { useState } from 'react'
import { MapContainer, TileLayer,Popup,Marker,Circle} from 'react-leaflet';
import './Mapevents.module.css';
import { useMapEvents } from "react-leaflet";
import {AiFillHome} from "react-icons/ai"
import classes from "./Mapevents.module.css"
function Mapevents() {
    return (
      <div>
      <MapContainer center={[13.73826 ,100.532413]} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <HandleClickMap/>
    </MapContainer>
    <div className="homeico" onClick={() => gHome()}><AiFillHome size={40}/></div>
    <div></div>
    </div>
    );
  }
  const HandleClickMap = () => {
    const [position, setPosition] = useState(null)
    // const [name, setName] = useState(null)
    const map = useMapEvents({
      click(e) {
        // setName(e.name)
        setPosition(e.latlng)
        map.flyTo(e.latlng)
        console.log(position);
        // console.log(name);
      },
    })
    return position === null ? null : (
      <Marker position={position}>
        <Popup className="backpop1">
           <button className={classes.btnSavelo} >ยืนยันจุดนัดพบ</button>
        </Popup>
      </Marker>
    )
  }
  function gHome(){
    window.location.href='/Home';
  }
    
  export default Mapevents;
