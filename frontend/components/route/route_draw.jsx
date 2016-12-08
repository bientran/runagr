import React from 'react';


class RouteDraw extends React.Component {
  componentDidMount() {

  //const apiKey = "AIzaSyCCajBE7G--_90bCpnZdW9a-xo7Q1u71Kc";

    let {route} = this.props;
    route.coordinates = JSON.parse(route.coordinates);
    const mapOptions = {
      center: route.coordinates[0],
      zoom: 14
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    var poly = new google.maps.Polyline({
      map: this.map,
      path: route.coordinates,
      strokeColor: '#05c435',
      strokeOpacity: .7,
      strokeWeight: 5
    });
    var endMarker = new google.maps.Marker({
      position: route.coordinates[route.coordinates.length-1],
      map: this.map,
      title: 'End',
      icon: {
        url:"http://maps.google.com/mapfiles/kml/paddle/red-blank.png",
        scaledSize: new google.maps.Size(25, 25)
      }
    });
    var startMarker = new google.maps.Marker({
      position: route.coordinates[0],
      map: this.map,
      title: 'Start',
      icon: {
        url:"http://maps.google.com/mapfiles/kml/paddle/grn-blank.png",
        scaledSize: new google.maps.Size(25, 25)
      }
    });

    function zoomToObject(obj,map){
      var bounds = new google.maps.LatLngBounds();
      var points = obj.getPath().getArray();
      for (var n = 0; n < points.length ; n++){
          bounds.extend(points[n]);
      }
      map.fitBounds(bounds);
    }

    zoomToObject(poly,this.map)

  }



  render() {
    return(
      <section className="route">
        <section className="route-details">
          <h2 className="route-title">Title:{this.props.route.title}</h2>
          <h2 className="route-distance">Distance:{this.props.route.distance}</h2>
          <p className="route-description">Description:{this.props.route.description}</p>


        </section>

        <div className="route-map" ref={ map => this.mapNode = map }></div>
      </section>
    );
  }
}

export default RouteDraw;
