import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionFormContainer from '../session/session_form_container';
import MainNav from '../nav/main_nav';
import ActivityFeedContainer from '../activity/activity_feed/activity_feed_container';
import ActivityStats from '../activity/activity_stats/activity_stats';
import { values } from 'lodash';

// const newSessionLinks = (logout) => (
//   <nav>
//     <Link to="/login">Login</Link>
//     <br />
//     <Link to="/signup">Sign Up</Link>
//   </nav>
// );
//
// const handleLogout = (logout, router, clearUser) => {
//   return () => {
//     clearUser();
//     logout();
//     router.replace("/login");
//   }
// };
//
//
// const logoutLink = (currentUser, logout, router, clearUser) => (
//   <div>
//     <h4>Current User: {currentUser.first_name} {currentUser.last_name}</h4>
//     <button onClick={handleLogout(logout, router, clearUser)}>Log Out</button>
//   </div>
// );

class Dashboard extends React.Component {

  componentWillMount() {
    this.props.fetchAllActivities(this.props.currentUser.id);
  }

  render() {
    let activities = this.props.activities
    console.log("DSFDSFSFSFSFD");
    console.log(this.props);
    if('activity' in activities || !activities) {
      return (<div></div>);
    }
    return(
      <section className="dashboard">
        <ActivityFeedContainer />
        <ActivityStats activities={values(activities)} />
      </section>
    );
  }

}

//
// const Dashboard = ({currentUser, logout, router, clearUser}) => {
//   // {currentUser ? logoutLink(currentUser, logout, router, clearUser) : newSessionLinks(logout)}
//
//   // <div></div>
//   return(
//     <ActivityFeedContainer />
// )};

export default withRouter(Dashboard);
