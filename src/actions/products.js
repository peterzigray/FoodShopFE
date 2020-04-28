import axios from 'axios';
import { setAlert } from './alert';
import {
  CATEGORIES_ERROR,
  GET_CATEGORIES,
  GET_CATEGORYPRODUCT,
  CATEGORYPRODUCT_ERROR,
} from './types';
// import setAuthToken from '../utils/setAuthToken';

// Load User
export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'http://localhost:8080/api/public/code-list/categories'
    );
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.toString()));
    dispatch({
      type: CATEGORIES_ERROR,
      // payload: { msg: err.toString() },
    });
  }
};

// /api/public/product-management/products/category/1
// Get Category

export const getCategoryProducts = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/product-management/products/category/${id}`
    );
    dispatch({
      type: GET_CATEGORYPRODUCT,
      payload: res.data,
    });
    history.push('/category/products');
  } catch (err) {
    dispatch(setAlert(err.toString()));
    dispatch({
      type: CATEGORYPRODUCT_ERROR,
      // payload: { msg: err.toString() },
    });
  }
};
