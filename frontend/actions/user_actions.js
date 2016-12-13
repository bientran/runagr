import * as APIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user: user
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users: users
});

export function fetchUserDetails(id) {
  return (dispatch) => {
    APIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));
  };
}

export function fetchAllUsers(id) {
  return (dispatch) => {
    APIUtil.fetchAllUsers(id).then(users => dispatch(receiveUsers(users)));
  };
}
