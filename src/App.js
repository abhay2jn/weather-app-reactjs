import React from "react";
import CurrentLocation from "./currentLocation";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/abhay2jn/weather-app-reactjs">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://en.wikipedia.org/wiki/Abhay">
          Abhay
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://en.wikipedia.org/wiki/Abhay">
          Abhay
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;