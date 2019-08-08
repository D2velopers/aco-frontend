import { combineReducers } from 'redux';
import authReducer from './authReducer';
import searchReducer from './searchReducer';
import galleryReducer from './galleryReducer';

export default combineReducers({
  authReducer,
  searchReducer,
  galleryReducer,
});
