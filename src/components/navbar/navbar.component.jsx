import React from "react";
import { Link } from "react-scroll/modules";

import './navbar.style.scss';
import Button from "../button/button.component";

const Navbar = () => {
   
    return(
        <div className="navbar-container">
            <div className="navbar-left">
                <Link to="preview-container" smooth={true} spy={true} offset={-65} duration={700}>
                    AndyT <span className="dot">&#8226;</span>
                </Link>
            </div>
            <div className="navbar-center">
                <Link to="projects-container" smooth={true} spy={true} offset={-65} duration={700}>
                    <span>Projects</span>
                </Link>
                <Link to="skills-container" smooth={true} spy={true} offset={-65} duration={700}>
                    <span>Skills</span>
                </Link>
                <Link to="about-container" smooth={true} spy={true} offset={-65} duration={700}>
                    <span>About</span>
                </Link>
            </div>
            <div className="navbar-right">
                <Button name={'Contact'} type={'point3'}/>
            </div>
        </div>
    )
}

export default Navbar;