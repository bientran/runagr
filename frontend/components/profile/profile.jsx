import React from 'react';
import { Link, withRouter } from 'react-router';
import { values } from 'lodash';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUserDetails(this.props.routeParams.id);
  }

  render() {
    let user = this.props.user;
    if(!user) {
      return (<div></div>);
    }
    // if('activity' in activities || !activities) {
    //   return (<div></div>);
    // }
    return(
      <section className="profile">
        {user.first_name}{user.last_name}
      </section>
    );
  }

}

export default withRouter(Profile);
