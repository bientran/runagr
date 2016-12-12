import React from 'react';
// import RouteFormContainer from './route_form_container';
import RouteDraw from './route_draw';
import { values } from 'lodash';
import SmallMap from './small_map';
import { Link } from 'react-router';


class RouteAtGlance extends React.Component {
  render() {
    const {route} = this.props;
    let title = (route.title.length > 20) ? route.title.slice(0,20) + "..." : route.title;
    return(
      <section className="glance-wrapper group">
        <Link to={`/routes/${route.id}`}><SmallMap routeId={route.id} path={route.coordinates} /></Link>
        <div className="glance-details">
          <h1 className="glance-title"><Link to={`/routes/${route.id}`}>{title}</Link></h1>
          <p className="glance-distance"><b>{route.distance}</b> mi</p>
          <p className="glance-date">Created on {(new Date(Date.parse(route.created_at)).toDateString())}</p>
        </div>
      </section>
    );
  }

}

export default RouteAtGlance;
