import axios from 'axios';
import { setAlert } from './alert';
import {
  CATEGORIES_ERROR,
  GET_CATEGORIES,
  GET_SUPPLIERS,
  SUPPLIERS_ERROR,
} from './types';

// import setAuthToken from '../utils/setAuthToken';

// GET CATEGORIES
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

//GET Product Suppliers FOR Filter
export const getSuppliers = (categoryId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/product-management/products/supplier/${categoryId}`
    );
    dispatch({
      type: GET_SUPPLIERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.toString()));
    dispatch({
      type: SUPPLIERS_ERROR,
      // payload: { msg: err.toString() },
    });
  }
};
