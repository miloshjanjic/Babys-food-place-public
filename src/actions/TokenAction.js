// import axios from 'axios';
// import { updateUser } from '../api/usersApi';
// import {
//   FETCH_USERS, REGISTER, LOGIN,
//   UPDATE_USER, SHOW_USER, DELETE_USER, URL
// } from '../constants/UserConstants';

// const user = JSON.parse(localStorage.getItem('profile')).user;
// const token = JSON.parse(localStorage.getItem('profile')).token;

// // export const login = (user) => axios.post(`${URL}/login`, user);
// export const loginNew = (user) => dispatch => {

// };

// // export const updateUser = (userId, updatedUser) => axios.patch(`${URL}/${userId}/myProfile`, updatedUser);
// export const updateNew = (userId, updatedUser) => {
//   axios.patch(`${URL}/${userId}/myProfile`, updatedUser, {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "aplication/json",
//       "Authorization": `Bearer ${token}`,
//     },
//   }).then(({ data }) => {
//     console.log({ data });
//     fetch(`${URL}/${userId}/myProfile`, {
//       credentials: "same-origin",
//       method: "patch",
//       //make sure to serialize your JSON body
//       body: JSON.stringify({
//         firstName: data.firstName,
//         lastName: data.lastName,
//         email: data.email,
//         password: data.password,
//         repeatPassword: data.repeatPassword,
//         birthday: data.birthday,
//         avatar: data.avatar,
//       }),
//     })
//       .then((res) => {
//         console.log(res);
//         return res.json();
//       })
//       .then((data) => {
//         if (data.error) {
//           alert(data.message);
//         } else {
//           alert("User Updated");
//           console.log(data);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
// };

// // export const register = (newUser) => axios.post(`${URL}/register`, newUser);
// export const registerNew = (newUser) => dispatch => {

// };