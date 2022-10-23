//import logo from './logo.svg';
import { useState } from 'react';
import classes from './Login.module.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className={classes.backGround}>
        <div className={classes.backBanner}>
        </div>
        <div className={classes.signInBox}>
            <h2 className={classes.head1}>เข้าสู่ระบบ</h2>

            <label className={classes.lbl1}>Email :</label>
            <input type="Email" className={classes.inp1}
            value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className={classes.lbl1}>Password :</label>
            <input type="Password" className={classes.inp1}
            value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className={classes.buttonDiv}>
                <button className={classes.btn1} onClick={() => goSignUp()}>สมัครสมาชิก</button>
                <button className={classes.btn1} onClick={() => goSignIn(email, password)}>เข้าสู่ระบบ</button>
            </div>
        </div>
    </div>
  );
}

function goSignIn(email, password) {
    if(email!='' && password!=''){
        console.log('Signing in...' + email);
        console.log(password);
        window.location.href='/Home';
    }
}

function goSignUp() {
    console.log('Signing up...');
    window.location.href='/Register';
}

export default Login;
