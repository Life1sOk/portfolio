import React from "react";

import { BurgerMenuContainer } from "./burger-menu.styte";

const BurgerMemu = ({ open, openToggle, preview, skills, projects, about, handleClick }) => {

    const openPlusScroll = (to) => {
        openToggle();
        handleClick(to);
    }

    return (
        <BurgerMenuContainer open={open}>
            <span onClick={() => openPlusScroll(preview)}>Home</span>
            <span onClick={() => openPlusScroll(projects)}>Projects</span>
            <span onClick={() => openPlusScroll(skills)}>Skills</span>
            <span onClick={() => openPlusScroll(about)}>About</span>
        </BurgerMenuContainer>
    )
}

export default BurgerMemu;