import React from 'react';
import GoogleMapReact from 'google-map-react';

export default class Home extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <div className="container">
        <h1>Studio Smooth</h1>
        <h2>Simple, Smooth, Useful</h2>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
