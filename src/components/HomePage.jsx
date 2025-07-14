import React from 'react';
import './HomePage.css';
import backgroundImage from '../assets/road.jpg';

const HomePage = () => {
  return (
    <div className="bgimage" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: '100% 100%', height: '100vh', width: '100%',}}>

      <div className="menu">

        <div className="leftmenu">
          <h4> Ahmed Web-Developer </h4>
        </div>

        <div className="rightmenu">
          <ul>
            <li id="firstlist"> Home </li>
            <li> Works </li>
            <li> Services </li>
            <li> Contact </li>
            <li> About</li>
          </ul>
        </div>
      </div>

      <div className="text">
        <h4> development - programming - designing </h4>
        <h1> creative & experience </h1>
        <h3> i am a web developer and designer</h3>
         <button id="buttonone">
            like & share
        </button>
        <button id="buttontwo">
          subscribe
        </button>
      </div>
    </div>
  );
};

export default HomePage;
