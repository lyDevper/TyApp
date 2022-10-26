import { useState } from 'react';
import classes from './Noti.module.css';

export default function Noti() {
    const [modal, setModal] = useState(false);
    const openClose = ({modal})=>{
      setModal(!modal);
    }
    const outside = ()=>{
      setModal(false);
    }
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

return (
    <>
        {/* popup */}
      <button className={classes.circleBtn1+' '+classes.notiBtn} onClick={openClose}>
        <span class="material-symbols-rounded">notifications</span>
      </button>
      {modal && (
        <div className={classes.modal}>
            <div onClick={outside} className={classes.overlay}></div>
            <div className={classes.backGround}>
            <div className={classes.box}><div className={classes.read}> aaaa เข้าร่วมevent บุฟเฟ่ต์ร้าน66666666666</div></div>
            <div className={classes.box}><div className={classes.read}>ร้องเกะMBK เริ่มในอีก 3 ชั่วไมง</div></div>
            <div className={classes.box}><div className={classes.unread}>bb เข้าร่วมevent วอลเลย์บอลตึกร้อย</div></div>
            <div className={classes.box}><div className={classes.unread}>cc เข้าร่วมevent วอลเลย์บอลตึกร้อย</div></div>
            <div className={classes.box}><div className={classes.unread}>ร้องเกะMBK เริ่มในอีก 1 วัน</div></div>
            <div className={classes.box}><div className={classes.unread}>ร้องเกะMBK เริ่มในอีก 3 วัน</div></div>
            <div className={classes.box}><div className={classes.unread}>omg เข้าร่วมevent ร้องเกะMBK</div></div>
            </div>
        </div>
      )
    }
    </>
  )
}
function toggleModal(ftype,date1,date2,modal,setModal) {
  console.log('Type Filter :' + ftype);
  console.log('Date '+date1+' to '+date2);
  setModal(!modal);
};


