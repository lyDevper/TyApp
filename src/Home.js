import { useState } from "react";
import classes from "./Home.module.css";

<<<<<<< Updated upstream
import HeadPanel from './subComponents/HeadPanel';
import NewEvent from './subComponents/NewEvent';
import EventCard from './subComponents/EventCard';
import Filter from './subComponents/Filter';
||||||| constructed merge base
import NewEvent from './subComponents/NewEvent';
import EventCard from './subComponents/EventCard';
import Filter from './subComponents/Filter';
=======
import NewEvent from "./subComponents/NewEvent";
import EventCard from "./subComponents/EventCard";
import Filter from "./subComponents/Filter";
>>>>>>> Stashed changes

import { FaMapMarkedAlt } from "react-icons/fa";

let testData1 = {
  event_id: "1232132",
  user_id: "7878494",
  event_name: "ตี้ตีแบด",
  category: "กีฬา",
  date: "11/12/2022",
  start_time: "13:00",
  end_time: "16:00",
  location: {
    title: "SP Complex",
    x: 101.273,
    y: 8.452,
  },
  amount: 4,
  etc: "เอาไม้แบดมาด้วย แล้วเอาร่มมาด้วยเผื่อฝนตกจะได้ไปกินข้าวต่อ",
  noti: false,
};
let testData2 = {
  event_id: "4568712",
  user_id: "589546",
  event_name: "เล่นไพ่",
  category: "นัทนาการ",
  date: "18/11/2022",
  start_time: "13:00",
  end_time: "16:00",
  location: {
    title: "จามไนน์",
    x: 101.273,
    y: 8.452,
  },
  amount: 4,
  etc: "",
  noti: true,
};

let testData3 = 
{
  event_id : '713243',
  user_id : '054643',
  event_name : 'เล่นไพ่',
  category : 'นัทนาการ',
  date : '18/11/2022',
  start_time : '13:00',
  end_time : '16:00',
  location : {
      title : 'จามไนน์',
      x : 101.273,
      y : 8.452
  },
  amount : 4,
  etc : '',
  noti : true
}
//test of received data as a list of json
let eventDataList = [testData1, testData2,testData3];

function Home() {
  //const [username, setUserame] = useState('');

  return (
    <div className={classes.backGround}>
<<<<<<< Updated upstream
        <div className={classes.headPanel}>
        <HeadPanel></HeadPanel>
        </div>
        <div className={classes.contentDiv}>
          <div className={classes.headBtnDiv} >

            {/* map button*/}
            <button className={classes.mapBtn} onClick={()=>goMap()}>
              <FaMapMarkedAlt size={30}/>
            </button>
          <br/>
          <br/>
          </div>
          <div className={classes.eventCards}>
            {
              //redering many EventCard components by passing eventData as a props and must pass some unique key
              eventDataList.map((eventData) => 
              (<EventCard key={eventData.event_id} eventData={eventData}></EventCard>))
            }
          </div>
          <div className={classes.frontGround}>
              <NewEvent></NewEvent>
          </div>
                    
||||||| constructed merge base
        <div className={classes.searchPanel}></div>
        <div className={classes.contentDiv}>
          <div className={classes.headBtnDiv}>
            <NewEvent></NewEvent>
            <button className={classes.mapBtn}>
              <FaMapMarkedAlt></FaMapMarkedAlt>
            </button>
            
          </div>

          <div className={classes.eventCards}>
            {
              //redering many EventCard components by passing eventData as a props and must pass some unique key
              eventDataList.map((eventData) => 
              (<EventCard key={eventData.event_id} eventData={eventData}></EventCard>))
            }
          </div>
                    
=======
      <div className={classes.searchPanel}></div>
      <div className={classes.contentDiv}>
        <div className={classes.headBtnDiv}>
          <NewEvent></NewEvent>
          <button className={classes.mapBtn}>
            <FaMapMarkedAlt></FaMapMarkedAlt>
          </button>
        </div>

        <div className={classes.eventCards}>
          {
            //redering many EventCard components by passing eventData as a props and must pass some unique key
            eventDataList.map((eventData) => (
              <EventCard
                key={eventData.event_id}
                eventData={eventData}
              ></EventCard>
            ))
          }
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
}
<<<<<<< Updated upstream
function goMap(){
  window.location.href='/Map';
}


||||||| constructed merge base



=======

>>>>>>> Stashed changes
export default Home;
