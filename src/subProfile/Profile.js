//import logo from './logo.svg';
import { useState } from 'react';
import classes from './Profile.module.css';
import { HiOutlinePencil } from "react-icons/hi";
import { FiCamera } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";

export default function Profile() {
    
    const [newusername, setNewusername] = useState("username");

  return (
    <div className={classes.backGround}>
        <div className={classes.contentbg}>
            <div className={classes.contentBlock}>
                <div>
                <lebel className={classes.head1}>โปรไฟล์</lebel>
                <hr className={classes.line}></hr>
                {/* <input type="file" className={classes.profileBtn} /> */}
                <button className={classes.profileBtn}><FiCamera size={50}/></button>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <label className={classes.lbl1}>Username </label>
                <div className={classes.inp1} style={{display: "inline-block"}}>
                    <input type="text" className={classes.realinp}
                    value={newusername} onChange={(e) => setNewusername(e.target.value)} />
                    <lebel className={classes.inpicon}><HiOutlinePencil/></lebel>
                </div>
                <br/>
                <label className={classes.lbl2}>Email </label>
                <div className={classes.inp2} style={{display: "inline-block"}}>
                    {"email"}
                </div>
                    <button className={classes.btnSave} onClick={() => save(newusername)}>บันทึกข้อมูล</button>
            </div>
        </div>
        <div className={classes.backBanner}>
            <button className={classes.btnHome} onClick={() => goHome()}><AiFillHome size={40}/></button>
            <button className={classes.btnOut} onClick={() => logOut(newusername)}>ออกจากระบบ</button>
        </div>
    </div>
  );
}

function save(newusername) {
    if(newusername!=''){
        console.log('Save ' + newusername +' '+"email");
    }
}

function logOut(username) {
    console.log('Log out... '+username);
    window.location.href='/Login';
}
function goHome() {
    window.location.href='/Home';
}



