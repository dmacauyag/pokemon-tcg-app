import { useEffect, useState, useContext } from 'react';

import PokemonTcgApiContext from '../../core/context/PokemonTcgApiContext';

import { Set } from '../Set';

const Sets = () => {
  const [sets, setSets] = useState([]);
  const pokemonTcgApi = useContext(PokemonTcgApiContext);

  useEffect(() => {
    const fetchSets = async () => {
      const allSets = await pokemonTcgApi.getAllSets({
        orderBy: 'releaseDate',
      });
      setSets(allSets);
    };

    fetchSets();
  }, [pokemonTcgApi]);

  return (
    <>
      {sets &&
        sets.length > 0 &&
        sets.map((set) => (
          <Set key={set.id} images={set.images} name={set.name} />
        ))}
    </>
  );
};

export default Sets;
