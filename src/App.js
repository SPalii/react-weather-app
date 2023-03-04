import React from 'react';
import Weather from "./Weather";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">

      <Weather defaultCity="Kyiv" />

      <footer>This project was coded by Svitlana Palii {" "}
      <a href="https://github.com/SPalii/react-weather-app/tree/main/src" target="blank">open-soucred on GitHub</a>
      and{" "}
          <a
            href="https://moonlit-salmiakki-3d44be.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
      </footer>
    </div>
    </div>
  );
}


