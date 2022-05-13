import axios from 'axios';

const initialProdState = {
    products: [],
    filteredProducts: []
  }
  
  function productsReducer(state = initialProdState, action) {
    switch (action.type) {
      case 'GET-PRODUCTS':
        return {
          ...state,
          products: action.payload
        }
      case 'FILTER-PRODUCTS':
        return {
          ...state,
          filteredProducts: state.products.filter(product =>  product.category ===  action.payload.name )
        }
        case 'ADD-TO-CART':
           return {...state,
            products: state.products.map((product) => {
              if(product.name === action.payload.name){
                product.inStock = product.inStock -1
              }
              return product})
              }
      case 'REMOVE-FROM-CART':
        return {...state,
          products: state.products.map((product) => {
            if(product === action.payload.product[0]){
              console.log("....", state)
              product.inStock = product.inStock +1
            }
            return product})
            }
      case 'INACTIVE':
            return {...state,
              filteredProducts: []
            }
      default:
        return state
    }
  }
  
 

  export const setProducts = (data) => {
    return {
      type: 'GET-PRODUCTS',
      payload: data
    }
  }

  export const getProducts = () => async (dispatch, getState) =>  {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products') 
    dispatch(setProducts(response.data.results))
  }
  

  
  export const removeFromCart = (product, quantity) => {
    return {
        type: "REMOVE-FROM-CART",
        payload: {product, quantity}
    }
  }
  export const addToCart = (product) => {
  
    // creators return actions {type, payload}
    return {
      type: 'ADD-TO-CART',
      payload: product
    }
  }
  export const deactivateProduct = () => {
    return {
        type: "INACTIVE"
    }
  }
  
  export default productsReducer;