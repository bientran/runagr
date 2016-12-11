import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import RouteReducer from './route_reducer';
import ActivityReducer from './activity_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  route: RouteReducer,
  activity: ActivityReducer
});

export default RootReducer;
