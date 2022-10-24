import { useState } from 'react';
import classes from './HeadPanel.module.css';

import { FaMapMarkedAlt,  } from "react-icons/fa";

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
      <button className={classes.transparentBtn1+' '+classes.filterBtn}>
        <span class="material-symbols-rounded">filter_alt</span>
      </button>
      {/*chat button with mail icon*/}
      <button className={classes.transparentBtn1+' '+classes.chatBtn}>
        <span class="material-symbols-rounded">mail</span>
      </button>
      {/*noti button, circle*/}
      <button className={classes.circleBtn1+' '+classes.notiBtn}>
        <span class="material-symbols-rounded">notifications</span>
      </button>
      {/*profile button, circle*/}
      <button className={classes.circleBtn1+' '+classes.profileBtn}>
        <span class="material-symbols-rounded">person</span>
      </button>

    </div>
  );
}

export default HeadPanel;