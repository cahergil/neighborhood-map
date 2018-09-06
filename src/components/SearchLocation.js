import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp';

class SearchLocation extends Component {

    constructor(props) {
        super(props);
        this.showingLocations = [];
    }

    static propTypes = {

        locations: PropTypes.array.isRequired,
        onFilterLocation: PropTypes.func.isRequired

    }

    state = {

        query: ''

    }

    updateQuery =(newValue,onFilterLocation) =>{


        const locations = this.props.locations;


        if(newValue) {
            const match = new RegExp(escapeRegExp(newValue), 'i')
            this.showingLocations= locations.filter((loc)=> match.test(loc.title));

        } else {

            this.showingLocations = locations;

        }
        // onFilterLocation(newValue);
        this.setState({query: newValue.trim()});
        onFilterLocation(this.showingLocations);

    }

    render() {

        const onFilterLocation = this.props.onFilterLocation;

        return (
            <input className="search-input"
                type='text'
                placeholder="search park..."
                onChange={(event) =>this.updateQuery(event.target.value,onFilterLocation)}
                >

            </input>
        );

    }




}

export default SearchLocation;
