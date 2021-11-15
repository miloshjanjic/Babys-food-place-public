import React, { useContext, useState } from "react"
// import { useDispatch } from 'react-redux';
// import * as api from '../api/usersApi';
// import { LOGIN } from '../constants/UserConstants';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
};

export function AuthProvider({ children }) {
  // const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // const dispatch = useDispatch();

  // async function login(user) {
  //   try {
  //     const { data } = await api.login(user)

  //     dispatch({
  //       type: LOGIN,
  //       payload: data
  //     });

  //     return data.id;
  //   } catch (error) {
  //     console.log(error);
  //     return false;
  //   }
  // };

  const value = {
    // currentUser,
    // login
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
};