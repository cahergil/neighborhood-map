import React, { Component } from 'react';
import SearchLocation from './SearchLocation.js';
import ListItem from './ListItem.js'

class SideBar extends Component {


    state = {

        filteredlocations: []
    }

    componentWillMount() {

        this.setState({filteredlocations: [...this.props.locations]})
    }

    navToggle = () => {

        const closeBtn = document.querySelector('#closebtn');
        const menu = document.querySelector('.menu-list');
        const menuIcon = closeBtn.children;
        for (let i = 0; i < menuIcon.length; i++) {
            menuIcon[i].classList.toggle("active");
        }

        menu.classList.toggle('hidden');

    }

    filterLocations = (locations) => {

        this.setState({filteredlocations: locations})

    }

    render() {
        let locations = this.props.locations;
        let filteredLocations = this.state.filteredlocations;

        return (

            <aside className="sidebar">
                <header className="sidebar-header">
                    <h2 className="title">Spains National Parks</h2>
                    <span id="closebtn" onClick={this.navToggle}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </span>
                </header>
                <nav>
                    <ul className="menu-list hidden">
                        <SearchLocation
                            locations={locations}
                            onFilterLocation={this.filterLocations}
                        />
                        {
                            filteredLocations.map( (location) => (
                                <li className="menu-items" key={location.title}>
                                    <ListItem location={location.title}/>
                                </li>
                            ))

                        }
                    </ul>
                </nav>

            </aside>


        );


    }


}

export default SideBar;
