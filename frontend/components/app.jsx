import React from 'react';
import Dashboard from './dashboard/dashboard_container';
import SessionFormContainer from './session/session_form_container';
import MainNav from './nav/main_nav';
import MainFooter from './nav/main_footer';

// NOTE: MAKE CONDITIONAL RENDER FOR NAV

const App = ({ children }) => (
  <div>
    <MainNav />
    { children }
    <MainFooter />
  </div>
);

export default App;
