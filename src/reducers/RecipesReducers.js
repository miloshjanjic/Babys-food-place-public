import {
  GET_ALL_RECIPES, SHOW_ONE_RECIPE,
  CREATE_RECIPE, UPLOAD_IMG, UPDATE_RECIPE, DELETE_RECIPE, LIKE_RECIPE,
  BREAKFAST, BRUNCH, LUNCH, DINNER, FRESH_NEW, POPULAR
} from '../constants/RecipeConstants'

const initialState = {
  recipes: [],
  new: [],
  token: null
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {

    case UPLOAD_IMG:
      console.log(action.payload.data.data)
      return {
        ...state,
        recipes: action.payload.data.data,
        token: action.payload
      }

    case UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) => (recipe._id === action.payload._id ? action.payload : recipe)),
        token: action.payload
      }

    case LIKE_RECIPE:
      return {
        ...state,
        new: state.new.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe),
        recipes: state.recipes.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe),
        token: action.payload
      }

    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe._id !== action.payload._id),
        token: action.payload
      }

    case FRESH_NEW:
      return {
        ...state,
        new: action.payload,
        token: action.payload
      }

    case POPULAR:
      return {
        ...state,
        recipes: action.payload,
        token: action.payload
      }

    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        token: action.payload
      }

    case SHOW_ONE_RECIPE:
      return action.payload;

    case CREATE_RECIPE:
      return {
        ...state,
        recipes: [...state, action.payload]
      };

    case BREAKFAST:
      return {
        ...state,
        recipes: action.payload,
        token: action.payload
      };

    case BRUNCH:
      return {
        ...state,
        recipes: action.payload,
        token: action.payload
      }
    case LUNCH:
      return {
        ...state,
        recipes: action.payload,
        token: action.payload
      }
    case DINNER:
      return {
        ...state,
        recipes: action.payload,
        token: action.payload
      }

    default: return state;
  }
}