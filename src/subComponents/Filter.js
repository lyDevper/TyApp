import { useState } from 'react';
import classes from './Filter.module.css';

function Filter() {
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
    const [ftype , setFtype] = useState('กีฬา');
    const [date1 , setDate1] = useState('');
    const [date2 , setDate2] = useState('');
return (
    <>
        {/* popup */}
      <button className={classes.transparentBtn1+' '+classes.filterBtn } onClick={openClose}>
        <span class="material-symbols-rounded">filter_alt</span>
      </button>

      {modal && (
        <div className={classes.modal}>
            <div onClick={outside} className={classes.overlay}></div>
            <div className={classes.backGround}>
            {/* type */}
            <label className={classes.lbl1}>ประเภท :</label>
            <select name="type" className={classes.inp2} value = {ftype}
                onChange={(e) => setFtype(e.target.value)}>
                <option value="กีฬา">กีฬา</option>
                <option value="อาหาร">อาหาร</option>
                <option value="บิวตี้">บิวตี้</option>
            </select>
            {/* date1 */}
            <br/>
            <label className={classes.lbl1}>วันที่ </label>
            <input type="date" className={classes.inp1}
            value={date1} onChange={(e) => setDate1(e.target.value)} />
            {/* date2 */}
            <label className={classes.lbl1}>&nbsp;&nbsp; ถึง </label>
            <input type="date" className={classes.inp1}
            value={date2} onChange={(e) => setDate2(e.target.value)} />
            {/* button (ยังไม่ได้create data)*/}
            <br/>
            <div >
                <button className={classes.btn1} onClick={()=>toggleModal(ftype,date1,date2,modal,setModal)}>ตกลง</button>
            </div>
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
export default Filter;

