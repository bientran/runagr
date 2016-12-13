import React from 'react';

class SmallMap extends React.Component {

  encodePath() {
    let path = [];
    // console.log(this.props.path);
    if (typeof this.props.path !== "object"){
      JSON.parse(this.props.path).forEach((coord) => path.push(`${coord.lat},${coord.lng}`));
    } else {
      this.props.path.forEach((coord) => path.push(`${coord.lat},${coord.lng}`));
    }
    return path.join("|");
  }

  staticMapUrl() {
    let urlBase = "https://maps.googleapis.com/maps/api/staticmap?";
    // let size = `size=200x200`;
    let size;
    if(this.props.x){
      size = `size=${this.props.x}x${this.props.y}`;
    } else {
      size = `size=200x200`;
    }
    let path = `&path=weight:3%7Ccolor:blue|${this.encodePath()}`;
    let key = "&key=AIzaSyBIpNsO03UZ-PFgUmeL-RZAeZDIlgVmC8c";
    return urlBase + size + key +path ;
  }

  fixImage() {
    let size;
    if(this.props.x){
      return `https://maps.googleapis.com/maps/api/staticmap?size=${this.props.x}x${this.props.y}&key=AIzaSyBIpNsO03UZ-PFgUmeL-RZAeZDIlgVmC8c`;
    } else {
      return "https://maps.googleapis.com/maps/api/staticmap?size=200x200&key=AIzaSyBIpNsO03UZ-PFgUmeL-RZAeZDIlgVmC8c";
    }
  }

  render () {
    if (!this.props.path){
      return (<div></div>);
    }
    const url = (this.props.path === -1 || this.staticMapUrl().length > 8191) ? this.fixImage() : this.staticMapUrl();
    const overlay = (this.props.path === -1 || this.staticMapUrl().length > 8191) ? <h4 className="broken-image-text">Preview Not Available</h4> : <div></div>;
    return(
      <div>
        <img className="glance-map" src={url} />
          <div className="overlay-wrapper">
          {overlay}
        </div>
      </div>
    );
  }
};

export default SmallMap;
