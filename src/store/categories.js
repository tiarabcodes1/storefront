import axios from "axios"

export const initialState = {
    //State should contain a list of categories as well as the active category
    categories: {},
    activeCategory:{}
  }

 
  
  function categoriesReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET-CATEGORY':
        return {
          ...state,
          categories: [action.payload]
        }
      case 'FILTER-PRODUCTS':
        return {
          categories: state.categories,
          activeCategory: action.payload
        }
      case 'INACTIVE':
        return {
          ...state,
          activeCategory: {}
        }
      default:
        return state
    }
  }
  
  

  export const activateCategory = (category) => {

    return {
      type: 'FILTER-PRODUCTS',
      payload: category
    }
  }
  
  export const getCategory = () => async (dispatch, getState) => {
    try {
      let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
      dispatch(setCategory(response.data));
    } catch (e) {
      console.log('get category error', e);
    }
  }

  export const setCategory = (data) => {
    return {
      type: 'GET-CATEGORY',
      payload: data
    }
  }

 
  
  export default categoriesReducer;