import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import categoryReducer from './categories';
import productsReducer from './products';

let reducers = combineReducers({
  categories: categoryReducer ,
  products: productsReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}