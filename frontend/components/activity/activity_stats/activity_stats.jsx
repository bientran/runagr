import React from 'react';
import { values } from 'lodash';
import { Link } from 'react-router';

class ActivityStats extends React.Component {
  render() {
    const {activities} = this.props;
    return (
      <section className="stat-graph-wrapper">
      <table class="stat-graph">
        <thead>
        </thead>
        <tbody>
          <tr class="day" id="monday">
            <td class="miles bar" style={{width:"150px", height: "125px"}}></td>
            <th scope="row">Mo</th>
          </tr>
          <tr class="day" id="tuesday">
            <th scope="row">Tu</th>
            <td class="miles bar" style={{background: "#000", height: "225px"}}></td>
          </tr>
          <tr class="day" id="wednesday">
            <th scope="row">We</th>
            <td class="miles bar" style={{background: "#000", height: "25px"}}></td>
          </tr>
          <tr class="day" id="thursday">
            <th scope="row">Th</th>
            <td class="miles bar" style={{height: "20px",width: "80px"}}></td>
          </tr>
          <tr class="day" id="friday">
            <th scope="row">Fr</th>
            <td class="miles bar" style={{height: "200px", width: "205px"}}></td>
          </tr>
          <tr class="day" id="saturday">
            <th scope="row">Sa</th>
            <td class="miles bar" style={{width: "25px"}}></td>
          </tr>
          <tr class="day" id="sunday">
            <th scope="row">Su</th>
            <td class="miles bar" style={{height: "25px"}}></td>
          </tr>

        </tbody>
      </table>
      </section>
    );
  }
}












export default ActivityStats;
