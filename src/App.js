import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from "react";

import Song from "./components/Song.tsx";

function App() {
  const [song, setSong] = useState("Mayonaka no Door");
  return (
    <div className="container">
      <div class="song-container">
        <header>
          <h1>Lyrics</h1>
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
