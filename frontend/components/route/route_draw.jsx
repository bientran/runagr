import React from 'react';
import LargeMap from './large_map';


class RouteDraw extends React.Component {
  componentDidMount() {

  }
  getFastest(activities) {
    let fastest = null;
    let hours,minutes,seconds = 0;
    activities.forEach((activity) => {
      let time = activity.hours * 3600 + activity.minutes * 60 + activity.seconds;
      if (fastest === null || time < fastest){
        fastest = time;
        hours = activity.hours;
        minutes = activity.minutes;
        seconds = activity.seconds;
      }
    });
    if(hours === 0){
      hours = "";
    }else{
      hours = hours + "h";
    }
    if(minutes === 0){
      minutes = "";
    }else{
      minutes = minutes + "m";
    }
    if(seconds === 0){
      seconds = "";
    }else{
      seconds = seconds + "s";
    }
    if (fastest === null) {
      return <div></div>;
    } else {
      return (<h2 className="route-record">Fastest Time: {hours} {minutes} {seconds}</h2>);
    }
  }


  render() {
    return(
      <section className="route group">
        <section className="route-header">
          <h2 className="route-title">Title: {this.props.route.title}</h2>
        </section>
        <section className="route-details">
          <LargeMap route={this.props.route} />
          <section className="route-info">
            <h2 className="route-author">By: {this.props.route.author.first_name} {this.props.route.author.last_name}</h2>
            <h2 className="route-dist">Distance: {this.props.route.distance} mi</h2>
            <h2 className="route-description">Description: {this.props.route.description}</h2>
            {this.getFastest(this.props.route.activities)}
          </section>
        </section>
      </section>
    );
  }
}

export default RouteDraw;
