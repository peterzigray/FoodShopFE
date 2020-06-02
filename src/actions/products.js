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
const getCurrentSort = (id) => {
  switch (id) {
    case 1:
      return '&sort=discountedPrice,desc';
    case 2:
      return '&sort=discountedPrice,asc';
    case 3:
      return '&sort=rating,desc';
    case 4:
      return '&sort=name,desc';
    case 5:
      return '&sort=name,asc';

    default:
      return '&sort=discountedPrice,asc';
  }
};
export const getCategoryProducts = (id, sort, query, history) => async (
  dispatch
) => {
  const newSort = sort ? getCurrentSort(sort) : '';

  var newQuery = query ? `;supplier.id=in=(${query})` : '';
  const newURL = `browse/?${newSort}&query=category.id==(${id})${newQuery}`;
  //CONDITION for select queries -->[]

  // const newQuery = query ? `;supplier.name=="${query}"` : '';

  // ;name=lig=*a*;sale=nnl=sale&page=0&size=20`;

  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/product-management/products/browse?query=category.id==(${id})${newQuery}${newSort}`
      // ;name=lig=*a*;sale=nnl=sale&page=0&size=20`
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
