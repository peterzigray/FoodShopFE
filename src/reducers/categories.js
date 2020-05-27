import {
  GET_CATEGORIES,
  CATEGORIES_ERROR,
  GET_CATEGORYPRODUCT,
  CATEGORYPRODUCT_ERROR,
  GET_PRODUCTDETAIL,
  PRODUCTDETAIL_ERROR,
  GET_SUPPLIERS,
  SUPPLIERS_ERROR,
  NEWS_ERROR,
  GET_NEWS,
  GET_CAROUSEL,
  CAROUSEL_ERROR,
} from '../actions/types';

const initialState = {
  categories: null,
  suppliers: null,
  loading: true,
  news: [],
  carousel: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CAROUSEL:
      return {
        ...state,
        loading: false,
        carousel: payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        loading: false,
        categories: payload,
      };
    case GET_NEWS:
      return {
        ...state,
        loading: false,

        news: payload,
      };
    case GET_SUPPLIERS:
      return {
        ...state,
        loading: false,
        suppliers: payload.length < 1 ? null : payload,
      };

    case CATEGORIES_ERROR:
    case CATEGORYPRODUCT_ERROR:
    case PRODUCTDETAIL_ERROR:
    case SUPPLIERS_ERROR:
    case NEWS_ERROR:
      return {
        ...state,
        // error: payload,
      };
    default:
      return state;
  }
}
