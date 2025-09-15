import React, { useState } from 'react'
import logo from '../assets/images/logo.svg';
import home from '../assets/images/home.svg';
import search from '../assets/images/search.svg';
import browse from '../assets/images/browse.svg';
import install from '../assets/images/install.svg';
import { Link } from 'react-router';
import Login from './Login';
import Signup from './Signup';

export default function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    return (
        <div>
            <div className="header flex">
                <img src={logo} className="invert" id="logo" alt="logo" />

                <button className="home-btn">
                    <img src={home} className="invert" alt="home" />
                </button>

                <div className="search-container">
                    <img src={search} className="invert search-icon"
                        alt="search" />
                    <input type="text" placeholder="Search" />

                    {/* Divider Line */}
                    <div className="divider"></div>
                    <img src={browse} className="invert browse-icon"
                        alt="browse" />
                </div>

                <div className="nav">
                    <span>
                        <a href="https://www.spotify.com/in-en/premium/">Premium </a>
                        <a href="https://www.spotify.com/in-en/premium/">Support </a>
                        <a
                            href="https://www.spotify.com/in-en/premium/">Download </a>
                    </span>
                    <div className="nav-div">
                        <img src={install} className="nav-img invert" alt="install" />
                        <button className='install'>Install App</button>
                    </div>
                    <div className="buttons">
                        <button className="signup" onClick={() => setShowSignup(true)}>Sign up</button>
                        {showSignup && (<Signup onClose={() => setShowSignup(false)}
                            onSwitchToLogin={() => {
                                setShowSignup(false);
                                setShowLogin(true);
                            }} />)}
                        <button className="login" onClick={() => setShowLogin(true)}>Log in</button>
                        {showLogin && (<Login onClose={() => setShowLogin(false)}
                            onSwitchToSignup={() => {
                                setShowLogin(false);
                                setShowSignup(true);
                            }} />)}
                        {/* <Button href="/login">Link</Button>  */}

                        {/* <Link to="/login" className="login button-like" style={{textAlign:'center', justifyItems:'center' }} >Log in</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
