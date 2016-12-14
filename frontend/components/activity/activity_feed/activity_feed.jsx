import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router';
import ActivityItemContainer from './activity_item_container';
import ActivityItem from './activity_item';
import ActivityDate from './activity_date';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    };
    this.loadMore = this.loadMore.bind(this);

  }

  componentDidMount() {
    // this.props.fetchRouteDetails(this.props.routeParams.id);
    this.props.fetchAllActivities(this.props.currentUser.id);
    this.props.fetchAllRoutes(this.props.currentUser.id);
  }

  compare(a,b) {
    if (a.date > b.date){
      return -1;
    }
    if (a.date < b.date){
      return 1;
    }
    if (a.time > b.time){
      return -1;
    }
    if (a.time < b.time){
      return 1;
    }
    return 0;
  }

  loadMoreButton(lengthShown, lengthTotal) {
    if (lengthTotal === 0) {
      return <div>No activities</div>;
    }
    if (lengthTotal === lengthShown && lengthTotal <=10) {
      return <div></div>;
    }
    if (lengthShown === lengthTotal){
      return <div>No more activities.</div>;
    }
    return <button onClick={this.loadMore}>More</button>;

  }

  loadMore(e){
    e.preventDefault();
    this.setState({
      count: this.state.count+5
    });
  }

  render() {
    let activities = this.props.activities

    if (values(activities).length === 0){
      return (<div className="activity-feed"></div>);
    }
    let currentDate = null;
    let feed = [];
    // activities = values(activities).sort(this.compare).map((activity) => <ActivityItemContainer activity={activity} />);
    let localCount = 0;
    let last = (activities.length < this.state.count) ? activities.length : this.state.count;
    values(activities).sort(this.compare).slice(0,last).forEach((activity) => {
      let route = (activity.route_id === -1) ? -1 : this.props.routes[activity.route_id];
      if(currentDate !== activity.date) {
        currentDate = activity.date;
        feed.push(<ActivityDate key={activity.date} date={activity.date} />);
      }
      feed.push(<ActivityItem key={`activity-${activity.id}`} routeDetails={route} activity={activity} />);
      localCount++;
    });
    return (
      <section className="activity-feed">
        <h1 className="activity-feed-title">Activity Feed</h1>
        <ul className="feed-items">
          {feed}
        </ul>
        <section className="load-more">{this.loadMoreButton(localCount, values(activities).length)}</section>
      </section>
    );
  }
}

export default ActivityFeed;
