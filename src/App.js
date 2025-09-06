import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from "react";

import Song from "./components/Song.tsx";

function App() {
  const [song, setSong] = useState("monkey");

  const changeSong = (name) => {
    setSong(name);
  }

  return (
    <div className="container">
      <div class="song-container">
        <header>
          <h1>Lyrics</h1>
          <div class="navbar">
            <a class="button" onClick={() => changeSong("Mayonaka no Door")}>Mayonaka no Door</a>
            <a class="button" onClick={() => changeSong("Canned Heat")}>Canned Heat</a>
            <a class="button" onClick={() => changeSong("Natsusora Kakeru Omoi Hana")}>Natsusora Kakeru Omoi Hana</a>
            <a class="button" onClick={() => changeSong("monkey")}>monkey</a>
          </div>
          <div class="lyrics">
            {song}
            <Song title={song}/>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
