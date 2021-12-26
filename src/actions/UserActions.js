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
    console.log(data.user._id);
    return data.user._id;
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

export const updateUser = (userId, user) => async (dispatch) => { // added updatedUser on user place
  try {
    const { data } = await api.updateUser(userId, user);

    dispatch({
      type: UPDATE_USER,
      payload: data.updatedUser
    });
    console.log(data);
    return data.updatedUser //! added .user to throw back updated
  } catch (error) {
    console.log(error); /// vraka state.users.map 
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