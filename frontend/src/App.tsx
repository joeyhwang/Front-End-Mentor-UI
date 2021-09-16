import React from 'react';
import './App.css';
import { CardGrid } from './Components/CardGrid/CardGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className = "text_header">Frontend Mentor Live Websites</h1>
          <p>(Lower Number = Easier)</p>
        <CardGrid/>
      </header>
    </div>
  );
}

export default App;
