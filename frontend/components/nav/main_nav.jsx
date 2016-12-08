import React from 'react';
import { Link, withRouter } from 'react-router';


class MainNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <nav className="main-nav">
        <h1 className="logo">Logo</h1>
        <ul className="nav-link">
          <Link to="/newroute">Create New Route</Link>
        </ul>
      </nav>
    );

  };

}

export default withRouter(MainNav);
