import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import categoryReducer from './categories';

let reducers = combineReducers({
  categories: categoryReducer ,
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}