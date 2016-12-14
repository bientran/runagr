import React from 'react';
import { Link } from 'react-router';


class UserRow extends React.Component {

  render() {
    const {user} = this.props;
    return (
      <tr className="user-index-row">
        <td><Link to={`/users/${user.id}`}>{user.first_name} {user.last_name}</Link></td>
      </tr>
    );
  }
}

export default UserRow;
