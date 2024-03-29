import React from 'react';
import { Link, withRouter } from 'react-router';


class MainNav extends React.Component {

  constructor(props) {
    super(props);
  }

  handleLogout (logout, router, clearUser) {
    return () => {
      clearUser();
      logout();
      router.replace("/login");
    }
  }

  logoutLink(currentUser, logout, router, clearUser) {
    return (
      <button onClick={this.handleLogout(logout, router, clearUser)}>Log Out</button>
    );
  }

  hideDash() {
    document.getElementById('dropDown').style.display = 'none';
    document.getElementsByClassName('nav-link')[0].style.cssText = "border-left:1px solid transparent; border-right: 1px solid transparent";
  }
  showDash() {
    document.getElementById('dropDown').style.display = 'block';
    document.getElementsByClassName('nav-link')[0].style.cssText = "border-left:1px solid #ccc; border-right: 1px solid #ccc";
  }

  hideTraining() {
    document.getElementById('training-dropDown').style.display = 'none';
    document.getElementsByClassName('nav-training-link')[0].style.cssText = "border-left:1px solid transparent; border-right: 1px solid transparent";
  }
  showTraining() {
    document.getElementById('training-dropDown').style.display = 'block';
    document.getElementsByClassName('nav-training-link')[0].style.cssText = "border-left:1px solid #ccc; border-right: 1px solid #ccc";
  }

  hideProfile() {
    document.getElementById('profile-dropDown').style.display = 'none';
    document.getElementsByClassName('nav-profile-link')[0].style.cssText = "border-left:1px solid transparent; border-right: 1px solid transparent";
  }
  showProfile() {
    document.getElementById('profile-dropDown').style.display = 'block';
    document.getElementsByClassName('nav-profile-link')[0].style.cssText = "border-left:1px solid #ccc; border-right: 1px solid #ccc";
  }

  hideExplore() {
    document.getElementById('explore-dropDown').style.display = 'none';
    document.getElementsByClassName('nav-explore-link')[0].style.cssText = "border-left:1px solid transparent; border-right: 1px solid transparent";
  }
  showExplore() {
    document.getElementById('explore-dropDown').style.display = 'block';
    document.getElementsByClassName('nav-explore-link')[0].style.cssText = "border-left:1px solid #ccc; border-right: 1px solid #ccc";
  }

  highlight() {
    document.getElementsByClassName('nav-link')[0].style.cssText = "border-bottom: 5px solid red";
  }


  render() {
    if (this.props.location.pathname === '/signup' || this.props.location.pathname === '/login') {
      return <div></div>;
    }
    return(
      <nav className="main-nav">
        <Link to="/dashboard"><h1 className="logo"></h1></Link>
        <ul className="nav-links group">
          <li className="nav-link" onMouseOver={this.showDash} onMouseLeave={this.hideDash}>
            <Link className="dash" to="/dashboard">Dashboard<div className="arrow-down"></div></Link>
            <ul id="dropDown" className="dashboard-links">
              <li className="dash-link" onClick={this.hideDash}><Link to="/newroute">Create New Route</Link></li>
              <li className="dash-link" onClick={this.hideDash}><Link to="/routes">My Routes</Link></li>
            </ul>
          </li>
        </ul>

        <ul className="training-nav">
          <li className="nav-training-link" onMouseOver={this.showTraining} onMouseLeave={this.hideTraining}>
            <Link className="training" to="/activities">Training<div className="arrow-down"></div></Link>
            <ul id="training-dropDown" className="training-links">
              <li className="training-link" onClick={this.hideTraining}><Link to="/newactivity">Create New Activity</Link></li>
              <li className="training-link" onClick={this.hideTraining}><Link to="/activities">My Activities</Link></li>
            </ul>
          </li>
        </ul>
        <ul className="explore-nav">
          <li className="nav-explore-link" onMouseOver={this.showExplore} onMouseLeave={this.hideExplore}>
            <Link className="explore" to="/users">Explore<div className="arrow-down"></div></Link>
            <ul id="explore-dropDown" className="explore-links">
              <li className="explore-link" onClick={this.hideExplore}><Link to="/users">View Users</Link></li>
            </ul>
          </li>
        </ul>
        <ul className="profile-nav">
          <li className="nav-profile-link" onMouseOver={this.showProfile} onMouseLeave={this.hideProfile}>
            <Link className="profile" to={`/users/${this.props.currentUser.id}`}><img className="nav-profile-picture" src={this.props.currentUser.picture_url}></img></Link>
            <ul id="profile-dropDown" className="profile-links">
              <li className="profile-link" onClick={this.hideProfile}><Link to={`/users/${this.props.currentUser.id}`}>My Profile</Link></li>
              <li className="profile-link" onClick={this.hideProfile}>{this.logoutLink(this.props.currentUser, this.props.logout, this.props.router, this.props.clearUser)}</li>
            </ul>
          </li>
        </ul>
      </nav>
    );

  };

}

export default withRouter(MainNav);
