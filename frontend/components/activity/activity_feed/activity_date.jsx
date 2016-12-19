import React from 'react';

class ActivityDate extends React.Component {

  render() {
    const {date} = this.props;
    let d = date.split("-");
    return (
      <li key={`${date}`} className="date-item">
        <div className="date-circle"></div><div className="arrow-left"></div><p className="feed-item-date">{new Date(d[0],d[1]-1,d[2]).toDateString({weekday: "long"})}</p>
      </li>
    );
  }
}

export default ActivityDate;
