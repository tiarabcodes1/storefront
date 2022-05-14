import { CoPresent } from "@mui/icons-material";

const initialState = {
    addedProducts: [],
    productAmount: 0
}

//Create a reducer that adds the product to the array of items in state

function cartReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD-TO-CART':
            return {
              ...state,
              addedProducts: [...state.addedProducts, action.payload],
              productAmount: state.productAmount +1
            } 
        case 'REMOVE-FROM-CART':
            return {
                ...state,
                addedProducts: state.addedProducts.filter(product => product === action.payload.name, console.log(action.payload)),
                productAmount: initialState.productAmount
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
