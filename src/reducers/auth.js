import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  masterToken: null,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.userData,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      // Set token to lacalstorage
      // console.log('token this is the token', payload);
      localStorage.setItem('token', payload.authToken);
      localStorage.setItem('tokenMaster', payload.masterToken);

      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        masterToken: payload.masterToken,
        user: payload.userData,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('tokenMaster');
      // navigation to '/' Dashboard in progress..
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
