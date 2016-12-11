import React from 'react';
import SmallMap from '../route/small_map';
import ActivityMap from './activity_map';
import ActivityMapContainer from './activity_map_container';


class ActivityDetails extends React.Component {

  componentDidMount() {
    this.props.fetchActivityDetails(this.props.routeParams.id)
  }

  render() {
    let {activity} = this.props;
    if (this.props.location.pathname.startsWith('/activities/')){
      if(!activity){
        return(<span>loading</span>);
      }
    }
    // let path = -1;
    // if (!this.props.routeDetails){
    //   if (activity.route_id !== -1){
    //     this.props.fetchRouteDetails(activity.route_id);
    //     console.log(this.props);
    //   }
    // }
    // if (path === -1 && this.props.routeDetails) {
    //   path = this.props.routeDetails.coordinates;
    // }
    const durationInSeconds = activity.hours * 3600 + activity.minutes * 60 + activity.seconds;
    let pace = durationInSeconds / activity.distance;
    let paceHr = (Math.floor(pace / 3600) > 0) ? `${Math.floor(pace / 3600)}:` : "";
    pace = pace % 3600;
    let paceMin = Math.floor(pace / 60);
    pace = pace % 60;
    let paceSec = (Math.floor(pace) < 10) ? `0${Math.floor(pace)}` : Math.floor(pace);

    let ampm = (parseInt(activity.time.slice(0,2)) >= 12) ? "PM" : "AM";
    let time = (parseInt(activity.time.slice(0,2)) >= 12) ? `${parseInt(activity.time.slice(0,2))-12}${activity.time.slice(2)}` : activity.time;
    if (time[0] === '0'){
      time = time.slice(1);
    }
    let date = new Date(Date.parse(activity.date)).toDateString();
    let hours = (activity.hours !== 0) ? `${activity.hours}:` : "";
    let minutes = (activity.minutes < 10) ? `0${activity.minutes}:` : `${activity.minutes}:`;
    let seconds = (activity.seconds < 10) ? `0${activity.seconds}` : activity.seconds;



    return(
      <section className="activity group">
        <section className="activity-content">
          <section className="activity-date-time">
            <h5 className="activity-time">{time}{ampm}</h5>
            <h5 className="activity-date">on {date}</h5>
          </section>
          <h1 className="activity-title">Title: {activity.title}</h1>
          <p className="activity-description">Description: {activity.description}</p>
        </section>
        <section className="activity-stats">
          <p className="activity-pace">Pace: {paceHr}{paceMin}:{paceSec}/mi</p>
          <p className="activity-duration">Duration: {hours}{minutes}{seconds}</p>
          <p className="activity-distance">Distance: {activity.distance} mi</p>
        </section>


        <ActivityMapContainer route_id={activity.route_id} />
      </section>
    );
  }
}

export default ActivityDetails;
