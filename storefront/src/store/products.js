const initialState = {
    //State should contain a list of categories as well as the active category
    products: [
        {price: 4000, associatedCategory: 'FOOD', 
        name: 'Milk', 
        description: 'Milked from the finest almond nuts.' },
        {price: 1000, associatedCategory: 'FOOD', 
        name: 'Unicorn Horns', 
        description: 'Don\t Ask Don\'t tell...' },
        {price: 2000, associatedCategory: 'CLOTHES', 
        name: 'Pig Shirt', 
        description: 'Shirt made out of pig.'},
        {price: 9000, associatedCategory: 'CLOTHES', 
        name: 'Worm Shirt', 
        description: 'Green silk-worm shirt.'},
        {price: 1234, associatedCategory: 'DOG TREATS', 
        name: 'Big Bone', 
        description: 'Dug from the historical dinosaur sights in Egypt and shipped to your front door!'},
        {price: 5678, associatedCategory: 'DOG TREATS', 
        name: 'Peanut-Butter Filled Kog', 
        description: 'Tis\' a kog filled with dog crack.'}
    ],
    activeCategory: ''
  }
  
  function categoriesReducer(state = initialState, action) {
    //Create an action that will trigger the reducer to change the active category
    //Update the active category in the reducer when this action is dispatched
    switch (action.type) {
      case 'ACTIVE':
        return {
          ...state,
          categories: state.categories.map(category => {
            if (category.associatedCategory === action.payload.associatedCategory) {
              return {
                associatedCategory: category.associatedCategory,
                price: category.price,
                name: category.name,
                activeCategory: category.associatedCategory
              }
            }
            return category;
          }),
        //   activeCategory: state.activeCategory,
        }
      case 'INACTIVE':
            return initialState;
      default:
        return state
    }
  }
  
  
  // Increment vote action creator
  export const activateCategory = (category) => {
  
    // creators return actions {type, payload}
    return {
      type: 'ACTIVE',
      payload: category
    }
  }
  
  export const deactivateCategory = () => {
    return {
        type: "INACTIVE"
    }
  }
  
  export default categoriesReducer;