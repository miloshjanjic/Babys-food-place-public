import axios from 'axios';
import { URL } from '../constants/RecipeConstants';

const API = axios.create({ baseURL: URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const getRecipes = () => API.get(`/`);
export const fetchOneRecipe = (id) => API.get(`/${id}`);
export const breakfast = () => API.get(`/breakfast`);
export const brunch = () => API.get(`/brunch`);
export const lunch = () => API.get(`/lunch`);
export const dinner = () => API.get(`/dinner`);
export const freshNew = () => API.get(`/freshNew`);
export const popular = () => API.get(`/popular`);
export const createRecipe = (newRecipe) => API.post(`/new`, newRecipe);
export const uploadImg = () => API.post(`/new/img`);
export const likeRecipe = (id) => API.patch(`/${id}/like`);
export const updateRecipe = (id, updatedRecipe) => API.patch(`/${id}`, updatedRecipe);
export const deleteRecipe = (id) => API.delete(`/${id}`);