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

    state = {

        loadError: false
    }

    componentDidMount() {
        loadGoogleMap((error) => {
            if(!error) {
            const map = new window.google.maps.Map(document.querySelector('.map'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8
            });
            this.props.onInitMap(map);

            // https://developers.google.com/maps/documentation/javascript/examples/event-domListener
            // uses 'resize' of window object
            window.google.maps.event.addDomListener(window,'resize',this.props.onBoundsChanged);
            } else {

                this.setState({loadError:true})
            }
        })

    }


    componentWillUnmount() {

          window.google.maps.event.clearListeners(window,'resize');

    }


    render() {

        if(this.state.loadError === false) {

            return (

                <div className={this.props.id}>
                </div>


            )
        } else {

            return (

                <div className={this.props.id}>
                    <div className="map-error">
                        <h2>Oops, Something went wrong </h2>
                        <br></br>
                        <p>This page didn't load Google Maps correctly</p>
                    </div>

                </div>


            )

        }
    }

}

export default GoogleMap;
