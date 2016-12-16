import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router';
import UserRow from './user_row';


class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ""};
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  handleInput(e){
    this.setState({term: e.currentTarget.value});
  }


  search(users, term) {
    return users.filter((user) => {
      let name = `${user.first_name} ${user.last_name}`;
      return name.toLowerCase().includes(term);
    });
  }

  compare(a,b) {
    if (a.last_name > b.last_name){
      return 1;
    }
    if (a.last_name < b.last_name){
      return -1;
    }
    if (a.first_name < b.first_name){
      return 1;
    }
    if (a.first_name > b.first_name){
      return -1;
    }
    return 0;
  }

  render() {
    let users = this.props.users
    if('errors' in users) {
      return (<div></div>);
    }
    users = this.search(values(users),this.state.term);
    let userRows = users.sort(this.compare).map((user,i) => <UserRow key={`user-${i}`} user={user} />);
    return (
      <section className="user-index">
        <h1 className="user-index-title">Users</h1>
        <div className="search-wrapper">Search: <input className="activity-search" type="text" onChange={this.handleInput} value={this.state.term}></input></div>
        <table className="user-index-table">
          <thead>
            <tr className="user-index-header">
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {userRows}
          </tbody>
        </table>
      </section>
    );
  }
}

export default UserIndex;
