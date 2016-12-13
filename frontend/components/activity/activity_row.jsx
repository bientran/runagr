import React from 'react';
import { Link } from 'react-router';


class ActivityRow extends React.Component {

  formatDuration(activity) {
    let hours = (activity.hours !== 0) ? `${activity.hours}:` : "";
    let minutes = (activity.minutes < 10) ? `0${activity.minutes}:` : `${activity.minutes}:`;
    let seconds = (activity.seconds < 10) ? `0${activity.seconds}` : activity.seconds;
    return `${hours}${minutes}${seconds}`;
  }

  formatPace(activity) {
    const durationInSeconds = activity.hours * 3600 + activity.minutes * 60 + activity.seconds;
    let pace = durationInSeconds / activity.distance;
    let paceHr = (Math.floor(pace / 3600) > 0) ? `${Math.floor(pace / 3600)}:` : "";
    let hourTemp = Math.floor(pace / 3600);
    pace = pace % 3600;
    let paceMin = ((hourTemp > 0) && (Math.floor(pace / 60) < 10)) ? (`0${Math.floor(pace / 60)}`) : (Math.floor(pace / 60));
    pace = pace % 60;
    let paceSec = (Math.floor(pace) < 10) ? `0${Math.floor(pace)}` : Math.floor(pace);
    return `${paceHr}${paceMin}:${paceSec}`;
  }


  render() {
    const {activity} = this.props;
    const title = (activity.title.length>20) ? `${activity.title.slice(0,17)}...` : activity.title;
    let d = activity.date.split("-");
    let date = new Date(d[0],d[1]-1,d[2]).toDateString();
    return (
      <tr className="activity-index-row">
        <td>{activity.activity_type}</td>
        <td>{date}</td>
        <td><Link to={`/activities/${activity.id}`}>{title}</Link></td>
        <td>{this.formatDuration(activity)}</td>
        <td>{this.formatPace(activity)}</td>
        <td>{activity.distance}</td>
      </tr>
    );
  }
}

export default ActivityRow;
