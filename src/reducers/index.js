import { combineReducers } from 'redux'

import followReducer from './follow';
import notificationReducer from './notification';

const rootReducer = combineReducers({
  follow: followReducer,
  notifications: notificationReducer
})

export default rootReducer;
