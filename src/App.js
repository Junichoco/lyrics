import logo from './logo.svg';
import './App.css';
import { MOCK_PROJECTS } from './projects/MockProjects.tsx';

import Song from "./components/Song.tsx";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Lyrics</h1>
        <div class="lyrics">
          <Song title="Mayonaka no Door"/>
          <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;
