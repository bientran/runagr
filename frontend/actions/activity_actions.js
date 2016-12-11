import * as APIUtil from '../util/activity_api_util';
export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';
export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';

export const RECEIVE_ACTIVITY_ERRORS = 'RECEIVE_ACTIVITY_ERRORS';
// export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_ACTIVITY_ERRORS = 'CLEAR_ACTIVITY_ERRORS';


export const receiveActivity = (activity) => ({
  type: RECEIVE_ACTIVITY,
  activity: activity
});

export const receiveActivities = (activities) => ({
  type: RECEIVE_ACTIVITIES,
  activities: activities
});

export const receiveActivityErrors = (errors) => ({
  type: RECEIVE_ACTIVITY_ERRORS,
  errors: errors
});

export const clearActivityErrors = () => ({
  type: CLEAR_ACTIVITY_ERRORS
});

export function createActivity(activity) {
  return (dispatch) => {
    return APIUtil.createActivity(activity).then((activity) => dispatch(receiveActivity(activity)),
      (err) => dispatch(receiveActivityErrors(err.responseJSON)));
  };
};

export function fetchActivityDetails(id) {
  return (dispatch) => {
    APIUtil.fetchActivity(id).then(activity => dispatch(receiveActivity(activity)));
  };
}

export function fetchAllActivities(id) {
  return (dispatch) => {
    APIUtil.fetchAllActivities(id).then(activities => dispatch(receiveActivities(activities)));
  };
}
