import React from 'react'
import logo from '../assets/images/logoW.svg';
import './Login.css'
import apple from '../assets/images/apple.svg'
import google from '../assets/images/google.svg'
import facebook from '../assets/images/facebook.svg'
import phone from '../assets/images/phone.svg'

export default function Login({ onClose }) {
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
          <img src={logo} alt="logo" style={{height: '35px'}}/>
          <h3 style={{fontWeight: 'bold', fontSize: '30px'}}>Login to spotify</h3>
        </div>

        <div className='with'>
          <button><img src={google} alt="" /> Continue with Google</button>
          <button><img src={facebook} alt="" /> Continue with Facebook</button>
          <button><img src={apple} alt="" /> Continue with Apple</button>
          <button><img src={phone} alt="" /> Continue with phone number</button>
        </div>

        <div className='divider-horiz'></div>
        <div className='input-group'>
          <label htmlFor="email">Email or username</label>
          <input type="text" placeholder="Email or username" />
        </div>

        <button className='continue-btn'>Continue</button>
        {/* <button
          style={{ marginTop: "15px", background: "transparent", color: "#bbb", border: "none", cursor: "pointer" }}
          onClick={onClose}
        >
          Close
        </button> */}

        <div className='signup-switch'>Don't have an account? <button>Sign up for Spotify.</button></div>
      </div>
    </ div>
      )
}
