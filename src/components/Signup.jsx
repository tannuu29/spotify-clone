import React from 'react'
import logo from '../assets/images/logoW.svg';
import './Login.css'
import apple from '../assets/images/apple.svg'
import google from '../assets/images/google.svg'

export default function Signup({ onClose, onSwitchToLogin }) {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("login-overlay")) {
            onClose();
        }
    };
    return (
        <div className="login-overlay" onClick={handleOverlayClick}>
            <div className='block' onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                <div>
                    <img src={logo} alt="logo" style={{ height: '35px' }} />
                    <h3 style={{ fontWeight: '900', fontSize: '50px' }}>Sign up to </h3>
                        <h3 style={{ fontWeight: '900', fontSize: '50px' }}>start listening </h3>
                </div>

                <div className='input-group'>
                    <label htmlFor="email" style={{color: '#fff'}}>Email address</label>
                    <input type="email" placeholder="name@domain.com" />
                </div>
                <button className='switch-btn'>Use phone number instead.</button>
                <button className='next-btn'>Next</button>

                <span style={{marginTop: '20px', fontWeight: '400'}}>or</span>
                <div className='with'>
                    <button><img src={google} alt="" /> Continue with Google</button>
                    <button><img src={apple} alt="" /> Continue with Apple</button>
                </div>

                <div className='signup-switch'>Already have an account?</div>
                <button onClick={onSwitchToLogin} style={{ marginTop: "15px", background: "transparent", color: "#fff", border: "none", cursor: "pointer" }}>Log in</button>
            </div>
        </ div>
    )
}