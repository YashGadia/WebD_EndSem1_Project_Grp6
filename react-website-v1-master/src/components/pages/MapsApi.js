import { Component } from 'react'
import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import '../../App.css';

class MapContainer extends Component {
    render() {
        return (
            <Map
            google={this.props.google}
            style={{width:"100%", height:"100%"}}
            zoom={10}
            initialCenter={
                {
                    lat: 26.846695,
                    lng: 80.946167
                }
            }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyCEdecd_UMuNTgp8uQSDpkSjnzRBDYbZfQ"
})(MapContainer)
