import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router';
import ActivityRow from './activity_row';


class ActivityIndex extends React.Component {
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

    activities = values(activities);
    let activityRows = activities.sort(this.compare).map((activity) => <ActivityRow key={`activity-${activity.id}`} activity={activity} />);
    return (
      <section className="activity-index">
        <h1 className="activity-index-title">My Activities</h1>
        <table className="activity-index-table">
          <thead>
            <tr className="activity-index-header">
              <th>Type</th>
              <th>Date</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Pace ({"min/mi"})</th>
              <th>Distance (miles)</th>
            </tr>
          </thead>
          <tbody>
            {activityRows}
          </tbody>
        </table>
      </section>
    );
  }
}

export default ActivityIndex;
