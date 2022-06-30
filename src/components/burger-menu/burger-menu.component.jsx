import React from "react";

import { BurgerMenuContainer } from "./burger-menu.styte";
import LinkToComponent from "../link/link.component";

const BurgerMemu = ({ open, openToggle }) => {
    return (
        <BurgerMenuContainer open={open}>
            <LinkToComponent openToggle={openToggle} to="projects-container" name='Projects' />
            <LinkToComponent openToggle={openToggle} to="skills-container" name="Skills" />
            <LinkToComponent openToggle={openToggle} to="about-container" name='About' />
        </BurgerMenuContainer>
    )
}

export default BurgerMemu;