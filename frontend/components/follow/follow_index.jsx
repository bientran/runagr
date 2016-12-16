import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router';

class FollowIndex extends React.Component {

  render() {
    let followItems = [];
    let follows = values(this.props.currentUser.followers).forEach((follow) => {
      followItems.push(<li key={follow.id} className="followed-user"><img className="followed-picture" src={follow.picture_url}></img><Link to={`/users/${follow.id}`}>{follow.first_name} {follow.last_name}</Link></li>);
    });
    if (followItems.length === 0) {
      followItems.push(<li key="no-follows" className="followed-user"><Link to="/users">Find users to follow</Link></li>);
    }
    return (
      <section className="follow-index">
        <h1 className="follow-title">Following</h1>
        <ul className="followed-users">
          {followItems}
        </ul>

      </section>
    );
  }
}

export default FollowIndex;
