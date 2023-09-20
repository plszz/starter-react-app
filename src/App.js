
import axios from 'axios';
import './App.css'; // You will create this CSS file for Dark Mode styling
import modsData from './mods.json';

function App() {
  const [discordAvatars, setDiscordAvatars] = useState({});

  useEffect(() => {
    const fetchDiscordAvatars = async () => {
      const avatarPromises = Object.values(modsData).map((discordId) =>
        axios
          .get(`https://discord.com/api/v10/users/${discordId}`, {
            headers: {
              Authorization: `Bot YOUR_DISCORD_BOT_TOKEN`, // Replace with your Discord bot token
            },
          })
          .then((response) => {
            return { id: discordId, avatarUrl: `https://cdn.discordapp.com/avatars/${discordId}/${response.data.avatar}.png` };
          })
      );

      const avatars = await Promise.all(avatarPromises);
      const avatarMap = {};
      avatars.forEach((avatar) => {
        avatarMap[avatar.id] = avatar.avatarUrl;
      });
      setDiscordAvatars(avatarMap);
    };

    fetchDiscordAvatars();
  }, []);

  return (
    <div className="App dark-mode">
      <ul className="mods-list">
        {Object.entries(modsData).map(([modName, discordId]) => (
          <li key={discordId} className="mods-list-item">
            <img src={discordAvatars[discordId]} alt={`${modName}'s Avatar`} />
            <div className="mod-info">
              <div className="mod-name">{modName}</div>
              <div className="mod-username">(@{discordId})</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
