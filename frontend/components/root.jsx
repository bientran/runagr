

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import RouteMap from './route/route_map';
import RouteDetails from './route/route_details';
import RouteDetailsContainer from './route/route_details_container';
import RouteIndexContainer from './route/route_index_container';
import ActivityFormContainer from './activity/activity_form_container';

function _redirectIfLoggedIn(_, replace){
  if (store.getState().session.currentUser) {
    replace("/dashboard");
  }
}

function _redirectIfNotLoggedIn(_, replace){
  if (!store.getState().session.currentUser) {
    replace("/login");
  }
}


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/" component={ App }>
        <IndexRedirect to="signup" />
        <Route path="/dashboard" component={ DashboardContainer } onEnter={ _redirectIfNotLoggedIn }/>
        <Route path="/newroute" component={ RouteMap } onEnter={ _redirectIfNotLoggedIn } />
        <Route path="/routes" component={ RouteIndexContainer } onEnter={ _redirectIfNotLoggedIn } />
        <Route path="/routes/:id" component={ RouteDetailsContainer } onEnter={ _redirectIfNotLoggedIn } />
        <Route path="/activities" component={ ActivityFormContainer } onEnter={ _redirectIfNotLoggedIn } />
        <Route path="/test" component={ RouteDetails } onEnter={ _redirectIfNotLoggedIn } />
        <Route path="/login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
        <Route path="/signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
