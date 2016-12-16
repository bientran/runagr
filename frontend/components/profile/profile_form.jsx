import React from 'react';
import { Link, withRouter } from 'react-router';
import { values, merge } from 'lodash';

class ProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {first_name: this.props.user.first_name, last_name: this.props.user.last_name, imageFile: null, imageUrl: null};
    this.updateFile = this.updateFile.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.hideForm = this.hideForm.bind(this);

  }

  renderForm() {
    // this.props.clearRouteErrors();
    document.getElementById('profile-form').style.visibility='visible';
    document.getElementById('overlay').className='map-overlay';
  }

  hideForm(e) {
    // this.props.clearRouteErrors();
    e.preventDefault();
    document.getElementById('profile-form').style.visibility='hidden';
    document.getElementById('overlay').className='';
    this.setState({first_name: this.state.first_name, last_name: this.state.last_name, imageFile: null, imageUrl: null})
  }

  handleSubmit(e) {
    let id = this.props.user.id;
    e.preventDefault();
    var file = this.state.imageFile;
    var formData = new FormData();
    if(file){
      formData.append("user[picture]", file);
    }
    // formData.append("user[id]", this.props.user.id);
    formData.append("user[first_name]", this.state.first_name);
    formData.append("user[last_name]", this.state.last_name);
    this.props.updateUser(formData, id);
    this.hideForm(e);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };

  updateFile(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);
    if(file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({imageUrl: "", imageFile: null});
    }
  }


  render() {
    // Location<input onChange={this.update("location")} value={this.state.location} type="text"></input>

    return(
      <section>
        <button className="edit-profile" onClick={this.renderForm}>Edit Profile</button>
      <div onClick={this.hideForm} id="overlay" className=""></div>
      <section className="profile-form-wrapper">
        <form id="profile-form" className="profile-form" onSubmit={this.handleSubmit} encType="multipart/form-data">
          <section className="profile-form-fieldset">
            <label><p>First Name</p><input className="profile-name" onChange={this.update("first_name")} type="text"></input></label>
            <label><p>Last Name</p><input className="profile-name" onChange={this.update("last_name")} type="text"></input></label>
            <section className="profile-buttons">
              <button onClick={this.hideForm} className="profile-cancel">Cancel</button>
              <button className="profile-submit">Submit</button>
            </section>
          </section>
          <section className="picture-input-wrapper">
            <img className="profile-preview" src={this.state.imageUrl}></img>
            <input className="picture-input" type="file" onChange={this.updateFile}></input>
          </section>
        </form>
      </section>
      </section>
    );
  }

}

export default withRouter(ProfileForm);
