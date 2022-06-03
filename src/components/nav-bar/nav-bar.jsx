import React from 'react';
import './nav-bar-style.scss';

const NavBar = () => {
    return(
        <div className='nav-wrapper' data-aos="fade-down" data-aos-duration="3000">
            <div className='img-wrapper'></div>
            <div className='menu-wrapper'>
                <span>HOME</span>
                <span>Projects</span>
                <span>About</span>
                <span>Contacts</span>
            </div>
        </div>
    );
}

export default NavBar;