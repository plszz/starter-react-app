// ModsList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';



const ModsList = () => {
  const [modsData, setModsData] = useState({});
 
  

  useEffect(() => {
    // Fetch data from mods.json
    axios.get("./mods.json")
      .then(response => {
        setModsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching mods data:', error);
      });
  }, []);

  return (
    <div>
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
};

export default ModsList;
