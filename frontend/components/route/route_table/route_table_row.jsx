import React from 'react';
import { Link } from 'react-router';


class RouteTableRow extends React.Component {

  render() {
    const {route} = this.props;
    return (
      <tr className="user-index-row">
        <td><Link to={`/users/${route.id}`}>{route.title}</Link></td>
      </tr>
    );
  }
}

export default RouteTableRow;
