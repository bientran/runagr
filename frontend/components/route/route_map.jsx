import React from 'react';
import RouteFormContainer from './route_form_container';

class RouteMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coordinates: "" };
  }

  componentDidMount() {
    let keyMarkers = [];

    const mapOptions = {
      center: { lng:-73.969, lat: 40.773 },
      // center: center,
      zoom: 14
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    if (navigator.geolocation) {
      const that = this;
      navigator.geolocation.getCurrentPosition(function(pos) {
        // center = pos.coords;
        const center =  { lng: pos.coords.longitude, lat: pos.coords.latitude };
        that.map.panTo(center);
      });
    }

    const startMarker = new google.maps.Marker({
      map: this.map,
      title: 'Start',
      icon: {
        url:"http://maps.google.com/mapfiles/kml/paddle/grn-blank.png",
        scaledSize: new google.maps.Size(25, 25)
      }
    });
    const endMarker = new google.maps.Marker({
      map: this.map,
      title: 'End',
      icon: {
        url:"http://maps.google.com/mapfiles/kml/paddle/red-blank.png",
        scaledSize: new google.maps.Size(25, 25)
      }
    });

    let service = new google.maps.DirectionsService();
    var poly = new google.maps.Polyline({
      map: this.map,
      path: [],
      strokeColor: '#05c435',
      strokeOpacity: .7,
      strokeWeight: 5
    });
    const that = this;
    google.maps.event.addListener(this.map, "click", function(event) {

      const form = document.getElementById('map-form');
      if (form.style.visibility === 'visible'){
        document.getElementById('map-form').style.visibility='hidden';
        document.getElementById('overlay').className='';
        return;
      }

      // document.getElementById('route-map').className='route-map';
      const distance = document.getElementById('route-distance');
      const coords = document.getElementById('route-coords');

      let lat = event.latLng.lat();
      let lng = event.latLng.lng();
      let path = poly.getPath();


      path.push(new google.maps.LatLng(lat, lng));


  //DISTANCE CALCULATION / ROUTING


    if (path.length < 2) {
      startMarker.setPosition(event.latLng);

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
          // distance.value = `${Math.round((polyLengthInMeters / 1609) * 100) / 100} miles `;
          // coords.value = poly.getPath().getArray();
          // coords.value = JSON.stringify(keyMarkers);
          let something = JSON.stringify(path.getArray());
          keyMarkers = JSON.stringify(path.getArray());
          that.setState({coordinates: JSON.stringify(path.getArray()),
            distance: (Math.round((polyLengthInMeters / 1609) * 100) / 100)});
        }
      });
      endMarker.setPosition(event.latLng);


    }

    });


  //const apiKey = "AIzaSyCCajBE7G--_90bCpnZdW9a-xo7Q1u71Kc";

  }

  componentDidUpdate() {

  }


  render() {
    return(
      <section>
          <div id="route-map" className="route-map" ref={ map => this.mapNode = map }></div>
          <RouteFormContainer coordinates={this.state.coordinates} distance={this.state.distance} />
      </section>
    );
  }
}

export default RouteMap;
