import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from './types';

import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async (dispatch) => {
  // if (localStorage.token) {
  //   setAuthToken(localStorage.token);
  // }
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ authToken: localStorage.token });
  console.log('this is body' + ' ' + body);
  try {
    // const res = await axios.get('/api/auth');
    const res = await axios.post(
      'http://localhost:8080/api/security/verify',
      body,
      config
    );
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.toString(), 'danger'));
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ firstName, lastName, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ firstName, lastName, email, password });
  try {
    const res = await axios.post(
      'http://localhost:8080/api/internal/user-management/users',
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      // payload: res.data
      payload: res.data,
    });
  } catch (err) {
    // const errors = err.response.data.errors;
    console.log(err);
    dispatch(setAlert('something went wrong', 'danger'));
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(
      'http://localhost:8080/api/security/login',
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    // dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert(err.toString()));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// logout / clear profile

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
