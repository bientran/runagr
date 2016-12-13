import React from 'react';

class ActivityDate extends React.Component {

  render() {
    const {date} = this.props;
    return (
      <li key={`${date}`} className="date-item">
        <div className="date-circle"></div><div className="arrow-left"></div><p className="feed-item-date">{new Date(Date.parse(date)).toDateString({weekday: "long"})}</p>
      </li>
    );
  }
}

export default ActivityDate;
