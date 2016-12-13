import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import RouteReducer from './route_reducer';
import ActivityReducer from './activity_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  route: RouteReducer,
  activity: ActivityReducer,
  user: UserReducer
});

export default RootReducer;
