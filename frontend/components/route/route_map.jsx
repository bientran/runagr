import React from 'react';
// import MarkerManager from '../../util/marker_manager';

class RouteMap extends React.Component {



  componentDidMount() {



    const mapOptions = {
      center: { lng:-74, lat: 40.72 },
      zoom: 14
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    let service = new google.maps.DirectionsService();
    var poly = new google.maps.Polyline({
      map: this.map,
      path: [],
      strokeColor: '#05c435',
      strokeOpacity: .7,
      strokeWeight: 5
    });


    google.maps.event.addListener(this.map, "click", function(event) {
      let lat = event.latLng.lat();
      let lng = event.latLng.lng();

      let path = poly.getPath();
      path.push(new google.maps.LatLng(lat, lng));

      // poly.setPath(path);

//***********************************





    if (path.length < 2) {
      path.push(event.latLng);
      poly.setPath(path);
    } else {
      path.pop();
      service.route({
        origin: path.getAt(path.length-1),
        destination: event.latLng,
        travelMode: google.maps.DirectionsTravelMode.WALKING
      }, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          // path.pop();
          for (var i = 0, len = result.routes[0].overview_path.length;
              i < len; i++) {
            path.push(result.routes[0].overview_path[i]);
          }
          let polyLengthInMeters = google.maps.geometry.spherical.computeLength(path.getArray());
          console.log(polyLengthInMeters / 1609);
        }
      });
    }






//*********************************

      console.log(path);
    });



  //const apiKey = "AIzaSyCCajBE7G--_90bCpnZdW9a-xo7Q1u71Kc";



  }

  componentDidUpdate() {
    // this.MarkerManager.updateMarkers(this.props.benches);
    // var flightPath = new google.maps.Polyline({
    //   path: this.path,
    //   geodesic: true,
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 1.0,
    //   strokeWeight: 2
    // });
    // flightPath.setMap(this.map);
  }

  render() {

    return(
      <div className="route-map" ref={ map => this.mapNode = map }></div>
    );
  }
}

export default RouteMap;
