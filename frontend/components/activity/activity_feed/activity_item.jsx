import React from 'react';
import SmallMap from '../../route/small_map';
import ActivityPace from '../activity_pace';
import { Link } from 'react-router';

class ActivityItem extends React.Component {

  formatTime(activity) {
    const t = parseInt(activity.time.slice(0,2));
    let ampm = (t >= 12) ? "PM" : "AM";
    let time = (t >= 12) ? `${parseInt(activity.time.slice(0,2))-12}${activity.time.slice(2)}` : activity.time;
    time = (t === 0) ? `12${activity.time.slice(2)}` : time;
    if (time[0] === '0'){
      time = time.slice(1);
    }
    return `${time}${ampm}`;
  }

  render() {
    let route = this.props.routeDetails;

    const {activity} = this.props;
    let map;
    if (activity.route_id === -1 || !route){
      map = [];
    } else {
      map = <SmallMap x={185} y={107} path={route.coordinates} />;
    }

    return (
      <li className="feed-item group">
        <section className="feed-item-details">
          <div className="item-circle"></div>
          <div className="feed-item-title"><Link to={`/activities/${activity.id}`}>{activity.title}</Link></div>
          <div className="feed-item-author">{activity.author.first_name} {activity.author.last_name}</div>
          <ul className="feed-item-stats">
            <li className="feed-item-time">{this.formatTime(activity)}</li>
            <li className="feed-item-distance">{activity.distance} miles</li>
            <li className="feed-item-pace"><ActivityPace activity={activity} unit_string={"/mi"}/></li>
          </ul>
        </section>
        <section className="activity-feed-map group">
          <Link to={`/activities/${activity.id}`}>{map}</Link>
        </section>
      </li>
    );
  }
}

export default ActivityItem;
