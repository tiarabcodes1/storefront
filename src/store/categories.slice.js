import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

 const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
      activeCategory: '',
      categories: {},
    },
    reducers: {
        set(state, action) {
          return {
            ...state,
            categories: [action.payload]
          }
        },
        activate(state, action) {
            return {
                categories: state.categories,
                activeCategory: action.payload
              }
        }
      }
})



// export const activateCategory = (category) => {

//   return {
//     type: 'FILTER-PRODUCTS',
//     payload: category
//   }
// }

export const getCategories = () => async (dispatch, getState) => {
    const { set } = categoriesSlice.actions;
    try {
      let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
      dispatch(set(response.data));
      console.log("GET CAT",response)
    } catch (e) {
      console.log('get category error', e);
    }
  }


  // export const setCategory = (data) => {
  //   return {
  //     type: 'GET-CATEGORY',
  //     payload: data
  //   }
  // }
  
  export default categoriesSlice;