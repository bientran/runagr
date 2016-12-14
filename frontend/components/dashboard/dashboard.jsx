import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionFormContainer from '../session/session_form_container';
import MainNav from '../nav/main_nav';
import ActivityFeedContainer from '../activity/activity_feed/activity_feed_container';
import ActivityStats from '../activity/activity_stats/activity_stats';
import { values } from 'lodash';
// import ActivityMonth from '../activity/activity_stats/activity_month';

class Dashboard extends React.Component {

  componentWillMount() {
    this.props.fetchAllActivities(this.props.currentUser.id);
  }

  render() {
    let activities = this.props.activities
    if('activity' in activities || !activities) {
      return (<div></div>);
    }
    // <ActivityMonth activities={values(activities)} />
    return(
      <section className="dashboard">
        <ActivityFeedContainer />
        <ActivityStats activities={values(activities)} />
      </section>
    );
  }

}

export default withRouter(Dashboard);
