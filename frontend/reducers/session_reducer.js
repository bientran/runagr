

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS, CLEAR_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, {
        errors, currentUser: state.currentUser
      });
    case CLEAR_USER:
    case CLEAR_ERRORS:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
