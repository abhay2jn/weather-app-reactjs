import React from "react";
import axios from "axios"


function App() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=0282477baad94b774589522ea4511151`
  return (
    <div className="app">
    <div className="container">
      <div className="top">
        <div className="location">
          <p>Delhi</p>
        </div>
        <div className="temp">
          <h1>45°C</h1>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p>50°C</p>
        </div>
        <div className="humidity">
          <p>10%</p>
        </div>
        <div className="wind">
          1 MPH
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
