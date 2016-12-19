import React from 'react';
import RouteFormContainer from './route_form_container';
import RouteDraw from './route_draw';


class RouteDetails extends React.Component {
  componentDidMount() {
    this.props.fetchRouteDetails(this.props.routeParams.id);
    window.scrollTo(0, 0);


  }

  componentDidUpdate() {

  }


  render() {
    let {route} = this.props;
    if (this.props.location.pathname.startsWith('/routes/')){
      if(!route){
        return(<span>loading</span>);
      }
    }
    const routeReady = <RouteDraw route={route} />;


    return(
      <section>
        {routeReady}
      </section>
    );
  }
}

export default RouteDetails;
