import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (prevState, action) => {
  if(typeof prevState === 'undefined')
    return {};

  Object.freeze(prevState);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, prevState, action.pokemon);
    default:
      return prevState;
  }
};

export default pokemonReducer;
