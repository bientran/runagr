import React from 'react';
import SmallMap from '../route/small_map';
import ActivityMap from './activity_map';
import ActivityMapContainer from './activity_map_container';


class ActivityDetails extends React.Component {

  componentDidMount() {
    this.props.fetchActivityDetails(this.props.routeParams.id)
  }

  formatPace(activity) {
    const durationInSeconds = activity.hours * 3600 + activity.minutes * 60 + activity.seconds;
    let pace = durationInSeconds / activity.distance;
    let paceHr = (Math.floor(pace / 3600) > 0) ? `${Math.floor(pace / 3600)}:` : "";
    pace = pace % 3600;
    let paceMin = Math.floor(pace / 60);
    pace = pace % 60;
    let paceSec = (Math.floor(pace) < 10) ? `0${Math.floor(pace)}` : Math.floor(pace);
    return `${paceHr}${paceMin}:${paceSec}`;
  }

  formatDuration(activity) {
    let hours = (activity.hours !== 0) ? `${activity.hours}:` : "";
    let minutes = (activity.minutes < 10) ? `0${activity.minutes}:` : `${activity.minutes}:`;
    let seconds = (activity.seconds < 10) ? `0${activity.seconds}` : activity.seconds;
    return `${hours}${minutes}${seconds}`;
  }

  formatDate(activity) {
    let ampm = (parseInt(activity.time.slice(0,2)) >= 12) ? "PM" : "AM";
    let time = (parseInt(activity.time.slice(0,2)) >= 12) ? `${parseInt(activity.time.slice(0,2))-12}${activity.time.slice(2)}` : activity.time;
    if (time[0] === '0'){
      time = time.slice(1);
    }
    let date = new Date(Date.parse(activity.date)).toDateString();

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
        <section className="activity-show-content">
          <section className="activity-show-date-time">
            <h5 className="activity-show-time">{this.formatDate(activity)}</h5>
          </section>
          <h1 className="activity-show-title">Title: {activity.title}</h1>
          <p className="activity-show-description">Description: {activity.description}</p>
        </section>
        <section className="activity-show-stats">
          <p className="activity-show-pace">Pace: {this.formatPace(activity)}/mi</p>
          <p className="activity-show-duration">Duration: {this.formatDuration(activity)}</p>
          <p className="activity-show-distance">Distance: {activity.distance} mi</p>
        </section>


        <ActivityMapContainer route_id={activity.route_id} />
      </section>
    );
  }
}

export default ActivityDetails;
