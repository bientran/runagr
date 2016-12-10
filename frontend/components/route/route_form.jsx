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
    this.renderErrors = this.renderErrors.bind(this);
    this.update = this.update.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.hideForm = this.hideForm.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    // this.setState({user_id: this.props.currentUser.id});
    this.props.clearRouteErrors;
    const route = merge({}, this.state,{user_id: this.props.currentUser.id, coordinates: this.props.coordinates, distance: this.props.distance});
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
    const {errors} = this.props;
    if(!errors){
      return;
    }
    return (
      <ul>
        {errors.map((error, i) => {
        if(error.includes("Coordinates")){
          return (<li className="route-error" key={i}>Route can't be empty</li>);
        }
        return (<li className="route-error" key={i}>{error}</li>);
      })}

      </ul>
    );
  }

  renderForm() {
    this.props.clearRouteErrors();
    document.getElementById('map-form').style.visibility='visible';
    document.getElementById('overlay').className='map-overlay';
  }

  hideForm(e) {
    this.props.clearRouteErrors();
    e.preventDefault();
    document.getElementById('map-form').style.visibility='hidden';
    document.getElementById('overlay').className='';
    this.setState({title: "", description: ""})
  }

  resetFields() {
    // this.setState({coordinates: [], distance: 0, title: "", description: ""});
  };

  render() {

    return(
      <section>
          <div onClick={this.hideForm} id="overlay" className=""></div>
        <section className="map-controls group">
          <h1 className="route-distance">Distance: {this.props.distance || 0} mi</h1>
          <button onClick={this.renderForm} className="route-save-button">Save</button>
        </section>
        <form id="map-form" className="map-form group" onSubmit={this.handleSubmit}>
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
              <button onClick={this.hideForm} className="map-cancel">Cancel</button>
              <button className="map-submit">Submit</button>
              <section className="map-form-errors">
                {this.renderErrors()}
              </section>
            </fieldset>

        </form>
      </section>

    );

  };

}

export default withRouter(RouteForm);
