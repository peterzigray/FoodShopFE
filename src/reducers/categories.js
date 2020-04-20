import { GET_CATEGORIES, CATEGORIES_ERROR } from '../actions/types';

const initialState = {
  categories: null,
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
    case CATEGORIES_ERROR:
      return {
        ...state,
        // error: payload,
      };
    default:
      return state;
  }
}
