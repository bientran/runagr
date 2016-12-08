import { RECEIVE_ROUTE, RECEIVE_ROUTE_ERRORS, CLEAR_ERRORS } from '../actions/route_actions';
import merge from 'lodash/merge';

const _nullRoute = Object.freeze({
  route: null,
  errors: []
});

const RouteReducer = (state = _nullRoute, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ROUTE:
      const route = action.route;
      // return merge({}, {
      //   route
      // });
      return {route};
    case RECEIVE_ROUTE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    case CLEAR_ERRORS:
      return merge({}, state, {errors: []})
    default:
      return state;
  }
};

export default RouteReducer;
