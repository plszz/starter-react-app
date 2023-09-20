
import './App.css'; // You will create this CSS file for Dark Mode styling
import modsData from './mods.json';

function App() {
  // Function to render the list of moderators
  const renderModsList = () => {
    return (
      <ul className="mods-list">
        {Object.entries(modsData).map(([modName, discordId]) => (
          <li key={discordId} className="mods-list-item">
            <div className="mod-pfp">
              <img src={`https://cdn.discordapp.com/avatars/${discordId}/avatar.png`} alt={`${modName}'s Avatar`} />
            </div>
            <div className="mod-name">{modName}</div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="App dark-mode">
      {renderModsList()}
    </div>
  );
}

export default App;

