import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from './middleware/thunk';
import logger from './middleware/logger'

import categoriesSlice from './categories.slice';
import productsReducer from './products';
import cartReducer from './cart';

let reducers = combineReducers({
    categories: categoriesSlice.reducer,
    products: productsReducer,
    cart: cartReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));
}