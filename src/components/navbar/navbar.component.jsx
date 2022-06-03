import React from "react";

import './navbar.style.scss';
import Button from "../button/button.component";

const Navbar = () => {
    return(
        <div className="navbar-container">
            <div className="navbar-left">
                AndreyT <span className="dot">&#8226;</span>
            </div>
            <div className="navbar-center">
                <span>Projects</span>
                <span>Skills</span>
                <span>About</span>
            </div>
            <div className="navbar-right">
                <Button name={'Contact'} type={'point3'}/>
            </div>
        </div>
    )
}

export default Navbar;