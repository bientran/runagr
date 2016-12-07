import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionFormNav from '../session/session_form_nav';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.processForm(user).then(() => this.redirect());
    this.props.processForm(user).then(() => {
      // this.setState({username: "", password: ""})
      this.props.router.push("/");
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };


  renderErrors() {

    return (
      <ul>
        {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
      </ul>
    );
  }
  signupLink(){
    return (
      <Link to="/signup" onClick={this.resetFields}>Sign Up</Link>
    );
  };

  loginLink(){
    return (
      <Link to="/login" onClick={this.resetFields}>Log In</Link>
    );
  };

  resetFields() {
    this.setState({email: "", password: ""});
    this.props.clearErrors();
  };

  firstName() {
    return(
      <input className="auth-name-input" value={this.state.first_name}
        onChange={this.update("first_name")}
        type="text"
        placeholder="First Name" />
    );
  };

  lastName() {
    return (
      <input className="auth-name-input" value={this.state.last_name}
        onChange={this.update("last_name")}
        type="text"
        placeholder="Last Name" />
    );
  };

  demoButton() {
    return(
      <button className="auth-demo" onClick={this.logDemoAccount.bind(this)}>Demo Login</button>
    );
  };

  logDemoAccount(e) {
    e.preventDefault();
    this.setState({email: "test", password: "password"})
    const user = {email: "test", password: "password"};
    this.props.processForm(user).then(() => {
      this.props.router.push("/");
    });
  }

  render() {
    const formType = this.props.formType.toLowerCase();



    const fName = (formType === 'login') ? [] : this.firstName();
    const lName = (formType === 'login') ? [] : this.lastName();
    const link = (formType === 'signup') ? this.loginLink() : this.signupLink();

    const demoLogin = (formType === 'login') ? this.demoButton() : [];

    return(
      <section>
        <header className="auth-header">
          <SessionFormNav />
        </header>

        {link}
        <form className="auth-form group" onSubmit={this.handleSubmit}>
          <label className="auth-form-title">{formType}</label>
            <fieldset className="auth-form-fieldset group">
              {fName}
              {lName}
              <input className="auth-input" value={this.state.email}
                onChange={this.update("email")}
                type="text"
                placeholder="Email" />

              <input className="auth-input" value={this.state.password}
                onChange={this.update("password")}
                type="password"
                placeholder="password" />

              <button className="auth-submit">Submit</button>
              {demoLogin}
            </fieldset>
            <section className="auth-errors">
              {this.renderErrors()}
            </section>
        </form>
      </section>

    );

  };

}

export default withRouter(SessionForm);
