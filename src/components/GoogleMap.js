import React, { Component } from 'react';
//https://stackoverflow.com/questions/39056498/export-default-not-working-webpack-reactjs
import {loadGoogleMap} from '../utils/load-google-map.js';
//https://cleverbeagle.com/blog/articles/tutorial-how-to-load-third-party-scripts-dynamically-in-javascript
export class GoogleMap extends Component {

    constructor(props) {
        super(props);
        this.map = {};
    }

    componentDidMount() {
        loadGoogleMap(() => {

            const map = new window.google.maps.Map(document.querySelector('.map'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8
            });
            this.props.onInitMap(map);
            this.map = map;
            console.log(window.google);
            console.log('window.google:',window.google);
            window.google.maps.event.addListener(this.map,'bounds_changed',this.props.onBoundsChanged);

        })

    }


    componentWillUnmount() {

        window.google.maps.event.clearListeners(this.map,'bounds_changed');

    }


    render() {


        return (

            <div className={this.props.id}>
            </div>


        )
    }

}

export default GoogleMap;
