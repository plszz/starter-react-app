// App.js

import React from 'react';
import './App.css';
import ModsList from './components/ModsModular';
import modsData from "./mods.json";

selectFile("./mods.json");

function App() {
  return (
    <div className="container">
      <div className="header">
        Kajiwoto Mods
      </div>
      <ModsList />
    </div>
  );
}

export default App;
