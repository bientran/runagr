import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const UserReducer = (state = _nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({},
        user
      );
    case RECEIVE_USERS:
      return merge({}, action.users);
    default:
      return state;
  }
};

export default UserReducer;
