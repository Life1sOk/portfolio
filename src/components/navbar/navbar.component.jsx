import React from "react";

import './navbar.style.scss';

const Navbar = () => {
    return(
        <div className="navbar-container">
            <div className="navbar-left">AndreyT</div>
            <div className="navbar-right">
                <span>Projects</span>
                <span>Skills</span>
                <span>Contacts</span>
            </div>
        </div>
    )
}

export default Navbar;