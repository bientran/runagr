import * as APIUtil from '../util/route_api_util';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';

export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_ROUTE_ERRORS = 'CLEAR_ROUTE_ERRORS';


export const receiveRoute = (route) => ({
  type: RECEIVE_ROUTE,
  route: route
});

export const receiveRoutes = (routes) => ({
  type: RECEIVE_ROUTES,
  routes: routes
});

export const receiveRouteErrors = (errors) => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors: errors
});

export const clearRouteErrors = () => ({
  type: CLEAR_ROUTE_ERRORS
});

export function createRoute(route) {
  return (dispatch) => {
    return APIUtil.createRoute(route).then((route) => dispatch(receiveRoute(route)),
      (err) => dispatch(receiveRouteErrors(err.responseJSON)));
  };
};

export function fetchRouteDetails(id) {
  return (dispatch) => {
    APIUtil.fetchRoute(id).then(route => dispatch(receiveRoute(route)));
  };
}

export function fetchAllRoutes(id) {
  return (dispatch) => {
    APIUtil.fetchAllRoutes(id).then(routes => dispatch(receiveRoutes(routes)));
  };
}
