import React from 'react';
import { Link, withRouter } from 'react-router';


class MainFooter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.location.pathname === '/signup' ||
      this.props.location.pathname === '/login')
      return <div></div>;
    return(
      <footer>
        <h1 className="footer-logo"></h1><h2>Created by Joe Molinari</h2><a href="https://github.com/jmolinari">Github</a>
      </footer>
    );

  };

}

export default withRouter(MainFooter);
