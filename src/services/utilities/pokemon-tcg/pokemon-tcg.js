const normalizedSet = (set) => ({
  id: set.id || null,
  name: set.name || '',
  images: set.images || {},
  legalities: set.legalities || {},
  releaseDate: set.releaseDate || '',
  series: set.series || '',
});

const handleAllSetsResponse = (sets) =>
  sets.map((set) => normalizedSet(set));

export default {
  handleAllSetsResponse,
};
