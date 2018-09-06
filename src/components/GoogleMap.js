import React, { Component } from 'react';
import PropTypes from 'prop-types';
//https://stackoverflow.com/questions/39056498/export-default-not-working-webpack-reactjs
import {loadGoogleMap} from '../utils/load-google-map.js';
//https://cleverbeagle.com/blog/articles/tutorial-how-to-load-third-party-scripts-dynamically-in-javascript
export class GoogleMap extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        onBoundsChanged: PropTypes.func.isRequired,
        onInitMap: PropTypes.func.isRequired

    }
    componentDidMount() {
        loadGoogleMap(() => {

            const map = new window.google.maps.Map(document.querySelector('.map'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8
            });
            this.props.onInitMap(map);

            // https://developers.google.com/maps/documentation/javascript/examples/event-domListener
            // uses 'resize' of window object
            window.google.maps.event.addDomListener(window,'resize',this.props.onBoundsChanged);

        })

    }


    componentWillUnmount() {

          window.google.maps.event.clearListeners(window,'resize');

    }


    render() {


        return (

            <div className={this.props.id}>
            </div>


        )
    }

}

export default GoogleMap;
