export const initialState = {
    //State should contain a list of categories as well as the active category
    categories: [
        {id: 1, normName: 'FOOD',displayName: 'Tiara eats this stuff often', description: 'Yummy good foods to buy' },
        {id: 2, normName: 'CLOTHES',displayName: 'Tiara made all of this by hand', description: 'Pretty rad clothes to buy'},
        {id: 3, normName: 'DOG TREATS',displayName: 'Chance made all of this by hand', description: 'Healthy treats to buy'},
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
            if (category.normName === action.payload.normName) {
              return {
                normName: category.normName,
                id: category.id,
                displayName: category.displayName,
                activeCategory: category.normName
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