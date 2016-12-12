import React from 'react';
import SmallMap from '../../route/small_map';

class ActivityItem extends React.Component {
  componentDidMount() {
    this.props.fetchRouteDetails(this.props.activity.route_id);
  }

  render() {
    let {route} = this.props;
    if(!route.route) {
      return (<div></div>);
    }
    route = route.route;
    const {activity} = this.props;
    return (
      <section className="activity-feed-item">
        {new Date(Date.parse(activity.date)).toDateString()}
        {activity.title}
        {activity.author.first_name}{activity.author.last_name}
        {activity.time} {activity.distance} {"pace goes here"}
        <section className="activity-feed-map">
          <SmallMap routeId={activity.route_id} path={route.coordinates} />
        </section>
      </section>
    );
  }
}

export default ActivityItem;
