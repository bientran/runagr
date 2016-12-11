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
      duration: 0,
      date: new Date().toISOString().substring(0, 10),
      time: "",
      title: "",
      description: "",
      user_id: this.props.currentUser.id,
      activity_type: "Run"
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.resetFields = this.resetFields.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
    this.update = this.update.bind(this);

  }

  componentDidMount() {
    this.props.fetchAllRoutes(this.props.currentUser.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.setState({user_id: this.props.currentUser.id});
    this.props.clearRouteErrors;
    const activity = merge({}, this.state,{ user_id: this.props.currentUser.id });
    this.props.createActivity(activity).then((newActivity) => {
      debugger
      this.props.router.push(`/activities/${newActivity.id}`);
    });

  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };



  resetFields() {
    document.getElementById('activity-distance').removeAttribute('disabled');
    this.setState({route_id: -1, distance: "", duration: 0, title: "", activity_type:"Run", date: new Date().toISOString().substring(0, 10), time: "" , description: ""});
  };

  render() {
    console.log(this.props);
    const routes = this.props.userRoutes;
    console.log(routes);
    if('route' in routes) {
      return (<div></div>);
    }
    let map;
    console.log(this.state.route_id);
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

    console.log(this.props.userRoutes[1]);
    const routeOptions = values(routes).map((route) => <option key={route.id} value={route.id}>{route.title}</option>);
    return(
      <section className="activity-form-wrapper">
        <label>
          <h4 className="activity-route-preview">Route Preview:</h4>
          {map()}
        </label>
        <form id="activity-form" className="activity-form group" onSubmit={this.handleSubmit}>
          <label className="activity-form-title">New Activity</label>
            <fieldset className="activity-form-fieldset group">
              <label>Title:
                <input className="activity-title" value={this.state.title}
                  onChange={this.update("title")}
                  type="text"
                  placeholder="Title" />
              </label>
              <label>Duration:
                <input title="test" className="activity-duration" value={this.state.duration}
                  onChange={this.update("duration")}
                  type="text"
                  placeholder="minutes" />
              </label>
              <label>Date:
                <input className="activity-date" value={this.state.date}
                  onChange={this.update("date")}
                  type="date" />
              </label>
              <label>Time:
                <input className="activity-time" value={this.state.time}
                  onChange={this.update("time")}
                  type="time" />
              </label>
              <label>Distance
                <input id="activity-distance" className="activity-input" value={distance}
                  onChange={this.update("distance")}
                  type="text" />
              </label>
              <label>Description
              <textarea className="activity-description" value={this.state.description}
                onChange={this.update("description")}
                type="text"
                placeholder="Description">
              </textarea>
            </label>
            <label>Route:
              <select onChange={this.update("route_id")} value={this.state.route_id}>
                <option value="-1">No route</option>
                {routeOptions}
              </select>
            </label>
            <label>Type:
              <select onChange={this.update("activity_type")} value={this.state.activity_type}>
                <option value="Run">Run</option>
                <option value="Bike">Bike</option>
              </select>
            </label>
            <button onClick={this.resetFields} className="activity-cancel">Reset</button>
            <button className="map-submit">Submit</button>
            <section className="map-form-errors">
              {"this.renderErrors()"}
            </section>
          </fieldset>

        </form>
      </section>

    );

  };

}

export default withRouter(ActivityForm);
