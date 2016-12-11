import React from 'react';
import { Link, withRouter } from 'react-router';


class MainNav extends React.Component {

  constructor(props) {
    super(props);
  }

  mainNav() {
    return(
      <nav className="main-nav group">
        <h1 className="logo">Logo</h1>
        <ul className="nav-links">
          <Link className="nav-link" to="/newroute">Create New Route</Link>
        </ul>
      </nav>
    );
  }

  hideDrop() {
    // document.getElementById('dropDown').style.display="none";
    // document.getElementById('dropDown').style.removeProperty('display');
  }

  render() {
    if (this.props.location.pathname === '/signup' ||
      this.props.location.pathname === '/login')
      return <div></div>;
    // let src = <%= asset_url("logo_small_orange.png") %>;
    return(
      <nav className="main-nav">
        <h1 className="logo"></h1>
        <ul className="nav-links group">
          <li className="nav-link">
            <Link className="dash" to="/dashboard">Dashboard<div className="arrow-down"></div></Link>
            <ul id="dropDown" className="dashboard-links">
              <li className="dash-link" onClick={this.hideDrop}><Link to="/newroute">Create New Route</Link></li>
              <li className="dash-link" onClick={this.hideDrop}><Link to="/routes">My Routes</Link></li>
              <li className="dash-link" onClick={this.hideDrop}><Link to="/newactivity">Create New Activity</Link></li>
            </ul>
          </li>

        </ul>
      </nav>
    );

  };

}

export default withRouter(MainNav);
