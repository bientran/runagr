import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionFormContainer from '../session/session_form_container';
import MainNav from '../nav/main_nav';

const newSessionLinks = (logout) => (
  <nav>
    <Link to="/login">Login</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const handleLogout = (logout, router, clearUser) => {
  return () => {
    clearUser();
    logout();
    router.replace("/login");
  }
};


const logoutLink = (currentUser, logout, router, clearUser) => (
  <div>
    <h4>Current User: {currentUser.first_name} {currentUser.last_name}</h4>
    <button onClick={handleLogout(logout, router, clearUser)}>Log Out</button>
  </div>
);

const Dashboard = ({currentUser, logout, router, clearUser}) => {
  return(
  <div>
    <MainNav />
    {currentUser ? logoutLink(currentUser, logout, router, clearUser) : newSessionLinks(logout)}
  </div>
)};

export default withRouter(Dashboard);
