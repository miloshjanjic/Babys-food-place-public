import axios from 'axios';
import { URL } from '../constants/UserConstants';

// axios.interceptors.request.use(function (config) {
//   const token = JSON.parse(localStorage.getItem('profile')).token;
//   console.log(token);
//   if (token)
//       config.headers.Authorization = "Bearer " + token;
//   return config;
// });

export const getUsers = () => axios.get(`${URL}/users`);
export const showOneUser = (userId) => axios.get(`${URL}/${userId}/myProfile`);
export const register = (newUser) => axios.post(`${URL}/register`, newUser);
export const login = (user) => axios.post(`http://localhost:4000/users/login`, user);
export const updateUser = (userId, updatedUser) => axios.patch(`${URL}/${userId}/myProfile`, updatedUser);
export const deleteUser = (userId) => axios.delete(`${URL}/users/${userId}`);
// export const logoutUser =  ;
// da se setira node dali na sekoj na requset se praka token ?
// 