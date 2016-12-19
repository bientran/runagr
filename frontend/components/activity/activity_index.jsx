import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router';
import ActivityRow from './activity_row';


class ActivityIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state ={term: ""};
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllActivities(this.props.currentUser.id);
  }

  handleInput(e){
    this.setState({term: e.currentTarget.value});
  }


  search(activities, term) {
    return activities.filter((activity) => activity.title.toLowerCase().includes(term));
  }

  compare(a,b) {
    if (a.date > b.date){
      return -1;
    }
    if (a.date < b.date){
      return 1;
    }
    if (a.time < b.time){
      return -1;
    }
    if (a.time > b.time){
      return 1;
    }
    return 0;
  }

  render() {
    let activities = this.props.activities
    if('activity' in activities) {
      return (<div></div>);
    }

    activities = this.search(values(activities),this.state.term);
    let activityRows = activities.sort(this.compare).map((activity) => <ActivityRow key={`activity-${activity.id}`} activity={activity} />);
    return (
      <section className="activity-index">
        <h1 className="activity-index-title">My Activities</h1>
        <div className="search-wrapper">Search: <input className="activity-search" type="text" onChange={this.handleInput} value={this.state.term}></input></div>
        <table className="activity-index-table">
          <thead>
            <tr className="activity-index-header">
              <th>Type</th>
              <th>Date</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Pace ({"/mi"})</th>
              <th>Distance (miles)</th>
            </tr>
          </thead>
          <tbody>
            {activityRows}
          </tbody>
        </table>
      </section>
    );
  }
}

export default ActivityIndex;
