import React, { useState } from "react";

import { NavbarContainer, MyName, NavbarMenu } from './navbar.style';
import Button from "../../components/button/button.component";
import LinkToComponent from "../../components/link/link.component";
import Burger from "../../components/burger/burger";
import BurgerMemu from "../../components/burger-menu/burger-menu.component";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <BurgerMemu open={open} openToggle={() => setOpen(!open)} />
            <NavbarContainer>
                <MyName>Andrey Tsoy</MyName>
                <Burger openToggle={() => setOpen(!open)} />
                <NavbarMenu>
                    <LinkToComponent to="projects-container" name='Projects' />
                    <LinkToComponent to="skills-container" name="Skills" />
                    <LinkToComponent to="about-container" name='About' />
                </NavbarMenu>
                <Button name={'Contact'} type={'point3'} />
            </NavbarContainer>
        </>

    )
}

export default Navbar;