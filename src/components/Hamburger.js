import React  from 'react';

const  Hamburger = (props) => {


    const handleKeyPress = (event) => {
        // Check to see if space or enter were pressed
        if(event.key === ' ' || event.key === 'Enter') {
            // Prevent the default action to stop scrolling when space is pressed
            event.preventDefault();
            navToggle();
        }
    }

    const navToggle = () => {

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

        let pressed = (closeBtn.getAttribute("aria-pressed") === "true")
        closeBtn.setAttribute('aria-pressed',!pressed);


    }

    return (
            <span id="closebtn"
                 role="button"
                 tabIndex="0"
                 aria-pressed="false"
                 aria-label="toggle button"
                 onClick={navToggle}
                 onKeyPress={handleKeyPress}
                >
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </span>
        )

};

export default Hamburger;
