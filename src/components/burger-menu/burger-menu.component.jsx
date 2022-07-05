import React from "react";

import { BurgerMenuContainer } from "./burger-menu.styte";
import LinkToComponent from "../link/link.component";

const BurgerMemu = ({ open, openToggle }) => {
    return (
        <BurgerMenuContainer open={open}>
            <LinkToComponent openToggle={openToggle} to="projects" name='Projects' offset={-74} />
            <LinkToComponent openToggle={openToggle} to="skills" name="Skills" offset={-74} />
            <LinkToComponent openToggle={openToggle} to="about" name='About' offset={-74} />
            <LinkToComponent openToggle={openToggle} to="footer" name='Contact' offset={-74} />
        </BurgerMenuContainer>
    )
}

export default BurgerMemu;