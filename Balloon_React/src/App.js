import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AnimatedClass from "./Animated_class";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="balloon-animation">
          <AnimatedClass
            className="flying-cloud"
            src="/cloud.png"
            ratioX="0.2"
            ratioY="0.23"
          />
          <AnimatedClass
            className="flying-cloud"
            src="/cloud.png"
            ratioX="0.26"
            ratioY="0.34"
          />
          <AnimatedClass
            className="flying-cloud"
            src="/cloud.png"
            ratioX="0.1"
            ratioY="0.11"
          />
          <AnimatedClass
            className="flying-cloud"
            src="/cloud.png"
            ratioX="0.13"
            ratioY="0.53"
          />
          <AnimatedClass
            className="flying-cloud"
            src="/cloud.png"
            ratioX="0.23"
            ratioY="0.41"
          />

          <AnimatedClass
            className="flying-balloon"
            src="/balloon.png"
            ratioX="0.07"
            ratioY="0.3"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
