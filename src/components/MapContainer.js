import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { Component } from 'react';


export class MapContainer extends Component {



    render() {


        return (
            <Map
                google={this.props.google}
                zoom={14}
                >
            </Map>
        )
    }

}

export default GoogleApiWrapper({
   apiKey: ('AIzaSyDlAvOeTTibT3teJx7iBKpol1Y3P7TizQs')
})(MapContainer)
