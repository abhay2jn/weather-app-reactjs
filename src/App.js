import React, { useState } from "react";
import axios from "axios"


function App() {
  const [data,setData] = useState({});
  const [location,setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0282477baad94b774589522ea4511151`
  const searchLocation = (e) => {
    if (e.key === "Enter") {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data);
    })
  }
}
  return (
    <div className="app">
    <div className="search">
      <input value={location} onChange={e => setLocation(e.target.value)}
      placeholder="Enter Location"
      onKeyPress={searchLocation} type="text" />
    </div>
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
          <p className="bold">50°C</p>
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          <p className="bold">10%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p className="bold">1 MPH</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
