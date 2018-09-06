import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        location: PropTypes.string.isRequired
    }


    render() {
        const locTitle = this.props.location;
        return (
            <a href="" onClick={(e)=> this.props.onClick(e,locTitle)}> {locTitle}</a>
        );
    }

}

export default ListItem;
