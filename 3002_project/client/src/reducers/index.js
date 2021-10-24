import { combineReducers } from "redux";
import plants from './plants';
import notifications from './notifications';
import measurements from './measurements';

export default combineReducers({ plants, notifications, measurements });