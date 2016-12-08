import React from 'react';
import { Link, withRouter } from 'react-router';
import MainNav from '../nav/main_nav';
import merge from 'lodash/merge';

class RouteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: this.props.coordinates,
      distance: 0,
      title: "",
      description: "",
      user_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetFields = this.resetFields.bind(this);
    this.update = this.update.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    // this.setState({user_id: this.props.currentUser.id});

    debugger
    const route = merge({}, this.state,{coordinates: this.props.coordinates, distance: this.props.distance});
    this.props.createRoute(route).then((newRoute) => {
      debugger
      this.props.router.push(`/routes/${newRoute.route.id}`);
    });

  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };


  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
      </ul>
    );
  }

  resetFields() {
    // this.setState({coordinates: [], distance: 0, title: "", description: ""});
  };

  render() {

    return(
      <section>
          <MainNav />
        <section className="map-controls group">
          <h1 className="route-distance">Distance: {this.props.distance || 0} mi</h1>
          <button className="route-save-button">Save</button>
        </section>
        <form className="map-form group" onSubmit={this.handleSubmit}>
          <label className="map-form-title">Create Route</label>
            <fieldset className="map-form-fieldset group">


              <input className="map-input" value={this.state.title}
                onChange={this.update("title")}
                type="text"
                placeholder="Title" />
              <textarea className="map-description" value={this.state.description}
                onChange={this.update("description")}
                type="text"
                placeholder="Description">
              </textarea>

              <button className="map-submit">Submit</button>
            </fieldset>

        </form>
      </section>

    );

  };

}

export default withRouter(RouteForm);
