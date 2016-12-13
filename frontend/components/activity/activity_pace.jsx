import React from 'react';

class ActivityPace extends React.Component {

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

    return (
      <h5>{this.formatPace(this.props.activity)}{this.props.unit_string}</h5>
    );
  }
}

export default ActivityPace;
