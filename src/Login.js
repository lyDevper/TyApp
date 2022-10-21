//import logo from './logo.svg';
import { useState } from 'react';
import './Login.css';

function Login() {
    const [username, setUserame] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='backGround'>
        <div className='backBanner'>            
        </div>
        <div className='signInBox'>
            <h2 className='head1'>เข้าสู่ระบบ</h2>

            <label className='lbl1'>Email :</label>
            <input type="Email" className='inp1'
            value={username} onChange={(e) => setUserame(e.target.value)} />

            <label className='lbl1'>Password :</label>
            <input type="Password" className='inp1'
            value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className='buttonDiv'>
                <button className='btn1' onClick={goSignUp(username, password)}>สมัครสมาชิก</button>
                <button className='btn1' onClick={goSignIn(username, password)}>เข้าสู่ระบบ</button>
            </div>
        </div>
    </div>
  );
}

function goSignIn(username, password) {
    console.log('Signing in...' + username);
    console.log(password);
}

function goSignUp(username, password) {
    console.log('Signing up...');
}

export default Login;
