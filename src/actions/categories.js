import axios from 'axios';

import { CATEGORIES_ERROR, GET_CATEGORIES } from './types';
// import setAuthToken from '../utils/setAuthToken';

// Load User
export const getCategories = () => async (dispatch) => {
  console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
  try {
    const res = await axios.get(
      'http://localhost:8080/api/public/code-list/categories'
    );
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
