import { combineReducers, createStore } from "redux";

import AuthReducer from './Reducers/Auth';

export default createStore(combineReducers({
  auth: AuthReducer
}));