import { combineReducers } from 'redux';

import cart from './cart';
import pizzas from './pizzas';
import filters from './filters';

const rootReducer = combineReducers({
  cart,
  pizzas,
  filters,
});

export default rootReducer;
