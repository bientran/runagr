import React from 'react';
import LargeMap from '../route/large_map';

class ActivityMap extends React.Component {

  componentDidMount() {
    this.props.fetchRouteDetails(this.props.route_id)
  }

  render() {
    const route = this.props.routeDetails;
    if(!this.props.routeDetails && this.props.route_id !== -1 ){
      return(<span>loading</span>);
    }
    let map = (this.props.route_id === -1) ? [] : <LargeMap route={route} />;
    return(
      <section className="activity-map">
        {map}
      </section>
    );
  }
}

export default ActivityMap;
