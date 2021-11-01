import * as api from '../api/usersApi';
import {
  FETCH_USERS, REGISTER, LOGIN,
  UPDATE_USER, SHOW_USER, DELETE_USER, LOGOUT
} from '../constants/UserConstants';

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();

    dispatch({
      type: FETCH_USERS,
      payload: data.users
    });
  } catch (error) {
    console.log(error);
  }
};

export const register = (newUser) => async (dispatch) => {
  try {
    const { data } = await api.register(newUser);

    dispatch({
      type: REGISTER,
      payload: data.newUser
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const { data } = await api.login(user)

    dispatch({
      type: LOGIN,
      payload: data
    });

    return data.id;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteUser = () => async (dispatch) => {
  try {
    const { data } = await api.deleteUser();

    dispatch({
      type: DELETE_USER,
      payload: data.deletedUser
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = () => async (dispatch) => {
  try {
    const { data } = await api.updateUser();

    dispatch({
      type: UPDATE_USER,
      payload: data.updatedUser
    });
  } catch (error) {
    console.log(error);
  }
};

export const showOneUser = () => async (dispatch) => {
  try {
    const { data } = await api.showOneUser();

    dispatch({
      type: SHOW_USER,
      payload: data.user
    });
  } catch (error) {
    console.log(error);
  }
};

// export const logout = () => async (dispatch) => {
//   try {
//     const { data } = await api;

//     dispatch({

//     });
//   } catch (error) {
//     console.log(error);
//   }
// };