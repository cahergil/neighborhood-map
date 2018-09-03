import React, { Component } from 'react';
import SearchLocation from './SearchLocation.js';
import ListItem from './ListItem.js'

class SideBar extends Component {


    navToggle = () => {

        const closeBtn = document.querySelector('#closebtn');
        const menu = document.querySelector('.menu-list');
        const menuIcon = closeBtn.children;
        for (let i = 0; i < menuIcon.length; i++) {
            menuIcon[i].classList.toggle("active");
        }

        menu.classList.toggle('hidden');

    }

    render() {
        let locations = this.props.locations;
        locations = locations.map((obj) =>  obj.title );
        // console.log(locations);
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
                        <SearchLocation />
                        {
                            locations.map( (location) => (
                                <li className="menu-items" key={location}>
                                    <ListItem location={location}/>
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
