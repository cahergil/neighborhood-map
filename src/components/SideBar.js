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
        const menu = document.querySelector('nav');
        const menuIcon = closeBtn.children;
        for (let i = 0; i < menuIcon.length; i++) {
            menuIcon[i].classList.toggle("active");
        }
        const map = document.querySelector('.map');
        var styles = window.getComputedStyle(map);

        if(parseInt(styles.zIndex,10) === 9) {
            setTimeout(()=>(map.style.zIndex = 12),500);

        } else {
            map.style.zIndex = 9

        }
        menu.classList.toggle('hidden');


    }

    filterLocations = (locations) => {
        const onGetFilteredLocations = this.props.onGetFilteredLocations;
        onGetFilteredLocations(locations);
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
                <nav className="hidden">
                    <ul className="menu-list">
                        <SearchLocation
                            locations={locations}
                            onFilterLocation={this.filterLocations}
                        />
                        {
                            filteredLocations.map( (location) => (
                                <li className="menu-items" key={location.title}>
                                    <ListItem
                                        onClick={this.props.onClick}
                                        location={location.title}/>
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
