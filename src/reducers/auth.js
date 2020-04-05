import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // case USER_LOADED:
    //   return {
    //     ...state,
    //     isAuthenticated: true,
    //     loading: false,
    //     user: payload
    //   };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      // Set token to lacalstorage
      // localStorage.setItem('token', payload.token);
      localStorage.setItem('token', payload.jwt);

      return {
        ...state,
        // ...payload,
        token: localStorage.getItem('token'),
        isAuthenticated: true,
        loading: false,
        user: payload.userData
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
