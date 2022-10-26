import { useState } from 'react';
import classes from './HeadPanel.module.css';
import Filter from './Filter'

import { FaMapMarkedAlt,  } from "react-icons/fa";
import Profile from '../subProfile/Profile';
import { faChildRifle } from '@fortawesome/free-solid-svg-icons';

function HeadPanel() {
  //const [username, setUserame] = useState('');    

  //using google font icon in span tags
  return (
    <div className={classes.PanelBck}>
      {/*searchBox and search inout*/}
      <div className={classes.searchBox}>
        <input type="text" className={classes.searchInput} />
        <button className={classes.transparentBtn1}>
          <span class="material-symbols-rounded">search</span>
        </button>
      </div>

      {/*filter button*/}
      <Filter></Filter>
      {/*chat button with mail icon*/}
      <button className={classes.transparentBtn1+' '+classes.chatBtn} onClick={()=>goChat()}>
        <span class="material-symbols-rounded">mail</span>
      </button>
      {/*noti button, circle*/}
      <button className={classes.circleBtn1+' '+classes.notiBtn}>
        <span class="material-symbols-rounded">notifications</span>
      </button>
      {/*profile button, circle*/}
      <button className={classes.circleBtn1+' '+classes.profileBtn} onClick={()=>goProfile()}>
        <span class="material-symbols-rounded">person</span>
      </button>

    </div>
  );
}
function goChat(){
  window.location.href='/Chat';
}
function goProfile(){
  window.location.href='/Profile';
}
export default HeadPanel;
