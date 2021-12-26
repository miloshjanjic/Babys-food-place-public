import axios from 'axios';
import { URL } from '../constants/UserConstants';

const API = axios.create({ baseURL: URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});
// const userId = JSON.parse(localStorage.getItem('profile')).user._id;

export const getUsers = () => API.get(`/users`);
export const showOneUser = (userId) => API.get(`/${userId}/myProfile`);
export const register = (newUser) => API.post(`/register`, newUser);
export const login = (user) => API.post(`/login`, user);
export const updateUser = (userId, updatedUser) => API.patch(`/${userId}/myProfile`, updatedUser,);
export const deleteUser = (userId) => API.delete(`/users/${userId}`);

// axios.interceptors.request.use(function (config) {
//   const token = JSON.parse(localStorage.getItem('profile')).token;
//   console.log(token);
//   if (token)
//       config.headers.Authorization = "Bearer " + token;
//   return config;
// });
