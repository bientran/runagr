import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router';

class ActivityStats extends React.Component {
  constructor(props) {
    super(props);
    this.getMonday = this.getMonday.bind(this);
  }

  getMonday(d) {
    d = new Date(d);
    let day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1);
    return new Date(d.setDate(diff)).setHours(0,0,0,0);
  }

  getWeeklyMiles(activities) {
    let miles = 0;
    activities.forEach((activity) => {
      miles += parseFloat(activity.distance);
    });
    return Math.round(miles*100)/100;
  }
  getWeeklyDuration(activities) {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    activities.forEach((activity) => {
      hours += parseInt(activity.hours);
      minutes += parseInt(activity.minutes);
      seconds += parseInt(activity.seconds);
    });
    return [hours,minutes,seconds];
  }

  formatDuration(hours,minutes,seconds) {
    if(seconds > 60) {
      minutes += (Math.floor(seconds / 60));
      seconds = seconds % 60;
    }
    if(minutes > 60) {
      hours += (Math.floor(minutes /60));
      minutes = minutes % 60;
    }
    if(hours > 1){
      hours = `${hours}h `;
    } else {
      hours = "";
    }
    if(minutes > 0){
      minutes = `${minutes}m `;
    } else {
      minutes = ""
    }
    if(seconds > 0){
      seconds = `${seconds}s `;
    }
    return `${hours}${minutes}${seconds}`;
  }

  formatPace(hours, minutes, seconds) {
    if(seconds > 60) {
      minutes += (Math.floor(seconds / 60));
      seconds = seconds % 60;
    }
    if(minutes > 60) {
      hours += (Math.floor(minutes /60));
      minutes = minutes % 60;
    }
    if(hours > 1){
      hours = `${hours}:`;
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    } else {
      hours = "";
    }
    if(seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${hours}${minutes}:${seconds}`;
  }

  getWeeklyPace(miles, hours, minutes, seconds) {
    console.log([miles,hours,minutes,seconds]);
    let time = hours * 3600 + minutes * 60 + seconds;
    time/=miles;
    hours = Math.floor(time / 3600);
    time = time % 3600;
    minutes = Math.floor(time / 60);
    time = time % 60;
    seconds = Math.floor(time);
    return(`${this.formatPace(hours,minutes,seconds)}`);
  }

  getDailyMiles(activities) {
    let days = [0,0,0,0,0,0,0];
    activities.forEach((activity) => {
      const date = ((new Date(activity.date).getDay()-1) % 7);
      days[date] += (parseFloat(activity.distance));
    });
    return days.map((day) => Math.round(day*100)/100);
  }

  render() {
    const {activities} = this.props;
    // console.log(activities);
    let weeklyActivities = activities.filter((activity) => {
      const date = new Date(Date.parse(activity.date));
      return (date >= this.getMonday(new Date()));
    });
    const dailyMiles = this.getDailyMiles(weeklyActivities);
    const weeklyMiles = this.getWeeklyMiles(weeklyActivities);
    const duration = this.getWeeklyDuration(weeklyActivities);
    const weeklyDuration = this.formatDuration(...duration);
    let weeklyPace = this.getWeeklyPace(weeklyMiles,...duration);
    console.log(weeklyPace);
    if(weeklyPace != "") {
      weeklyPace += "/mi";
    }
    console.log(weeklyActivities);
    console.log(this.getWeeklyMiles(weeklyActivities));
    console.log(this.formatDuration(...this.getWeeklyDuration(weeklyActivities)));
    console.log(this.getWeeklyPace(this.getWeeklyMiles(weeklyActivities),...this.getWeeklyDuration(weeklyActivities)));
    console.log(this.getDailyMiles(weeklyActivities));

    return (
      <section className="stats">
        <h1 className="stats-title">This Week</h1>
        <section className="stats-content">
          <section className="stats-details">
            <h2 className="stats-mileage">{weeklyMiles} mi</h2>
            <h2 className="stats-duration">{weeklyDuration}</h2>
            <h2 className="stats-pace">{weeklyPace}</h2>
          </section>

          <section className="stats-graph-wrapper">
            <table className="stats-graph">
              <thead>
              </thead>
              <tbody>
                <tr>
                  <td className="bar"><p style={{height: `${dailyMiles[0]*3}px`}}></p></td>
                  <td className="bar"><p style={{height: `${dailyMiles[1]*3}px`}}></p></td>
                  <td className="bar"><p style={{height: `${dailyMiles[2]*3}px`}}></p></td>
                  <td className="bar"><p style={{height: `${dailyMiles[3]*3}px`}}></p></td>
                  <td className="bar"><p style={{height: `${dailyMiles[4]*3}px`}}></p></td>
                  <td className="bar"><p style={{height: `${dailyMiles[5]*3}px`}}></p></td>
                  <td className="bar"><p style={{height: `${dailyMiles[6]*3}px`}}></p></td>
                </tr>
                <tr>
                  <td className="day">M</td>
                  <td className="day">T</td>
                  <td className="day">W</td>
                  <td className="day">T</td>
                  <td className="day">F</td>
                  <td className="day">S</td>
                  <td className="day">S</td>
                </tr>

              </tbody>
            </table>
          </section>
        </section>
      </section>
    );
  }
}












export default ActivityStats;
