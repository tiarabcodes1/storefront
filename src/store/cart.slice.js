import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        addedProducts: [],
        productAmount: 0
    },
    reducers: {
        pushInCart(state, action) {
            console.log(action)
            const exist =state.addedProducts.filter(item => item.name === action.payload.name).length > 0;
            if(exist){
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    addedProducts: [...state.addedProducts, action.payload],
                    productAmount: state.productAmount +1
      
                  } 
            }
        },
        removeFromCart(state, action) {
            const inCart = state.addedProducts.filter(item => item.name !== action.payload.name)
                return {
                    ...state,
                    addedProducts: inCart,
                    productAmount: state.productAmount -1
      
                  } 
          },  
      }
})

export default cartSlice;