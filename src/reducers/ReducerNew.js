import { FETCH_USERS, REGISTER, LOGIN, UPDATE_USER, SHOW_USER,
   DELETE_USER, LOGOUT } from '../constants/UserConstants';

const initialState = {
  loggedIn: false,
  users: []
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
      case "SET_USER":
          return {
              loggedIn: true,
              user: [...action.payload]
          }
      case "LOG_OUT":
          localStorage.clear()
          return {
              loggedIn: false,
              user: []
          }
      default: return state
  }
}

export default userReducer