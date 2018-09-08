import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SearchLocation from './SearchLocation.js';
import ListItem from './ListItem.js'
import Hamburger from './Hamburger.js'

class SideBar extends Component {

    static propTypes = {

        locations: PropTypes.array.isRequired,
        onGetFilteredLocations: PropTypes.func.isRequired,
        onClick: PropTypes.func.isRequired

    }

    state = {

        filteredlocations: []
    }

    componentWillMount() {

        this.setState({filteredlocations: [...this.props.locations]})
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
                    <Hamburger />
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
