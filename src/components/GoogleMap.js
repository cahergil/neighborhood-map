import React, { Component } from 'react';
import {loadGoogleMap} from '../utils/load-google-map.js';
//https://cleverbeagle.com/blog/articles/tutorial-how-to-load-third-party-scripts-dynamically-in-javascript
export class GoogleMap extends Component {


    componentDidMount() {
        loadGoogleMap(() => {

            const map = new window.google.maps.Map(document.querySelector('.map'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8
            });
            this.props.onInitMap(map);

        })

    }

    render() {


        return (

            <div className={this.props.id}>
            </div>


        )
    }

}

export default GoogleMap;
