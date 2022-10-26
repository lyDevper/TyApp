import { useState } from 'react';
import classes from './NewEvent.module.css';

import { AiOutlinePlus } from "react-icons/ai";

function NewEvent() {
    const [modal, setModal] = useState(false);
  
    const openClose = ({modal}) => {
      setModal(!modal);
    };
    const outside = () => {
      setModal(false);
    }
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    const [eventname , setEventname] = useState('');
    const [type , setType] = useState('กีฬา');
    const [date , setDate] = useState('');
    const [time , setTime] = useState('');
    const [place , setPlace] = useState('');
    const [amount , setAmount] = useState('');
    const [other , setOther] = useState('');
    const [noti , setNoti] = useState(false);

return (
    <>
        {/* popup */}
      <button onClick={openClose} className={classes.newEventBtn}>
       <AiOutlinePlus size={30}/>
      </button>

      {modal && (
        <div className={classes.modal}>
            <div onClick={outside} className={classes.overlay}></div>
            <div className={classes.backGround}>
            <h2 className={classes.head1}>สร้างนัดใหม่</h2>
            {/* eventname */}
            <label className={classes.lbl1}>Event &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
            <input type="text" className={classes.inp1}
            value={eventname} onChange={(e) => setEventname(e.target.value)} />
            <br/>
            {/* type */}
            <label className={classes.lbl1}>ประเภท &nbsp;&nbsp;&nbsp;&nbsp;:</label>
            <select name="type" className={classes.inp1}
            value = 'type'
            onChange={(e) => setType(e.target.value)}
            >
                <option value="กีฬา">กีฬา</option>
                <option value="อาหาร">อาหาร</option>
                <option value="บิวตี้">บิวตี้</option>
            </select>
            {/* date */}
            <br/>
            <label className={classes.lbl1}>วันที่ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
            <input type="date" className={classes.inp1}
            value={date} onChange={(e) => setDate(e.target.value)} />
            {/* time */}
            <br/>
            <label className={classes.lbl1}>เวลา &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
            <input type="time" className={classes.inp1}
            value={time} onChange={(e) => setTime(e.target.value)} />
            {/* place */}
            <br/>
            <label className={classes.lbl1}>สถานที่ &nbsp;&nbsp;&nbsp;&nbsp;:</label>
            <input type="text" className={classes.inp1}
            value={place} onChange={(e) => setPlace(e.target.value)} />
            {/* amount */}
            <br/>
            <label className={classes.lbl1}>จำนวนคน :</label>
            <input type="number" className={classes.inp1} min="2"
            value={amount} onChange={(e) => setAmount(e.target.value)} />
            {/* other */}
            <br/>
            <label className={classes.lbl1}>อื่นๆ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
            <input type="text" className={classes.inp1}
            value={other} onChange={(e) => setOther(e.target.value)} />
            {/* noti */}
            <br/>
            <label className={classes.container}>แจ้งเตือน
              <input type="checkbox" checked={noti} onChange={() => setNoti((prev) => !prev)}></input>
              <span className={classes.checkmark}></span>
            </label>
            {/* button (ยังไม่ได้create data) */}
            <button className={classes.btn1} onClick={()=>toggleModal(eventname,type,date,time,place,amount,other,noti,modal,setModal)}>สร้าง</button>
            </div>
        </div>
      )
    }
    </>
  )
}

async function toggleModal(eventname,type,date,time,place,amount,other,noti,modal,setModal){
  if (eventname!=''&&date!=''&&time!=''&&place!=''&&amount!=''){
    console.log('New Event')
    console.log('Event : '+ eventname)
    console.log('ประเภท : '+type)
    console.log('วันที่ : '+date)
    console.log('เวลา : '+time)
    console.log('สถานที่ : '+place)
    console.log('จำนวนคน : '+amount)
    console.log('อื่นๆ : '+other)
    console.log('แจ้งเตือน : '+noti)

    //posting data to api to create event
    const response = await fetch('/create_event', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        event_name: eventname,
        user_id: "557af66f0c1348448fd61a719425e742" ,
        category: type,
        date: date,
        start_time: time,
        end_time: time,
        location: {
        title: place,
        'x-coordinate': 102.556,
        'y-coordinate': 7.235
        },
        amount: amount,
        etc: other,
        noti: noti
      }
    )})
    console.log('response from posting new event: ' , response);

    setModal(!modal);
  }
};

export default NewEvent;
export {toggleModal};
