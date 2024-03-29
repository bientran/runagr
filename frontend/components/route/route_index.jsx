import React from 'react';
// import RouteFormContainer from './route_form_container';
import RouteDraw from './route_draw';
import { values } from 'lodash';
import SmallMap from './small_map';
import RouteAtGlance from './route_at_glance';
import { Link } from 'react-router';


class RouteIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllRoutes(this.props.currentUser.id);
  }

  componentDidUpdate() {

  }


  render() {
    const routes = this.props.routes;
    if('route' in routes) {
      return (<div></div>);
    }
    const userRoutes = values(routes);
    let small = userRoutes.map((route) => {
      return <RouteAtGlance key={`route-${route.id}`} route={route} />
    });
    const test = userRoutes[0];
    return(
      <section>
        <section className="index-header">
          <h1 className="route-index-header">My Routes</h1>
          <Link to="/newroute" className="route-create">Create New Route</Link>
        </section>
        {small.reverse()}
      </section>
    );
  }
}

export default RouteIndex;
