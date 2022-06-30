import React, { useState } from "react";

import './navbar.style.scss';
import Button from "../../components/button/button.component";
import LinkToComponent from "../../components/link/link.component";
import Burger from "../../components/burger/burger";
import BurgerMemu from "../../components/burger-menu/burger-menu.component";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <BurgerMemu open={open} openToggle={() => setOpen(!open)} />
            <nav className="navbar-container">
                <span className="short-name">Andrey Tsoy</span>
                <Burger openToggle={() => setOpen(!open)} />
                <section className="navbar-center">
                    <LinkToComponent to="projects-container" name='Projects' />
                    <LinkToComponent to="skills-container" name="Skills" />
                    <LinkToComponent to="about-container" name='About' />
                </section>
                <Button name={'Contact'} type={'point3'} />
            </nav>
        </>

    )
}

export default Navbar;