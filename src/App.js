import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/MapContainer'
import SideBar from './components/SideBar'

class App extends Component {
  render() {
    return (
        <div className="App" >

            <div className="sidebar">
                <SideBar/>
            </div>

            <div className="map">
                <MapContainer />
            </div>
        </div>
    );
  }
}

export default App;
