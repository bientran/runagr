import React from 'react';
import { Link, withRouter } from 'react-router';


class SessionFormNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <nav className="auth-nav group">
        <h1 className="main-logo"></h1>
        {this.props.link}
      </nav>
    );

  };

}

export default withRouter(SessionFormNav);
