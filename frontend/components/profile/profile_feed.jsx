import React from 'react';
import { Link, withRouter } from 'react-router';
import ActivityItem from '../activity/activity_feed/activity_item';
import ActivityDate from '../activity/activity_feed/activity_date';
import { values } from 'lodash';

class ProfileFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5
    };
    this.loadMore = this.loadMore.bind(this);
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

  render(){
    let activities = this.props.activities;

    if (values(activities).length === 0 || values(activities)[0].user_id != this.props.params.id){
      return (<div className="activity-feed"></div>);
    }
    let currentDate = null;
    let localCount = 0;
    let feed =[];
    let last = (activities.length < this.state.count) ? activities.length : this.state.count;
    console.log(this.props);
    values(activities).sort(this.compare).slice(0,last).forEach((activity) => {
      let route = (activity.route_id === -1) ? -1 : this.props.routeDetails[activity.route_id];
      if(currentDate !== activity.date) {
        currentDate = activity.date;
        feed.push(<ActivityDate key={activity.date} date={activity.date} />);
      }
      feed.push(<ActivityItem key={`activity-${activity.id}`} routeDetails={route} activity={activity} />);
      localCount++;
    });

    return(
      <section className="activity-feed">
        <ul className="feed-items">
          {feed}
        </ul>
        <section className="load-more">{this.loadMoreButton(localCount, values(activities).length)}</section>
      </section>
    );
  }
}

export default withRouter(ProfileFeed);
