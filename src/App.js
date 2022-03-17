import { useEffect } from 'react';

import PokemonTcgApiContext from './core/context/PokemonTcgApiContext';
import { PokemonTcgAPI } from './core/api/pokemon-tcg';

import { Main } from './components/Main';

import './App.css';

const App = () => {
  useEffect(() => {
    PokemonTcgAPI.init();
  }, []);

  return (
    <PokemonTcgApiContext.Provider value={PokemonTcgAPI}>
      <Main />
    </PokemonTcgApiContext.Provider>
  );
};

export default App;
