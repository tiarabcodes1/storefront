import productsReducer from "../store/products";
import categoriesReducer from "../store/categories";
import { legacy_createStore as createStore, combineReducers } from "redux";

describe('testing the products redux state features', () =>{

    const reducers = combineReducers({
        products: productsReducer,
        categories: categoriesReducer
    });

    const store = createStore(reducers);

    test('Store should have a product association and list of categories', () => {

        const state = store.getState();
        console.log(state)
        expect(state.products.products.associatedCategory).toEqual(state.categories.categories.normName);
    })

    test('Store should have a product increment of initial state', () => {

        const state = store.getState();
        console.log(state)
        expect(state.products.products[0].inventoryCount).toEqual(100);
    })

})