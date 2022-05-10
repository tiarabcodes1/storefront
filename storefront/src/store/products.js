const initialProdState = {
    //State should contain a list of categories as well as the active category
    products: [
        {id: 100,
        price: 4000,
        associatedCategory: 'FOOD', 
        name: 'Milk', 
        description: 'Milked from the finest almond nuts.',
        inventoryCount: 100 },

        {id: 200,
        price: 1000, 
        associatedCategory: 'FOOD', 
        name: 'Unicorn Horn', 
        description: 'Don\t Ask Don\'t tell...(1 horn included)',
        inventoryCount: 100 },

        {id: 300,
        price: 2000,
        associatedCategory: 'CLOTHES', 
        name: 'Pig Shirt', 
        description: 'Shirt made out of pig.',
        inventoryCount: 100},

        {id: 400,
        price: 9000, 
        associatedCategory: 'CLOTHES', 
        name: 'Worm Shirt', 
        description: 'Green silk-worm shirt.',
        inventoryCount: 100},

        {id: 500,
        price: 1234, 
        associatedCategory: 'DOG TREATS', 
        name: 'Big Bone', 
        description: 'Dug from the historical dinosaur sights in Egypt and shipped to your front door!',
        inventoryCount: 100},

        {id: 600,
        price: 5678, 
        associatedCategory: 'DOG TREATS', 
        name: 'Dog Kog', 
        description: 'Tis\' a kog filled with dog crack (peanut butter).',
        inventoryCount: 100}
    ],
    activeProducts: []
  }
  
  function productsReducer(state = initialProdState, action) {
    //Create an action that will trigger the reducer to change the active category
    //Update the active category in the reducer when this action is dispatched
    switch (action.type) {
      case 'ACTIVE':
        return {
          ...state,
          activeProducts: state.products.filter(product => 
        product.associatedCategory === action.payload.normName)
        }
      case 'INCREMENT':
        return {
          ...state,
          products: state.products.map(product => {
            if (product.name === action.payload.name) {
              return {
                name: product.name, inventoryCount: product.inventoryCount + 1,
              }
            }
            return product;
          }),
          // products: state.inventoryCount + 1,
        }
      case 'DECREMENT':
        return {
          ...state,
          products: state.products.map(product => {
            if (product.name === action.payload.name) {
              return {
                name: product.name, inventoryCount: product.inventoryCount - 1,
              }
            }
            return product;
          }),
          // inventoryCount: state.inventoryCount - 1,
        }
      case 'INACTIVE':
            return initialProdState;
      default:
        return state
    }
  }
  
  
  // Activate product action creator
  export const activateProduct = (product) => {
  
    // creators return actions {type, payload}
    return {
      type: 'ACTIVE',
      payload: product
    }
  }
  export const incrementInventory = (product) => {
  
    // creators return actions {type, payload}
    return {
      type: 'INCREMENT',
      payload: product
    }
  }

  export const decrementInventory = (product) => {
  
    // creators return actions {type, payload}
    return {
      type: 'DECREMENT',
      payload: product
    }
  }
  

  
  export const deactivateProduct = () => {
    return {
        type: "INACTIVE"
    }
  }
  
  export default productsReducer;