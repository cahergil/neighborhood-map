import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {


        return (
            <a href="" onClick={(e)=> props.onClick(e,props.location)}> {props.location}</a>
        );


};
ListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    location: PropTypes.string.isRequired
}

export default ListItem;
