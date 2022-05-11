import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

let reducers = combineReducers({
    categories: categoryReducer,
    products: productsReducer,
    cart: cartReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}