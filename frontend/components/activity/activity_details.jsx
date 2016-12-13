import React from 'react';
import SmallMap from '../route/small_map';
import ActivityMap from './activity_map';
import ActivityMapContainer from './activity_map_container';
import ActivityPace from './activity_pace';

class ActivityDetails extends React.Component {

  componentDidMount() {
    this.props.fetchActivityDetails(this.props.routeParams.id);
    window.scrollTo(0, 0);
  }

  formatDuration(activity) {
    let hours = (activity.hours !== 0) ? `${activity.hours}:` : "";
    let minutes = (activity.minutes < 10) ? `0${activity.minutes}:` : `${activity.minutes}:`;
    let seconds = (activity.seconds < 10) ? `0${activity.seconds}` : activity.seconds;
    return `${hours}${minutes}${seconds}`;
  }

  formatDate(activity) {
    const t = parseInt(activity.time.slice(0,2));
    let ampm = (t >= 12) ? "PM" : "AM";
    let time = (t >= 12) ? `${parseInt(activity.time.slice(0,2))-12}${activity.time.slice(2)}` : activity.time;
    time = (t === 0) ? `12${activity.time.slice(2)}` : time;
    if (time[0] === '0'){
      time = time.slice(1);
    }
    let d = activity.date.split("-");
    let date = new Date(d[0],d[1]-1,d[2]).toDateString();
    return `${time}${ampm} on ${date}`;
  }

  render() {
    let {activity} = this.props;
    if (this.props.location.pathname.startsWith('/activities/')){
      if(!activity){
        return(<span>loading</span>);
      }
    }

    return(
      <section className="activity-show group">
        <section className="activity-header">
          <p>{activity.activity_type} - {activity.author.first_name} {activity.author.last_name}</p>
        </section>
        <section className="activity-block group">
          <section className="activity-show-content">
            <section className="activity-show-date-time">
              <p className="activity-show-time">{this.formatDate(activity)}</p>
            </section>
            <h1 className="activity-show-title">Title: {activity.title}</h1>
            <p className="activity-show-description">Description: {activity.description}</p>
          </section>
          <section className="activity-show-stats">
            <div className="activity-show-pace"><ActivityPace activity={activity} unit_string={" mi"} />Pace</div>
            <div className="activity-show-duration"><h5>{this.formatDuration(activity)}</h5>Duration</div>
            <div className="activity-show-distance"><h5>{activity.distance} mi</h5>Distance</div>
          </section>
        </section>

        <ActivityMapContainer route_id={activity.route_id} />
      </section>
    );
  }
}

export default ActivityDetails;
