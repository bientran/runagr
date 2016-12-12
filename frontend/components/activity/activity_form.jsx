import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';
import { values } from 'lodash';
import SmallMap from '../route/small_map';

class ActivityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route_id: -1,
      distance: "",
      date: new Date().toISOString().substring(0, 10),
      time: "",
      hours: "",
      minutes: "",
      seconds: "",
      title: "",
      description: "",
      user_id: this.props.currentUser.id,
      activity_type: "Run"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetFields = this.resetFields.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.update = this.update.bind(this);

  }

  componentDidMount() {
    this.props.fetchAllRoutes(this.props.currentUser.id);
  }

  renderErrors() {
    const {errors} = this.props;
    if(!errors){
      return;
    }
    return (
      <ul>
        {errors.map((error, i) => {
        return (<li className="activity-error" key={i}>{error}</li>);
      })}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearActivityErrors();

    const hours = (this.state.hours.length === 0) ? 0 : this.state.hours;
    const minutes = (this.state.minutes.length === 0) ? 0 : this.state.minutes;
    const seconds = (this.state.seconds.length === 0) ? 0 : this.state.seconds;
    const distance = (this.state.route_id == -1) ? this.state.distance : this.props.userRoutes[this.state.route_id].distance;
    const activity = merge({}, this.state,{ user_id: this.props.currentUser.id, distance: distance, hours: hours, minutes: minutes, seconds: seconds });
    this.props.createActivity(activity).then((newActivity) => {
      this.props.router.push(`/activities/${newActivity.activity.id}`);
    });

  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };



  resetFields(e) {
    e.preventDefault();
    document.getElementById('activity-distance').removeAttribute('disabled');
    this.props.clearActivityErrors();
    this.setState({route_id: -1, distance: "", hours: "", minutes: "", seconds: "", title: "", activity_type:"Run", date: new Date().toISOString().substring(0, 10), time: "" , description: ""});
  };

  render() {
    const routes = this.props.userRoutes;
    if('route' in routes) {
      return (<div></div>);
    }
    let map;
    let distance = 0;
    const distanceField = document.getElementById('activity-distance');

    if (this.state.route_id == -1){
      map = () => {
        return <SmallMap path={-1} />;
      };
      if (distanceField){
        distanceField.removeAttribute('disabled');
      }
      distance = this.state.distance;
    } else {
      map = () => <SmallMap path={routes[this.state.route_id].coordinates} />;
      distance = routes[this.state.route_id].distance;
      distanceField.setAttribute('disabled','true');
    }

    const routeOptions = values(routes).map((route) => <option key={route.id} value={route.id}>{route.title}</option>);
    return(
      <section className="activity-form-wrapper group">
        <form id="activity-form" className="activity-form group" onSubmit={this.handleSubmit}>
          <label className="activity-form-title">New Activity</label>
            <fieldset className="activity-form-fieldset group">
              <label className="title-block">Title
                <section>
                  <input className="activity-title" value={this.state.title}
                    onChange={this.update("title")}
                    type="text"
                    placeholder="Title" />
                </section>

              </label>
              <label className="duration-block">Duration
                <section>
                  <input className="activity-duration"
                    value={this.state.hours}
                    onChange={this.update("hours")}
                    type="text"
                    placeholder="hr" />
                  <input className="activity-duration"
                    value={this.state.minutes}
                    onChange={this.update("minutes")}
                    type="text"
                    placeholder="min" />
                  <input className="activity-duration"
                    value={this.state.seconds}
                    onChange={this.update("seconds")}
                    type="text"
                    placeholder="sec" />
                </section>
              </label>
              <label className="distance-block">Distance
                <section>
                  <input id="activity-distance"
                    className="activity-input"
                    value={distance}
                    onChange={this.update("distance")}
                    type="text" />
                  <h5 className="distance-units">miles</h5>
                </section>
              </label>
              <label className="route-block">Route
                <section>
                  <select className="activity-route"
                    onChange={this.update("route_id")}
                    value={this.state.route_id}>
                    <option value="-1">No route</option>
                    {routeOptions}
                  </select>
                </section>
              </label>

              <label className="type-block">Type
                <section>
                  <select className="activity-type"
                    onChange={this.update("activity_type")}
                    value={this.state.activity_type}>
                    <option value="Run">Run</option>
                    <option value="Bike">Bike</option>
                  </select>
                </section>
              </label>

              <section className="date-time-block">
                <label>Date
                  <section>
                    <input className="activity-date"
                      value={this.state.date}
                      onChange={this.update("date")}
                      type="date" />
                  </section>
                </label>

                <label>Time<section>
                  <input className="activity-time"
                    value={this.state.time}
                    onChange={this.update("time")}
                    type="time" />
                  </section>
                </label>
              </section>

              <label>Description:</label>
              <textarea className="activity-description"
                value={this.state.description}
                onChange={this.update("description")}
                type="text"
                placeholder="Description">
              </textarea>
            <section className="activity-buttons">
              <button onClick={this.resetFields} className="activity-cancel">Reset</button>
              <button className="activity-submit">Submit</button>
            </section>
            <section className="map-form-errors">
              {this.renderErrors()}
            </section>
          </fieldset>

        </form>
        <section className="activity-route-preview">
          {map()}
          <h4 className="activity-preview-label">Route Preview</h4>
        </section>
      </section>

    );

  };

}

export default withRouter(ActivityForm);
