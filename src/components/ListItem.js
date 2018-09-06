import React, { Component } from 'react';


class ListItem extends Component {




    render() {
        const locTitle = this.props.location;
        return (
            <a href="" onClick={(e)=> this.props.onClick(e,locTitle)}> {locTitle}</a>
        );
    }

}

export default ListItem;
