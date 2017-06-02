import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import goalsReducer from './goals_reducer';

export default combineReducers({
  userReducer,
  goalsReducer
})
