import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router';
import ActivityItemContainer from './activity_item_container';

class ActivityFeed extends React.Component {
  componentDidMount() {
    // this.props.fetchRouteDetails(this.props.routeParams.id);
    this.props.fetchAllActivities(this.props.currentUser.id);
  }

  compare(a,b) {
    if (a.date > b.date){
      return -1;
    }
    if (a.date < b.date){
      return 1;
    }
    return 0;
  }

  render() {
    let activities = this.props.activities
    if('activity' in activities) {
      return (<div></div>);
    }

    activities = values(activities).sort(this.compare).map((activity) => <ActivityItemContainer activity={activity} />);
    return (
      <section className="activity-feed">
        {activities[0]}
      </section>
    );
  }
}

export default ActivityFeed;
