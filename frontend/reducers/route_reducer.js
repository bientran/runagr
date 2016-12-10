import { RECEIVE_ROUTE, RECEIVE_ROUTE_ERRORS, CLEAR_ROUTE_ERRORS, RECEIVE_ROUTES } from '../actions/route_actions';
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
      return merge({}, _nullRoute, {
        errors
      });
    case RECEIVE_ROUTES:
      return merge({}, action.routes);
    case CLEAR_ROUTE_ERRORS:
      // return merge({}, state, {errors: []})
      let newState = merge({}, state, {errors: []})
      // return merge({},state,_nullRoute);
      return _nullRoute;
    default:
      return state;
  }
};

export default RouteReducer;
