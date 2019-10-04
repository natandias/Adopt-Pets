export default {
  animalsCount: state => state.cats.length + state.dogs.length,
  getAllCats: state => state.pets.filter(pets => pets.species === 'cat'),
};
