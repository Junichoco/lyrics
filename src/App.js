import logo from './logo.svg';
import './App.css';

import Song from "./Components/Song.tsx";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Lyrics</h1>
        <div class="lyrics">
          <Song title="Mayonaka no Door"/>
        </div>
      </header>
    </div>
  );
}

export default App;
