import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Clear from './assets/images/Clear.png';
import CloudBackground from './assets/images/Cloud-background.png';
import Hail from './assets/images/Hail.png';
import HeavyCloud from './assets/images/HeavyCloud.png';
import HeavyRain from './assets/images/HeavyRain.png';
import LightCloud from './assets/images/LightCloud.png';
import LightRain from './assets/images/LightRain.png';
import Shower from './assets/images/Shower.png';
import Sleet from './assets/images/Sleet.png';
import Snow from './assets/images/Snow.png';
import Thunderstorm from './assets/images/Thunderstorm.png';


const api = {
  key: process.env.REACT_APP_API_KEY,
  base: process.env.REACT_APP_BASE_URL,
};

function App() {
  const [toggleOverlay, setToggleOverlay] = useState(false);
  const [query, setQuery] = useState("Paris");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('')
    .then(response => response.json)
  })
  const execSearch = (e) => {
    if (e.key === "Enter") {
      setQuery(search);
      setToggleOverlay(false);
    }
  };

  const closeOverlay = () => {
    setToggleOverlay(false)
  }

  const openOverlay = () => {
    setToggleOverlay(true)
  }

  return (
    <div className="App">
      <aside className="aside">
        <div className={toggleOverlay ? "aside-overlay active" : "aside-overlay"}>
          <div className="content-overlay">
            <div>
              <div onClick={() => closeOverlay()} className='button-close'><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg></div>
            </div>
            <div className="content-search">
              <input className="input-search" type='text' placeholder='search location' onChange={(e) => setSearch(e.target.value)}
                value={search}
                onKeyPress={execSearch} />
              <button onClick={() => { setQuery(search); setToggleOverlay(false) }} className="button-search">Search</button>
            </div>
          </div>
        </div>
        <div className="aside-top">
          <button onClick={() => openOverlay()} className="search-button" >Search for places</button>
          <span class="material-icons gps"> gps_fixed</span>
        </div>
        <section className="aside-body">
          <img src={Shower} alt="" className="today-image"/>
          <p className="temperature">15 &#8451;</p>
          <p>Shower</p>
          <div className="date">
            <p>Today</p>
            <p className="dot">.</p>
            <p>Fri 5,Jun</p>
          </div>
          <div className="location">
          <span class="material-icons place">place</span>
            <p>Helsinki</p>
          </div>
        </section>
      </aside>
      <main className="main">
        <div className="degree">
          <p className="celsius">&#8451;</p>
          <p className="farenheit">&#8457;</p>
        </div>
        <section className="main-top">
          <div className="top-cards">
            <p>Tomorrow</p>
            <img src={Shower} alt="" className="weather-icon"/>
            <div className="top-cards-bottom">
              <p>16 &#8451;</p>
              <p>11 &#8457;</p>
            </div>
          </div>
          <div className="top-cards">
            <p>Sun 7 Jun</p>
            <img src={Shower} alt="" className="weather-icon"/>
            <div className="top-cards-bottom">
              <p>16 &#8451;</p>
              <p>11 &#8457;</p>
            </div>
          </div>
          <div className="top-cards">
            <p>Mon 8 Jun</p>
            <img src={Thunderstorm} alt="" className="weather-icon"/>
            <div className="top-cards-bottom">
              <p>16 &#8451;</p>
              <p>11 &#8457;</p>
            </div>
          </div>
          <div className="top-cards">
            <p>Tue 9 Jun</p>
            <img src={LightCloud} alt="" className="weather-icon"/>
            <div className="top-cards-bottom">
              <p>16 &#8451;</p>
              <p>11 &#8457;</p>
            </div>
          </div>
          <div className="top-cards">
            <p>Wed 10 Jun</p>
            <img src={Sleet} alt="" className="weather-icon"/>
            <div className="top-cards-bottom">
              <p>16 &#8451;</p>
              <p>11 &#8457;</p>
            </div>
          </div>
        </section>
        <section className="main-bottom">
          <h1>Today's Highlights</h1>
          <div className ="bottom-cards">
            <div className="bottom-card">
              <p>Wind status</p>
              <p>7 mph</p>
              <p>WSW</p>
            </div>
            <div className="bottom-card">
              <p>Humidity</p>
              <p>84%</p>
              <p>WSW</p>
            </div>
          </div>
          <div className="bottom-cards">
            <div className="bottom-card">
              <p>Visibility</p>
              <p>6,4 miles</p>
            </div>
            <div className="bottom-card">
              <p>Air pressure</p>
              <p>998 mb</p>
            </div>
          </div>
        </section>
        <footer className="footer">
          <p>Created by Tomivan</p>
          <p className="dot"> . </p>
          <p>devchallenges.io</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
