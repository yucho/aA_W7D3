export const fetchAllPokemon = (dispatch) => {
  return $.ajax({ url: '/api/pokemon' })
    // .then(res => console.log(res));
};
