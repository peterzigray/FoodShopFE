import axios from 'axios';
import { setAlert } from './alert';
import {
  CATEGORIES_ERROR,
  GET_CATEGORIES,
  GET_SUPPLIERS,
  SUPPLIERS_ERROR,
  GET_NEWS,
  NEWS_ERROR,
  GET_CAROUSEL,
  CAROUSEL_ERROR,
  GET_BANNER,
} from './types';

// import setAuthToken from '../utils/setAuthToken';

// GET CAROUSEL
export const getCarousel = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'http://localhost:8080/api/public/product-management/news/carousel'
    );
    dispatch({
      type: GET_CAROUSEL,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.toString()));
    dispatch({
      type: CAROUSEL_ERROR,
      // payload: { msg: err.toString() },
    });
  }
};

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
      `http://localhost:8080/api/public/product-management/products/filters/${categoryId}`
      ///api/public/product-management/filters/browse?&query=category.id==(1)
      // `http://localhost:8080/api/public/product-management/products/supplier/${categoryId}`
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

//GET News
export const getNews = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'http://localhost:8080/api/public/product-management/news'
    );
    dispatch({
      type: GET_NEWS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.toString()));
    dispatch({
      type: NEWS_ERROR,
    });
  }
};

//GET Banner
export const getBanner = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/public/product-management/categories/banner/${id}`
    );
    dispatch({
      type: GET_BANNER,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.toString()));
    dispatch({
      type: NEWS_ERROR,
    });
  }
};
