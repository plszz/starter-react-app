// App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import modsData from './mods.json'; // love y'all mods!

function App() {
  const [avatarsData, setAvatarsData] = useState({});
  const botToken = 'MTE0MDU1MDU3NTIxMDExMDk5OA.GB_gnj.eqyiyKQknoHLN_A-B5W0hysQRSZVXSnCOp6NNI'; 

  useEffect(() => {
    // Fetch avatars using Axios
    axios.get('https://discord.com/api/v10/users', {
      headers: {
        Authorization: `Bot ${botToken}`,
      },
      params: {
        ids: Object.values(modsData).join(','), // test
      },
    })
      .then(response => {
        setAvatarsData(response.data); // test
      })
      .catch(error => {
        console.error('Error fetching avatars:', error);
      });
  }, [botToken]);

  return (
    <div className="container">
      <div className="header">
        Kajiwoto Mods
      </div>
      <h2>Live Room Mods:</h2>
      <ul className="list">
        {Object.keys(modsData).map(modName => (
          <li className="list-item big" key={modName}>
            <img className="icon" src={`https://cdn.discordapp.com/avatars/${modsData[modName]}/${avatarsData[modsData[modName]].avatar}.png`} alt={`${modName}'s avatar`} />
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
