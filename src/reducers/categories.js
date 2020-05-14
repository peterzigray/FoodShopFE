import {
  GET_CATEGORIES,
  CATEGORIES_ERROR,
  GET_CATEGORYPRODUCT,
  CATEGORYPRODUCT_ERROR,
  GET_PRODUCTDETAIL,
  PRODUCTDETAIL_ERROR,
  GET_SUPPLIERS,
  SUPPLIERS_ERROR,
} from '../actions/types';

const initialState = {
  categories: null,
  suppliers: null,
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
    // case GET_CATEGORYPRODUCT:
    //   return {
    //     ...state,
    //     loading: false,
    //     products: payload,
    //   };
    // case GET_PRODUCTDETAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //     product: payload,
    //   };
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
      return {
        ...state,
        // error: payload,
      };
    default:
      return state;
  }
}
