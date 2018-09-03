import React, { Component } from 'react';
import './App.css';
import GoogleMap from './components/GoogleMap';
import SideBar from './components/SideBar';


class App extends Component {

    constructor(props) {
        super(props);
        this.map ={};
    }

    state = {

        locations:[
         {title: 'Picos de Europa', location: {lat: 43.187216, lng: -4.821524}},
         {title: 'Ordesa Y Monte Perdido', location: {lat: 42.627341, lng: -0.111204}},
         {title: 'Teide', location: {lat: 28.272338, lng: -16.642508}},
         {title: 'Caldera de Taburiente', location: {lat: 28.722222, lng: -17.876111}},
         {title: 'Aigüestortes i Estany of Saint Maurici', location: {lat: 42.575027, lng: 0.934498}},
         {title: 'Doñana', location: {lat: 37.042729, lng: -6.434447}},
         {title: 'Tablas de Daimiel', location: {lat: 39.139911, lng: -3.697066}},
         {title: 'Timanfaya', location: {lat: 29.010115, lng: -13.734676}},
         {title: 'Garajonay', location: {lat: 28.128109, lng: -17.237483}},
         {title: 'Archipiélago de Cabrera', location: {lat:  39.15, lng: 2.95}},
         {title: 'Cabañeros', location: {lat: 39.409941, lng: -4.506932}},
         {title: 'Sierra Nevada', location: {lat: 37.041616, lng: -3.137817}},
         {title: 'Islas Atlánticas de Galicia', location: {lat: 42.377719, lng: -8.936686}},
         {title: 'Monfragüe', location: {lat: 39.861607, lng: -6.110294}},
         {title: 'Sierra de Guadarrama', location: {lat: 40.846081, lng: -3.941941}}

        ],
        markers:[]


    }

    initMap = (map) => {
        this.map = map;
        const markers = [];
        let bounds = new window.google.maps.LatLngBounds();
        for (var i = 0; i < this.state.locations.length; i++) {
            const title = this.state.locations[i].title;
            const position = this.state.locations[i].location;
            const marker = new window.google.maps.Marker({
                map: map,
                position: position,
                title: title,
                animation: window.google.maps.Animation.DROP,
                id: i
            });
            markers.push(marker);
            bounds.extend(markers[i].position);

        }
        map.fitBounds(bounds);
        this.setState({ markers: markers })


    }

    updateMap = (filteredLocations) => {

        const markers = this.state.markers;
        console.log('inside updateMap');
        console.log(filteredLocations);
        console.log(this.state.locations.length);
        let match = false;
        for (let i = 0; i < this.state.locations.length; i++) {
            const location = this.state.locations[i];
            for(let j= 0; j < filteredLocations.length; j++) {
                 console.log('inside j');
                 if( location.title === filteredLocations[j].title ) {
                     console.log(location.title);
                     match = true;
                     break;
                 }

            }
            if(match === false) {
                markers[i].setMap(null);
            } else {
                markers[i].setMap(this.map);
                match = false;
            }

        }

        this.setState({markers: markers})

    }


    render() {
        return (
        <div className="App" >


                <SideBar
                    onGetFilteredLocations={this.updateMap}
                    locations={this.state.locations}

                />

                <GoogleMap
                    id="map"
                    onInitMap={this.initMap}
                />

        </div>
        );
    }
}

export default App;
