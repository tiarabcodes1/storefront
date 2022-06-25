import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import thunk from './middleware/thunk';
import logger from './middleware/logger';

import categoriesSlice from './categories.slice';
import productsSlice from './products.slice';
import cartSlice from './cart.slice';

let reducers = combineReducers({
  categories: categoriesSlice.reducer,
  products: productsSlice.reducer,
  cart: cartSlice.reducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));
}