
import { useState } from 'react';
import Activity from './Activity';
import './App.css';

function App() {
  const [mood, setMood] = useState(false);
  
  return (
    <div className="App">
      <h2>My Mood: {
        mood ? 'ON!':'OFF'
        }</h2>
        <button onClick={() => setMood(!mood)} >Swing</button>
      <Activity mood={mood}></Activity>
    </div>
  );
}

export default App;
