import axios from 'axios';
import { setAlert } from './alert';
import {
  CATEGORIES_ERROR,
  GET_CATEGORIES,
  GET_CATEGORYPRODUCT,
  CATEGORYPRODUCT_ERROR,
  GET_PRODUCTDETAIL,
  PRODUCTDETAIL_ERROR,
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
// GET Product and sort API
export const getCategoryProducts = (id, sort, history) => async (dispatch) => {
  const newSort = sort ? sort : '';
  const newURL = `browse/?${newSort}query=id=in=(${id});name=lig=*a*;sale=nnl=sale&page=0&size=20`;

  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/product-management/products/browse?${newSort}query=id=in=(${id});name=lig=*a*;sale=nnl=sale&page=0&size=20`
    );
    dispatch({
      type: GET_CATEGORYPRODUCT,
      payload: res.data,
    });
    history.push(`/product-management/products/${newURL}`);
  } catch (err) {
    dispatch(setAlert(err.toString()));
    dispatch({
      type: CATEGORYPRODUCT_ERROR,
      // payload: { msg: err.toString() },
    });
  }
};
// /api/public/product-management/products/category/1
// Get Category

// export const getCategoryProducts = (id, history) => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       `http://localhost:8080/api/public/product-management/products/category/${id}`
//     );
//     dispatch({
//       type: GET_CATEGORYPRODUCT,
//       payload: res.data,
//     });
//     history.push('/category/products');
//   } catch (err) {
//     dispatch(setAlert(err.toString()));
//     dispatch({
//       type: CATEGORYPRODUCT_ERROR,
//       // payload: { msg: err.toString() },
//     });
//   }
// };

export const getDetailProduct = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/product-management/products/${id}`
    );
    dispatch({
      type: GET_PRODUCTDETAIL,
      payload: res.data,
    });
    history.push(`/category/products/${id}`);
  } catch (err) {
    dispatch(setAlert(err.toString()));
    dispatch({
      type: PRODUCTDETAIL_ERROR,
      // payload: { msg: err.toString() },
    });
  }
};
