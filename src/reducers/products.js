import {
  GET_CATEGORIES,
  CATEGORIES_ERROR,
  GET_CATEGORYPRODUCT,
  CATEGORYPRODUCT_ERROR,
} from '../actions/types';

const initialState = {
  categories: null,
  products: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: false,
        categories: payload,
      };
    case GET_CATEGORYPRODUCT:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case CATEGORIES_ERROR:
    case CATEGORYPRODUCT_ERROR:
      return {
        ...state,
        // error: payload,
      };
    default:
      return state;
  }
}
