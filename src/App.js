// App.js

import React from 'react';
import './App.css';
import modsData from './mods.json'; // Import the JSON data directly

function App() {
  return (
    <div className="container">
      <div className="header">
        Kajiwoto Mods
      </div>
      <h2>Live Room Mods:</h2>
      <ul className="list">
        {Object.keys(modsData).map(modName => (
          <li className="list-item big" key={modName}>
            <img className="icon" src={`https://discordapp.com/api/users/${modsData[modName]}/avatars/${modsData[modName]}.png`} alt={`${modName}'s avatar`} />
            <div className="mod-info">
              <p className="mod-name">{modName}</p>
              <p className="mod-username">(@{modName})</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
