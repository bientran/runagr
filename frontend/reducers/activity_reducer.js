import { RECEIVE_ACTIVITY, RECEIVE_ACTIVITY_ERRORS, RECEIVE_ACTIVITIES, CLEAR_ACTIVITY_ERRORS } from '../actions/activity_actions';
import merge from 'lodash/merge';

const _nullActivity = Object.freeze({
  activity: null,
  errors: []
});

const ActivityReducer = (state = _nullActivity, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ACTIVITY:
      const activity = action.activity;
      return {activity};
    case RECEIVE_ACTIVITY_ERRORS:
      const errors = action.errors;
      return merge({}, _nullActivity, {
        errors
      });
    case RECEIVE_ACTIVITIES:
      return merge({}, action.activities);
    case CLEAR_ACTIVITY_ERRORS:
      let newState = merge({}, state, {errors: []})
      return _nullActivity;
    default:
      return state;
  }
};

export default ActivityReducer;
