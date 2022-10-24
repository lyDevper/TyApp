import React from "react";
import { useState } from 'react'
import classes from './Home.module.css';
import { useMapEvents } from "react-leaflet";
import EventCard from './subComponents/EventCard';
import { MapContainer, TileLayer,Popup,Marker,Circle,CircleMarker} from 'react-leaflet';
import './Map.css';
import {AiFillHome} from "react-icons/ai"

let testData1 = 
{
  event_id : '1232132',
  user_id : '7878494',
  event_name : 'ตี้ตีแบด',
  category : 'กีฬา',
  date : '11/12/2022',
  start_time : '13:00',
  end_time : '16:00',
  location : {
      title : 'SP Complex',
      x : 13.7385,
      y : 100.53496
  },
  amount : 4,
  etc : 'เอาไม้แบดมาด้วย แล้วเอาร่มมาด้วยเผื่อฝนตกจะได้ไปกินข้าวต่อ',
  noti : false
}
let testData2 = 
{
  event_id : '4568712',
  user_id : '589546',
  event_name : 'หาตี้พาราโบลา',
  category : 'นัทนาการ',
  date : '18/11/2022',
  start_time : '13:00',
  end_time : '16:00',
  location : {
      title : 'ลานเกียร์',
      x : 13.73726,
      y : 100.53341
  },
  amount : 4,
  etc : '',
  noti : true
}

let eventDataList = [testData1, testData2];
function Map() {
  return (
    <MapContainer center={[13.73826 ,100.532413]} zoom={18} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MarkerEvents />
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
      <Circle center={position} radius={30} />
      <Popup>You are here</Popup>
    </Marker>
  )
}
function MarkerEvents() {
  return (
              //redering many EventCard components by passing eventData as a props and must pass some unique key
      eventDataList.map((eventData) => 
      <Marker position={[eventData.location.x,eventData.location.y]} >
            <Popup className="backpop">
              <EventCard key={eventData.event_id} eventData={eventData}></EventCard>
            </Popup>
      </Marker>
  ))
}

export default Map;
