import { useEffect, useState } from 'react';

import { pokemonTcgAPI } from '../../services/api/pokemon-tcg';

import { Set } from '../Set';

const Sets = () => {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    const fetchSets = async () => {
      const allSets = await pokemonTcgAPI.getAllSets({
        orderBy: 'releaseDate',
      });
      setSets(allSets);
    };

    fetchSets();
  }, []);

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
