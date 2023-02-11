import React from "react";

import { BurgerMenuContainer, BurgerWord, BackToCloseMenu } from "./burger-menu.styte";

const BurgerMemu = ({ open, openToggle }) => {

    return (
        <>
            <BackToCloseMenu onClick={() => openToggle()} open={open} />
            <BurgerMenuContainer open={open}>
                <BurgerWord>Home</BurgerWord>
                <BurgerWord>Projects</BurgerWord>
                <BurgerWord>Skills</BurgerWord>
                <BurgerWord>About</BurgerWord>
            </BurgerMenuContainer>
        </>
    )
}

export default BurgerMemu;