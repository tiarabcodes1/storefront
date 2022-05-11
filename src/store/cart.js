const initialState = {
    addedProducts: []
}

//Create a reducer that adds the product to the array of items in state

function cartReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADDED':
            return {
              ...state,
              addedProducts: [...state.addedProducts, action.payload],
            }
        case 'DELETED':
            return {
                ...state,
                addedProducts: state.addedProducts.filter(product => product.name !== action.payload),
              }
            default:
                return state
    }
}

export const addProduct = (product) => {
    return{
        type: 'ADDED',
        payload: product,
    }
}

export const deleteProduct = (product) => {
    return{
        type: 'DELETED',
        payload: product,
    }
}

export default cartReducer;