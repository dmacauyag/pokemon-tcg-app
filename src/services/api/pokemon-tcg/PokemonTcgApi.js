import pokemon from 'pokemontcgsdk';

import { handleAllSetsResponse } from './utilities';

class PokemonTcgApi {
  static init() {
    pokemon.configure({
      apiKey: process.env.REACT_APP_POKEMON_TCG_API_KEY,
    });
  }

  static getAllSets(options = {}) {
    return pokemon.set
      .all(options)
      .then(handleAllSetsResponse)
      .catch(console.error);
  }
}

export default PokemonTcgApi;
