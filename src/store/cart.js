const initialState = {
    addedProducts: [],
    productAmount: 0
}

//Create a reducer that adds the product to the array of items in state

function cartReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADDTOCART':
            return {
              ...state,
              addedProducts: [...state.addedProducts, action.payload],
              productAmount: state.productAmount +1
            } 
        case 'REMOVEFROMCART':
            return {
                ...state,
                addedProducts: state.addedProducts.filter(product => product === action.payload),
                productAmount: initialState.productAmount
              }
            default:
                return state
    }
}

export const addProduct = (product) => {
    return{
        type: 'ADDTOCART',
        payload: product,
    }
}

export const deleteProduct = (product) => {
    return{
        type: 'REMOVEFROMCART',
        payload: product,
    }
}

export default cartReducer;
