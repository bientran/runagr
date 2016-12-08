import React from 'react';
import Dashboard from './dashboard/dashboard_container';
import SessionFormContainer from './session/session_form_container';

// NOTE: MAKE CONDITIONAL RENDER FOR NAV

const App = ({ children }) => (
  <div>
    { children }
  </div>
);

export default App;
