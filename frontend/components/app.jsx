import React from 'react';
import Dashboard from './dashboard/dashboard_container';
import SessionFormContainer from './session/session_form_container';
import MainNav from './nav/main_nav';
import MainNavContainer from './nav/main_nav_container';
import MainFooter from './nav/main_footer';


const App = ({ children }) => (
  <div className="page-body">
    <MainNavContainer />
    <section className="main-content">
      { children }
    </section>
    <MainFooter />
  </div>
);

export default App;
