import React from 'react'
import create from '../assets/images/create.svg'
import './hero.css'

export default function Hero() {
    return (
        <div>
            <div className="container flex">
                <div className="left border">
                    <div className="library flex">
                        <span className="lib-text">Your Library</span>
                        {/* <div> */}
                        <button className="create-btn flex">
                            <img src={create} />
                        </button>
                        {/* </div>  */}
                    </div>
                    <section className='create-container'>
                        <div className='create-span'>
                            <span className='c-span1'>Create your first playlist </span>
                            <span className='c-span2'>It's easy, we'll help you</span>
                        </div>
                        <div>
                            <button>Create Playlist</button>
                        </div>
                    </section>
                    <section className='create-container'>
                        <div className='create-span'>
                            <span className='c-span1'>Let's find some podcasts to follow </span>
                            <span className='c-span2'>We'll keep you updated on new episodes</span>
                        </div>
                        <div>
                            <button>Browse podcasts</button>
                        </div>
                    </section>

                    <div className="footer">
                        <div className="link">
                            <div><a href="https://www.spotify.com/in-en/legal/">Legal</a></div>
                            <div><a href="https://www.spotify.com/in-en/safetyandprivacy/">Safety&Privacy Center</a></div>
                            <div><a href="https://www.spotify.com/in-en/legal/privacy-policy/">Privacy Policy</a></div>
                            <div><a href="https://www.spotify.com/in-en/legal/cookies-policy/">Cookies</a></div>
                            <div><a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3">AboutAds</a></div>
                            <div><a href="https://www.spotify.com/in-en/accessibility/">Accessibility</a></div>
                        </div>
                        <div>
                            <a href="https://www.spotify.com/legal/cookies-policy/"
                                target="_blank" rel="noopener">Cookies</a>
                        </div>
                    </div>
                    {/* </div> */}

                </div>
                <div className="mid">

                    <div className="divider-line hidden"></div>
                </div>
                <div className="right border">
                    <div className="spotify-playlists">
                        <h1>Trending songs</h1>
                        <div className="card-container">
                            <div className="card">
                                <img src="https://i.scdn.co/image/ab67616d00001e026fbb60d6a7e03ccb940a518e" alt="" />
                                <h2>Sapphire</h2>
                                <p>Ed sheeran</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
