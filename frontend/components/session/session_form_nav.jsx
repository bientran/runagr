import React from 'react';
import { Link, withRouter } from 'react-router';


class SessionFormNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // <a className="auth-link">something</a>

    return(
      <nav className="auth-nav group">
        <h1 className="auth-logo">Logo</h1>
        {this.props.link}
      </nav>
    );

  };

}

export default withRouter(SessionFormNav);
