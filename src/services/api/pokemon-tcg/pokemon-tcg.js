import pokemon from 'pokemontcgsdk';

import { pokemonTcgUtilities } from '../../utilities/pokemon-tcg';

pokemon.configure({
  apiKey: process.env.REACT_APP_POKEMON_TCG_API_KEY,
});

const getAllSets = (options = {}) => {
  return pokemon.set
    .all(options)
    .then(pokemonTcgUtilities.handleAllSetsResponse)
    .catch(console.error);
};

export default {
  getAllSets,
};
