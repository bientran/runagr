import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router';

class ActivityMonth extends React.Component {

  countDays(days, day) {
    var regExp = new RegExp(day, "gi");
    return (days.match(regExp) || []).length;
  }

  render() {
    const {activities} = this.props;
    let days = [];
    activities.forEach((activity) => {
      let d = activity.date.split("-");
      let fixedDate = new Date(d[0],d[1]-1,d[2]);
      days.push(fixedDate.toDateString());
    });
    const dayString = days.join("+");
    let today = new Date();
    let weekCount = 3;
    let weeks = [[],[],[],[]];
    let duration = [[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
    let activeDay = [[],[],[],[]];
    let currentDate = today.getDay();
    let totalActivities = 0;
    while (weekCount >= 0){
      weeks[weekCount][(today.getDay()+6)%7] = today;
      today = new Date(today.getTime());
      totalActivities += this.countDays(dayString,today.toDateString());
      today.setDate(today.getDate()-1);
      if(today.getDay() === 0){
        weekCount--;
      }
    }

    return (
      <section className="month-stats">
        <table>
          <thead>
            <tr>
              <th className="weekday">M</th>
              <th className="weekday">T</th>
              <th className="weekday">W</th>
              <th className="weekday">T</th>
              <th className="weekday">F</th>
              <th className="weekday">S</th>
              <th className="weekday">S</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="month-day"><div className={`circle ${days.includes(weeks[0][0].toDateString())? "large-circle" : ""}`}>{weeks[0][0].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[0][1].toDateString())? "large-circle" : ""}`}>{weeks[0][1].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[0][2].toDateString())? "large-circle" : ""}`}>{weeks[0][2].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[0][3].toDateString())? "large-circle" : ""}`}>{weeks[0][3].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[0][4].toDateString())? "large-circle" : ""}`}>{weeks[0][4].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[0][5].toDateString())? "large-circle" : ""}`}>{weeks[0][5].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[0][6].toDateString())? "large-circle" : ""}`}>{weeks[0][6].getDate()}</div></td>
              <td><div></div></td>
            </tr>
            <tr>
              <td className="month-day"><div className={`circle ${days.includes(weeks[1][0].toDateString())? "large-circle" : ""}`}>{weeks[1][0].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[1][1].toDateString())? "large-circle" : ""}`}>{weeks[1][1].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[1][2].toDateString())? "large-circle" : ""}`}>{weeks[1][2].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[1][3].toDateString())? "large-circle" : ""}`}>{weeks[1][3].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[1][4].toDateString())? "large-circle" : ""}`}>{weeks[1][4].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[1][5].toDateString())? "large-circle" : ""}`}>{weeks[1][5].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[1][6].toDateString())? "large-circle" : ""}`}>{weeks[1][6].getDate()}</div></td>
              <td><div></div></td>
            </tr>
            <tr>
              <td className="month-day"><div className={`circle ${days.includes(weeks[2][0].toDateString())? "large-circle" : ""}`}>{weeks[2][0].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[2][1].toDateString())? "large-circle" : ""}`}>{weeks[2][1].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[2][2].toDateString())? "large-circle" : ""}`}>{weeks[2][2].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[2][3].toDateString())? "large-circle" : ""}`}>{weeks[2][3].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[2][4].toDateString())? "large-circle" : ""}`}>{weeks[2][4].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[2][5].toDateString())? "large-circle" : ""}`}>{weeks[2][5].getDate()}</div></td>
              <td className="month-day"><div className={`circle ${days.includes(weeks[2][6].toDateString())? "large-circle" : ""}`}>{weeks[2][6].getDate()}</div></td>
              <td><div></div></td>
            </tr>
            <tr>
              <td className="month-day"><div className={`circle ${days.includes(weeks[3][0].toDateString())? "large-circle" : ""}`}>{weeks[3][0].getDate()}</div></td>
              <td className="month-day"><div className={(weeks[3][1])? `circle ${days.includes(weeks[3][1].toDateString())? "large-circle" : ""}` : ""}>{(weeks[3][1])? weeks[3][1].getDate() : ""}</div></td>
              <td className="month-day"><div className={(weeks[3][2])?`circle ${days.includes(weeks[3][2].toDateString())? "large-circle" : ""}` : ""}>{(weeks[3][2])? weeks[3][2].getDate() : ""}</div></td>
              <td className="month-day"><div className={(weeks[3][3])?`circle ${days.includes(weeks[3][3].toDateString())? "large-circle" : ""}` : ""}>{(weeks[3][3])? weeks[3][3].getDate() : ""}</div></td>
              <td className="month-day"><div className={(weeks[3][4])?`circle ${days.includes(weeks[3][4].toDateString())? "large-circle" : ""}` : ""}>{(weeks[3][4])? weeks[3][4].getDate() : ""}</div></td>
              <td className="month-day"><div className={(weeks[3][5])?`circle ${days.includes(weeks[3][5].toDateString())? "large-circle" : ""}` : ""}>{(weeks[3][5])? weeks[3][5].getDate() : ""}</div></td>
              <td className="month-day"><div className={(weeks[3][6])?`circle ${days.includes(weeks[3][6].toDateString())? "large-circle" : ""}` : ""}>{(weeks[3][6])? weeks[3][6].getDate() : ""}</div></td>
              <td><div></div></td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default ActivityMonth;
