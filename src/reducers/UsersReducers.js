/* eslint-disable import/no-anonymous-default-export */
import { FETCH_USERS, REGISTER, LOGIN, UPDATE_USER, SHOW_USER, DELETE_USER, LOGOUT } from '../constants/UserConstants';

const initialState = {
  users: [],
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case LOGIN:
      localStorage.setItem('profile', JSON.stringify({
        ...action?.payload
      }));
      return {
        users: action?.payload.user,
        token: action?.payload.token
      }

    case REGISTER:
      localStorage.setItem('token', action.payload.token)
      return { users: [...state, action.payload] }

    case FETCH_USERS:
      return { users: action.payload }

    case SHOW_USER:
      console.log(`ShowUser reducer: ${action.payload}`);
      return { users: action.payload }

    case UPDATE_USER:
      return { users: [...state, action.payload] }

    case DELETE_USER:
      return { users: state.users.filter(user => user._id !== action.payload._id) }

    case LOGOUT:
      localStorage.clear();
      return { ...state } //authData: null, loading: false, errors: null

    default: return state;
  }
}; 