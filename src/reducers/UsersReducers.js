import { FETCH_USERS, REGISTER, LOGIN, UPDATE_USER, SHOW_USER, DELETE_USER, LOGOUT } from '../constants/UserConstants';

const initialState = {
  users: [],
  token: null
  //token: localStorage.getItem('profile').token
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
        //token: localStorage.getItem('profile').token
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
      return {
        // console.log(state);
        ...state,
        users: state.users.map((user) => (user._id === action.payload._id ? action.payload : user)),
        token: action?.payload.token
        //users: action?.payload.user,
        //users: [...state, action.payload], //old 
        //token: JSON.parse(localStorage.getItem('profile')).token
        // token: [...state, action.payload] //old
      } 
      async function onToken(token) {console.log(`Users : ${token}`)}  

    case DELETE_USER:
      return { users: state.users.filter(user => user._id !== action.payload._id) }

    case LOGOUT:
      localStorage.clear();
      return { ...state } //authData: null, loading: false, errors: null

    default: return state;
  }
}; 