import React, { Component } from 'react';
import './App.css';
import GoogleMap from './components/GoogleMap'
import SideBar from './components/SideBar'

class App extends Component {
  render() {
    return (
        <div className="App" >


                <SideBar/>

                <GoogleMap id="map"/>

        </div>
    );
  }
}

export default App;
