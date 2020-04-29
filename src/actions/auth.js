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
//*******************************************************************/
// Load User
//*******************************************************************/
export const loadUser = () => async (dispatch) => {
  // if (localStorage.token) {
  //   setAuthToken(localStorage.token);
  // }

  try {
    const token = localStorage.token;

    const url = 'http://localhost:8080/api/security/verify';

    const res = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
    console.log('this is response' + '--' + res);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    // console.log(err.toString());
    // dispatch(setAlert(err.toString()));
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
//*******************************************************************/
// Register User
//*******************************************************************/
export const register = ({ firstName, lastName, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // {
  //   "firstName": "Dike",
  //     "lastName": "Danigan",
  //       "login": "dike",
  //         "username": "dike",
  //           "email": "dike@mail.com",
  //             "password": "Pass123"
  // }

  const body = JSON.stringify({ firstName, lastName, email, password });
  try {
    const res = await axios.post(
      'http://localhost:8080/api/public/user-management/users/registration',
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
//*******************************************************************/
//login
//*******************************************************************/
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // console.log(config);

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
//*******************************************************************/
// logout / clear profile
//*******************************************************************/

export const logout = (email) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const authToken = localStorage.getItem('token');
    const masterToken = localStorage.getItem('tokenMaster');

    const body = JSON.stringify({
      email: email,
      authToken: authToken,
      masterToken: masterToken,
    });
    console.log('toto je token2 co posielam' + ' ' + body);
    const res = await axios.post(
      'http://localhost:8080/api/security/logout',
      body,
      config
    );

    dispatch({ type: LOGOUT });
  } catch (err) {
    dispatch(setAlert(err.toString()));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
