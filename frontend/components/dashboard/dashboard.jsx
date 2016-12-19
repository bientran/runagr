import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionFormContainer from '../session/session_form_container';
import MainNav from '../nav/main_nav';
import ActivityFeedContainer from '../activity/activity_feed/activity_feed_container';
import ActivityStats from '../activity/activity_stats/activity_stats';
import { values } from 'lodash';
import FollowIndex from '../follow/follow_index';

class Dashboard extends React.Component {

  componentWillMount() {
    this.props.fetchCurrentUser(this.props.currentUser.id);
    this.props.fetchAllActivities(this.props.currentUser.id);
  }

  componentDidMount() {

  }

  render() {
    let activities = this.props.activities
    if('activity' in activities || !activities) {
      return (<div></div>);
    }
    return(
      <section className="dashboard">
        <ActivityFeedContainer currentUser={this.props.currentUser}/>
        <ActivityStats currentUser={this.props.currentUser} activities={values(activities)} />
        <FollowIndex currentUser={this.props.currentUser} />
      </section>
    );
  }

}

export default withRouter(Dashboard);
