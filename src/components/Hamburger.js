import React  from 'react';
import PropTypes from 'prop-types';


const  Hamburger = (props) => {


    const handleKeyPress = (event) => {
        // Check to see if space or enter were pressed
        if(event.key === ' ' || event.key === 'Enter') {
            // Prevent the default action to stop scrolling when space is pressed
            event.preventDefault();
            props.onToggleHamburger();

        }
    }

    const handleClick= () => {
        props.onToggleHamburger();
    }

    return (
            <span id="closebtn"
                 role="button"
                 tabIndex="0"
                 aria-pressed="false"
                 aria-label="toggle button"
                 onClick={handleClick}
                 onKeyPress={handleKeyPress}
                >
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </span>
        )

};
Hamburger.propTypes = {

    onToggleHamburger: PropTypes.func.isRequired
}

export default Hamburger;
