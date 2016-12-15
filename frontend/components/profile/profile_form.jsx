import React from 'react';
import { Link, withRouter } from 'react-router';
import { values, merge } from 'lodash';

class ProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {first_name: "lol", last_name: "wat", imageFile: null, imageUrl: null};
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {
    let id = this.props.user.id;
    e.preventDefault();
    var file = this.state.imageFile;
    var formData = new FormData();
    formData.append("user[picture]", file);
    formData.append("user[id]", this.props.user.id);
    formData.append("user[first_name]", this.state.first_name);
    formData.append("user[last_name]", this.state.last_name);
    this.props.updateUser(formData, id);
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
    console.log(this.state);
    // Location<input onChange={this.update("location")} value={this.state.location} type="text"></input>
  //   First Name<input onChange={this.update("first_name")} value={this.state.first_name} type="text"></input>
  // Last Name<input onChange={this.update("last_name")} value={this.state.last_name} type="text"></input>

    return(
      <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
        <input type="file" onChange={this.updateFile}></input>
        <button>Submit</button>
        <img src={this.state.imageUrl}></img>
      </form>
    );
  }

}

export default withRouter(ProfileForm);
