import React, { Component } from 'react';
import './App.css';
import GoogleMap from './components/GoogleMap';
import SideBar from './components/SideBar';
import WikiSearch from './utils/WikiSearch.js'

class App extends Component {

    constructor(props) {
        super(props);
        this.map = {};
        this.infoWindow = {};
    }

    state = {

        locations:[
         {
            title: 'Picos de Europa',
            wikiTitle: 'Picos_de_Europa_National_Park',
            location: {lat: 43.187216, lng: -4.821524}
         },
         {
            title: 'Ordesa Y Monte Perdido',
            wikiTitle: 'Ordesa_y_Monte_Perdido_National_Park',
            location: {lat: 42.627341, lng: -0.111204}
         },
         {
            title: 'Teide',
            wikiTitle: 'Teide_National_Park',
            location: {lat: 28.272338, lng: -16.642508}
         },
         {
            title: 'Caldera de Taburiente',
            wikiTitle: 'Caldera_de_Taburiente_National_Park',
            location: {lat: 28.722222, lng: -17.876111}
         },
         {
            title: 'Aigüestortes i Estany of Saint Maurici',
            wikiTitle: 'Aigüestortes_i_Estany_de_Sant_Maurici_National_Park',
            location: {lat: 42.575027, lng: 0.934498}
         },
         {
            title: 'Doñana',
            wikiTitle: 'Doñana_National_Park',
            location: {lat: 37.042729, lng: -6.434447}
         },
         {
            title: 'Tablas de Daimiel',
            wikiTitle: 'Tablas_de_Daimiel_National_Park',
            location: {lat: 39.139911, lng: -3.697066}
         },
         {
            title: 'Timanfaya',
            wikiTitle: 'Timanfaya_National_Park',
            location: {lat: 29.010115, lng: -13.734676}
         },
         {
            title: 'Garajonay',
            wikiTitle: 'Garajonay_National_Park',
            location: {lat: 28.128109, lng: -17.237483}
         },
         {
            title: 'Archipiélago de Cabrera',
            wikiTitle: 'Cabrera_Archipelago_Maritime-Terrestrial_National_Park',
            location: {lat:  39.15, lng: 2.95}
         },
         {
            title: 'Cabañeros',
            wikiTitle: 'Cabañeros_National_Park',
            location: {lat: 39.409941, lng: -4.506932}
         },
         {
            title: 'Sierra Nevada',
            wikiTitle: 'Sierra_Nevada_National_Park_(Spain)',
            location: {lat: 37.041616, lng: -3.137817}
         },
         {
            title: 'Islas Atlánticas de Galicia',
            wikiTitle: 'Atlantic_Islands_of_Galicia_National_Park',
            location: {lat: 42.377719, lng: -8.936686}
         },
         {
            title: 'Monfragüe',
            wikiTitle: 'Monfragüe',
            location: {lat: 39.861607, lng: -6.110294}
         },
         {
            title: 'Sierra de Guadarrama',
            wikiTitle: 'Guadarrama_National_Park',
            location: {lat: 40.846081, lng: -3.941941}
         }

        ],
        markers:[]


    }

    initMap = (map) => {
        this.map = map;
        const markers = [];
        let bounds = new window.google.maps.LatLngBounds();
        var largeInfowindow = new window.google.maps.InfoWindow();
        this.infoWindow = largeInfowindow;
        for (var i = 0; i < this.state.locations.length; i++) {
            const title = this.state.locations[i].title;
            const position = this.state.locations[i].location;
            const wikiTitle = this.state.locations[i].wikiTitle;
            const marker = new window.google.maps.Marker({
                map: map,
                position: position,
                title: title,
                wikiTitle: wikiTitle,
                animation: window.google.maps.Animation.DROP,
                id: i
            });
            markers.push(marker);
            marker.addListener('click',()=> this.populateInfoWindow(marker,largeInfowindow))
            bounds.extend(markers[i].position);

        }
        map.fitBounds(bounds);
        this.setState({ markers: markers })



    }

    populateInfoWindow = (marker,infowindow) => {

            if (infowindow.marker !== marker) {
                infowindow.marker = marker;
                WikiSearch.getInfoWindowsSummary(marker.wikiTitle)
                .then(summary => {
                    const content = `<div id="infowindow"> <h2> ${marker.title} </h2>
                    <p> ${summary} </p>
                    <div>`
                    infowindow.setContent(content);
                    infowindow.open(this.map, marker);

                })
            }

    }



    updateMapMarkers = (filteredLocations) => {

        const markers = this.state.markers;
        let bounds = new window.google.maps.LatLngBounds();
        let counter = 0;
        let match = false;
        for (let i = 0; i < this.state.locations.length; i++) {
            const location = this.state.locations[i];
            for(let j= 0; j < filteredLocations.length; j++) {
                 if( location.title === filteredLocations[j].title ) {
                     match = true;
                     break;
                 }

            }
            if(match === false) {
                markers[i].setMap(null);
            } else {
                counter++;
                markers[i].setMap(this.map);
                bounds.extend(markers[i].position);
                match = false;
            }

        }
        this.map.fitBounds(bounds);
        if(counter === 0) {
             this.map.setCenter(new window.google.maps.LatLng(40.463667,-3.74922 ))
             this.map.setZoom(5);

        }
        if(counter === 1) {
            this.map.setZoom(7);

        }
        this.setState({markers: markers})

    }

    updateMapBounds = () => {
        const markers = this.state.markers;
        let bounds = new window.google.maps.LatLngBounds();
        for(let i = 0; i< this.state.markers.length; i++) {
            bounds.extend(this.state.markers[i].position);
        }
        this.map.setCenter(bounds.getCenter());
        this.map.fitBounds(bounds);
        this.setState({markers: markers});

    }

    displayMarker = (e, locTitle) => {
        e.preventDefault();
        const markers =this.state.markers;
        let bounds = new window.google.maps.LatLngBounds();
        let marker;
        for(let i = 0; i< markers.length; i++) {
            if( markers[i].title === locTitle) {
                bounds.extend(markers[i].position);
                marker = markers[i];
            }
        }
        this.map.fitBounds(bounds);
        this.map.setZoom(9);

        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(()=> marker.setAnimation(null),2000);
        this.populateInfoWindow(marker,this.infoWindow);

    }

    render() {
        return (
        <div className="App" >


                <SideBar
                    onClick={this.displayMarker}
                    onGetFilteredLocations={this.updateMapMarkers}
                    locations={this.state.locations}

                />

                <GoogleMap
                    id="map"
                    onBoundsChanged={this.updateMapBounds}
                    onInitMap={this.initMap}
                />

        </div>
        );
    }
}

export default App;
