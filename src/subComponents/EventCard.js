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
        <div>
            Yeeeeehaaaaa
            <br />
            {eventData.event_name}
            <br />
            {eventData.category}
        </div>
    );
}

export default EventCard;
