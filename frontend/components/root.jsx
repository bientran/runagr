

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import RouteMap from './route/route_map';

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
        <Route path="/routes" component={ RouteMap } onEnter={ _redirectIfNotLoggedIn }/>
        <Route path="/login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
        <Route path="/signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
