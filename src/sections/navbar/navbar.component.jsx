import React from "react";
import { Link } from "react-scroll/modules";

import './navbar.style.scss';
import Button from "../../components/button/button.component";

const Navbar = () => {
   
    return(
        <nav className="navbar-container">
            <section className="navbar-left">
                AndyT <span className="dot">&#8226;</span>
            </section>
            <section className="navbar-center">
                <Link to="projects-container" smooth={true} spy={true} duration={700}>
                    <span className="nav-word">Projects</span>
                </Link>
                <Link to="skills-container" smooth={true} spy={true} duration={700}>
                    <span className="nav-word">Skills</span>
                </Link>
                <Link to="about-container" smooth={true} spy={true} duration={700}>
                    <span className="nav-word">About</span>
                </Link>
            </section>
            <section className="navbar-right">
                <Button name={'Contact'} type={'point3'}/>
            </section>
        </nav>
    )
}

export default Navbar;