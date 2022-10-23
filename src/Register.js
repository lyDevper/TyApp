//import logo from './logo.svg';
import { useState } from 'react';
import classes from './Register.module.css';
import { FaUserAlt} from "react-icons/fa";
import { GrMail} from "react-icons/gr";
import { IoIosLock} from "react-icons/io";

function Register() {
    const [username, setUserame] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

  return (
    <div className={classes.backGround}>
        {/* <div className={classes.backBanner}>
        </div> */}
        <div className={classes.signUpBox}>
            <h2 className={classes.head1}>สมัครสมาชิก</h2>
            <label className={classes.lbl1}>Username <FaUserAlt/></label>
            <input type="text" className={classes.inp1}
            value={username} onChange={(e) => setUserame(e.target.value)} />


            <label className={classes.lbl1}>Email <GrMail size={17}/></label>
            <input type="Email" className={classes.inp1}
            value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className={classes.lbl1}>Password <IoIosLock size={20}/></label>
            <input type="Password" className={classes.inp1}
            value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className={classes.buttonDiv}>
                <button className={classes.btn1} onClick={() => signingUp(username, email,password)}>สมัครสมาชิก</button>
            </div>
        </div>
    </div>
  );
}

function signingUp(username, email ,password) {
    if (username!=''&&email!=''&&password!=''){
        console.log('Username : '+ username);
        console.log('Email : '+email);
        console.log('Password : '+password);
        window.location.href='/Home';
    }
}


export default Register;
