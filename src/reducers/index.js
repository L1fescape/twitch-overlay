import { combineReducers } from 'redux'

import subscriberReducer from './subscriber';
import notificationReducer from './notification';

const rootReducer = combineReducers({
  subscribers: subscriberReducer,
  notifications: notificationReducer
})

export default rootReducer;
