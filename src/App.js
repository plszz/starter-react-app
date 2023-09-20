// App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import modsData from './mods.json'; // love you all mods!

function App() {
  const [avatarsData, setAvatarsData] = useState({});
  const [botToken, setBotToken] = useState(''); // Initialize botToken state as empty

  useEffect(() => {
    // Fetch your bot token from the external URL
    axios.get('https://my-good-bot--plsguydeveloper.repl.co/')
      .then(response => {
        const fetchedBotToken = response.data;
        setBotToken(fetchedBotToken); // Store the bot token
      })
      .catch(error => {
        console.error('Error fetching bot token:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch avatars using Axios when botToken is available
    if (botToken) {
      axios.get('https://discord.com/api/v10/users', {
        headers: {
          Authorization: `Bot ${botToken}`,
        },
        params: {
          ids: Object.values(modsData).join(','), // Pass user IDs from modsData
        },
      })
        .then(response => {
          // Construct avatar URLs from the response data
          const avatars = {};
          response.data.forEach(user => {
            avatars[user.id] = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
          });
          setAvatarsData(avatars); // Store the avatar URLs
        })
        .catch(error => {
          console.error('Error fetching avatars:', error);
        });
    }
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
            <img className="icon" src={avatarsData[modsData[modName]]} alt={`${modName}'s avatar`} />
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
