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
            <a class="button" onClick={() => changeSong("Lumiere")}>Lumiere</a>
            <a class="button" onClick={() => changeSong("God Shattering Star")}>God Shattering Star</a>
            <a class="button" onClick={() => changeSong("食虫植物")}>食虫植物</a>
            <a class="button" onClick={() => changeSong("Wild Side")}>Wild Side</a>
            <a class="button" onClick={() => changeSong("Monitoring")}>Monitoring</a>
            <a class="button" onClick={() => changeSong("Flyday Chinatown")}>Flyday Chinatown</a>
            <a class="button" onClick={() => changeSong("怪獣")}>怪獣</a>
            <a class="button" onClick={() => changeSong("Placebo")}>Placebo</a>
            <a class="button" onClick={() => changeSong("Say Meow Meow")}>Say Meow Meow</a>
            <a class="button" onClick={() => changeSong("Summertime")}>Summertime</a>
            <a class="button" onClick={() => changeSong("Never Say Goodbye")}>Never Say Goodbye</a>
            <a class="button" onClick={() => changeSong("私論理")}>私論理</a>
            <a class="button" onClick={() => changeSong("Make Debut")}>Make Debut</a>
            <a class="button" onClick={() => changeSong("monkey")}>monkey</a>
          </div>
          <div class="lyrics">
            <Song title={song}/>
          </div>
        </header>
      </div>
      

      
    </div>
  );
}

export default App;
