import React from 'react';
import { Link, withRouter } from 'react-router';
import { values, merge } from 'lodash';

class ProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {first_name: "", last_name: ""};
  }

  handleSubmit(e) {
    console.log(this.props);
    console.log(this.state);
    e.preventDefault();
    console.log(this.state);
    console.log(merge({},this.state));
    this.props.updateUser(merge({},this.state));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };


  render() {
    // Location<input onChange={this.update("location")} value={this.state.location} type="text"></input>

    return(
      <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
        First Name<input onChange={this.update("first_name")} value={this.state.first_name} type="text"></input>
        Last Name<input onChange={this.update("last_name")} value={this.state.last_name} type="text"></input>
        <input type="file" onChange={this.update("picture")} name="file"></input>
        <button>Submit</button>
      </form>
    );
  }

}

export default withRouter(ProfileForm);
