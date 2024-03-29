import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_USER = 'CLEAR_USER';


export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const clearUser = () => ({
  type: CLEAR_USER
});

export function login(user) {
  return (dispatch) => {
    return APIUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)),
      (err) => dispatch(receiveErrors(err.responseJSON)));
  };
};

export function logout() {
  return (dispatch) => {
    return APIUtil.logout().then((user) => dispatch(receiveCurrentUser(null)));
  };

};

export function signup(user) {
  return (dispatch) => {
    return APIUtil.signup(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveErrors(err.responseJSON)));
  };
};
