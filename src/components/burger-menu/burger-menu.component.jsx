import React from "react";

import { BurgerMenuContainer, BurgerWord, BackToCloseMenu } from "./burger-menu.styte";

const BurgerMemu = ({ open, openToggle, preview, skills, projects, about, handleClick }) => {

    const openPlusScroll = (to) => {
        openToggle();
        handleClick(to);
    }

    return (
        <>
            <BackToCloseMenu onClick={() => openToggle()} open={open} />
            <BurgerMenuContainer open={open}>
                <BurgerWord onClick={() => openPlusScroll(preview)}>Home</BurgerWord>
                <BurgerWord onClick={() => openPlusScroll(projects)}>Projects</BurgerWord>
                <BurgerWord onClick={() => openPlusScroll(skills)}>Skills</BurgerWord>
                <BurgerWord onClick={() => openPlusScroll(about)}>About</BurgerWord>
            </BurgerMenuContainer>
        </>
    )
}

export default BurgerMemu;