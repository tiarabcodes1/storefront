import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filteredProducts: [],
    activeProduct: {},
  },
  reducers: {
    set(state, action) {
      return {
        ...state,
        products: action.payload.results,
      };
    },
    addToCart(state, action) {
      return {...state,
        products: state.products.map((product) => {
          if(product.name === action.payload.name){
            product.inStock = product.inStock -1;
          }
          return product;}),
      };
    },
    filterProducts(state, action) {
      return {
        ...state,
        filteredProducts: state.products.filter(product =>  product.category ===  action.payload.name ),
      };
    },
    deactivate(state, action) {
      return {...state,
        filteredProducts: [],
      };
    },
    setActiveProduct(state, action) {
      return {...state,
        activeProduct: action.payload,
      };
    },
  },
});


export const getProducts = () => async (dispatch, getState) =>  {
  const { set } = productsSlice.actions;
  try{
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products'); 
    dispatch(set(response.data));
  } catch (e) {
    console.log('get product error', e);
  }
};

export default productsSlice;