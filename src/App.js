import { useEffect, useState } from 'react';

import { pokemonTcgAPI } from './services/api/pokemon-tcg';

import './App.css';

const App = () => {
  const [sets, setSets] = useState([]);

  useEffect(async () => {
    const allSets = await pokemonTcgAPI.getAllSets({
      orderBy: 'releaseDate',
    });
    console.log(allSets);
    setSets(allSets);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {sets && sets.length && (
          <ul>
            {sets.map((set) => (
              <li key={set.id}>{set.name}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
};

export default App;
