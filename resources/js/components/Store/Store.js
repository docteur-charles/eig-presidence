import { combineReducers, createStore } from "redux";

import AuthReducer from './Reducers/Auth';
import RoleReducer from './Reducers/Role';
import StatsReducer from './Reducers/Stats';

export default createStore(combineReducers({
  auth: AuthReducer,
  stats: StatsReducer,
  roles: RoleReducer
}));