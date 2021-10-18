import { combineReducers } from 'redux';
import RecipesReducer from './RecipesReducers';
import UsersReducer from './UsersReducers'

export default combineReducers({ RecipesReducer, UsersReducer });