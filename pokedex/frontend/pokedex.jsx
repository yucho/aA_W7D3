import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store'
import { receiveAllPokemon } from './actions/pokemon_actions';
import * as API_Util from './util/api_util';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.API_Util = API_Util;
  window.receiveAllPokemon = receiveAllPokemon;
  
  ReactDOM.render(<Root store={store}/>, root);
});
