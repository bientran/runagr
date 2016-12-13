import React from 'react';

class ActivityGraph extends React.Component {

  render() {
    const {dailyMiles} = this.props;
    return(
      <section className="stats-graph-wrapper">
        <table className="stats-graph">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td className="bar"><p style={{height: `${dailyMiles[1]*3}px`}}></p></td>
              <td className="bar"><p style={{height: `${dailyMiles[2]*3}px`}}></p></td>
              <td className="bar"><p style={{height: `${dailyMiles[3]*3}px`}}></p></td>
              <td className="bar"><p style={{height: `${dailyMiles[4]*3}px`}}></p></td>
              <td className="bar"><p style={{height: `${dailyMiles[5]*3}px`}}></p></td>
              <td className="bar"><p style={{height: `${dailyMiles[6]*3}px`}}></p></td>
              <td className="bar"><p style={{height: `${dailyMiles[0]*3}px`}}></p></td>
            </tr>
            <tr>
              <td className="day">M</td>
              <td className="day">T</td>
              <td className="day">W</td>
              <td className="day">T</td>
              <td className="day">F</td>
              <td className="day">S</td>
              <td className="day">S</td>
            </tr>

          </tbody>
        </table>
      </section>
    );
  }
}

export default ActivityGraph;
