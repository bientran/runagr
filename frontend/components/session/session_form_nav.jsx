import React from 'react';
import { Link, withRouter } from 'react-router';


class SessionFormNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <nav>
        <h1 className="logo">Logo</h1>
        <a className="authLink">something</a>
      </nav>
    );

  };

}

export default withRouter(SessionFormNav);
