import axios from 'axios';
import { setAlert } from './alert';
import {
  CATEGORIES_ERROR,
  GET_CATEGORIES,
  GET_CATEGORYPRODUCT,
  CATEGORYPRODUCT_ERROR,
  GET_PRODUCTDETAIL,
  PRODUCTDETAIL_ERROR,
  GET_SUPPLIERS,
  SUPPLIERS_ERROR,
} from './types';

// import setAuthToken from '../utils/setAuthToken';

// GET CATEGORIES
// export const getCategories = () => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       'http://localhost:8080/api/public/code-list/categories'
//     );
//     dispatch({
//       type: GET_CATEGORIES,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch(setAlert(err.toString()));
//     dispatch({
//       type: CATEGORIES_ERROR,
//       // payload: { msg: err.toString() },
//     });
//   }
// };

// //GET Product Suppliers FOR Filter
// export const getSuppliers = (categoryId) => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       `http://localhost:8080/api/public/product-management/products/supplier/${categoryId}`
//     );
//     dispatch({
//       type: GET_SUPPLIERS,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch(setAlert(err.toString()));
//     dispatch({
//       type: SUPPLIERS_ERROR,
//       // payload: { msg: err.toString() },
//     });
//   }
// };
// GET Product and sort API
export const getCategoryProducts = (id, sort, query, history) => async (
  dispatch
) => {
  const newSort = sort ? sort : '';
  const newURL = `browse/?${newSort}query=category.id==(${id})`;
  var newQuery = query ? `;supplier.name=in=(${query})` : '';
  //CONDITION for select queries -->[]

  // const newQuery = query ? `;supplier.name=="${query}"` : '';

  // ;name=lig=*a*;sale=nnl=sale&page=0&size=20`;
  console.log('action ' + 'id ' + id + 'sort ' + newSort + 'query ' + newQuery);
  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/product-management/products/browse?${newSort}query=category.id==(${id})${newQuery}`
      // ;name=lig=*a*;sale=nnl=sale&page=0&size=20`
    );
    dispatch({
      type: GET_CATEGORYPRODUCT,
      payload: res.data,
    });
    history.push(`/product-management/products/${newURL}${newQuery}`);
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

// GET detail of product
export const getDetailProduct = (id, history) => async (dispatch) => {
  console.log('getDetail');
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
