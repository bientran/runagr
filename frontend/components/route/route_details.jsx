import React from 'react';
import RouteFormContainer from './route_form_container';
import RouteDraw from './route_draw';

// NOTE: MAKE CONTAINER AND CREATE A FETCHROUTE THUNK/ACTIONS

class RouteDetails extends React.Component {
  componentDidMount() {
    this.props.fetchRouteDetails(this.props.routeParams.id);
    window.scrollTo(0, 0);

    // // const keyMarkers = [{lng:-73.963, lat: 40.773},{lng:-73.960, lat: 40.773}];
    // const keyMarkers = [{lat: 40.725, lng: -73.996 }, {lat: 40.727, lng: -73.997}, {lat: 40.720, lng: -73.997}];
    // const mapOptions = {
    //   center: {lng: keyMarkers[0].lng, lat: keyMarkers[0].lat},
    //   // center: center,
    //   zoom: 14
    // };
    //
    // this.map = new google.maps.Map(this.mapNode, mapOptions);
    //
    // let service = new google.maps.DirectionsService();
    // var poly = new google.maps.Polyline({
    //   map: this.map,
    //   path: [],
    //   strokeColor: '#05c435',
    //   strokeOpacity: .7,
    //   strokeWeight: 5
    // });
    // let path = poly.getPath();
    // // path.push(new google.maps.LatLng(keyMarkers[0].lat,keyMarkers[0].lng));
    // // poly.setPath(path);
    // path.push(new google.maps.LatLng(keyMarkers[0].lat,keyMarkers[0].lng));
    //
    // keyMarkers.forEach((marker) => {
    //   // path.push(new google.maps.LatLng(marker.lat,marker.lng));
    //
    //   if (path.length < 2) {
    //     path.push(new google.maps.LatLng(marker.lat,marker.lng));
    //     poly.setPath(path);
    //   } else {
    //     // path.pop();
    //     service.route({
    //       origin: path.getAt(path.length-1),
    //       destination: new google.maps.LatLng(marker.lat,marker.lng),
    //       travelMode: google.maps.DirectionsTravelMode.WALKING
    //     }, function(result, status) {
    //       if (status == google.maps.DirectionsStatus.OK) {
    //         path.pop();
    //         for (var i = 0, len = result.routes[0].overview_path.length;
    //             i < len; i++) {
    //           path.push(result.routes[0].overview_path[i]);
    //         }
    //
    //       }
    //     });
    //   }
    //
    //
    // // });
    //
    // });


  //const apiKey = "AIzaSyCCajBE7G--_90bCpnZdW9a-xo7Q1u71Kc";

  }

  componentDidUpdate() {

  }
  // <div className="route-map" ref={ map => this.mapNode = map }></div>


  render() {
    let {route} = this.props;
    if (this.props.location.pathname.startsWith('/routes/')){
      if(!route){
        return(<span>loading</span>);
      }
    }
    // // let routeReady = [];
    // if(!route){
    //   return (<RouteFormContainer />);
    // }
    const routeReady = <RouteDraw route={route} />;

    // const routeForm = <RouteFormContainer />;

    return(
      <section>
        {routeReady}
      </section>
    );
  }
}

export default RouteDetails;
