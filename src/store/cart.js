
const initialState = {
    addedProducts: [],
    productAmount: 0
}

//Create a reducer that adds the product to the array of items in state

function cartReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD-TO-CART':
            //if any item in payload matches the item addedArray or the array === 0 keep the state unchanged
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
        
        case 'REMOVE-FROM-CART':
            const inCart = state.addedProducts.filter(item => item.name !== action.payload.name)
                return {
                    ...state,
                    addedProducts: inCart,
                    productAmount: state.productAmount -1
      
                  } 
            default:
                return state
    }
}

// export const addProduct = (product) => {
//     return{
//         type: 'ADD-TO-CART',
//         payload: product,
//     }
// }

// export const deleteProduct = (product) => {
//     return{
//         type: 'REMOVE-FROM-CART',
//         payload: product,
//     }
// }

export default cartReducer;
