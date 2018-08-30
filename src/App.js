import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/MapContainer'
import SideBar from './components/SideBar'

class App extends Component {
  render() {
    return (
        <div className="App" >

                <SideBar/>

                <MapContainer />

        </div>
    );
  }
}

export default App;
