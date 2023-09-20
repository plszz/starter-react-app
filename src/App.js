// App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [modsData, setModsData] = useState({});

  useEffect(() => {
    // Fetch data from mods.json
    axios.get('mods.json')
      .then(response => {
        setModsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching mods data:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="header">
        Kajiwoto Mods
      </div>
      <h2>Live Room Mods:</h2>
      <ul className="list">
        {Object.keys(modsData).map(modName => (
          <li className="list-item" key={modName}>
            <img className="icon" src={`https://discordapp.com/api/users/${modsData[modName]}/avatars/${modsData[modName]}.png`} alt={`${modName}'s avatar`} />
            <a href={`https://kajiwoto.ai/u/@${modName}`}>{modName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
