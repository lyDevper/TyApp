import { useState } from 'react';
import classes from './EventCard.module.css';

/*//data format
let d = 
{
    event_id : '1232132',
    user_id : '7878894',
    event_name : 'ตี้ตีแบด',
    category : 'กีฬา',
    date : '11/12/2022',
    start_time : '13:00',
    end_time : '16:00',
    location : {
        title : 'SP Complex',
        x : 101.273,
        y : 8.452
    },
    amount : 4,
    etc : 'เอาไม้แบดมาด้วย แล้วเอาร่มมาด้วยเผื่อฝนตกจะได้ไปกินข้าวต่อ',
    noti : false
}
*/

function EventCard(props) {
    //const [username, setUserame] = useState('');
    
    const eventData = props.eventData; //get eventData object from pased props

    return (
        <div className={classes.card}>            
            <div className={classes.leftBanner}>
                <div className={classes.bannerStripe}>
                    {eventData.category}
                </div>                
            </div>
            <div className={classes.rightBck}>
                <h2 className={classes.cardTitle}>{eventData.event_name}</h2>
                <hr className={classes.hr1}/>

                <ul className={classes.detailUl}>
                    <ListItem lblText={'สถานที่'} detailText={eventData.location.title}></ListItem>
                    <ListItem lblText={'เวลา'} 
                    detailText={eventData.date + ' (' + eventData.start_time + ' - ' + eventData.end_time + ')'}></ListItem>
                    <ListItem lblText={'จำนวนคน'} detailText={eventData.amount}></ListItem>
                    <ListItem lblText={'รายละเอียดเพิ่มเติม'} detailText={eventData.etc}></ListItem>
                </ul>

                <button className={classes.joinBtn+' '+classes.pushedBtn} onClick={()=>goChat()}>เข้าร่วม</button>
            </div>            
        </div>
    );
}

//component of li used only for a line of detail in this file
function ListItem({lblText, detailText}) {
    return (
        <li>
            <label className={classes.detailLbl}>
                {lblText}
                <a>&nbsp;:&nbsp;&nbsp;&nbsp;</a>
            </label>            
            <a className={classes.detailTxt}>{detailText}</a>
        </li>
    )
}
function goChat(){
    window.location.href='/Chat';
  }

export default EventCard;
