import React from 'react';
import { Link, withRouter } from 'react-router';


class MainFooter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <footer>
        <h1 className="footer-logo">Logo</h1>
      </footer>
    );

  };

}

export default MainFooter;
