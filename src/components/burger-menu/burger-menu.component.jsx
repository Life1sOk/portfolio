import React from "react";

import { BurgerMenuContainer, BurgerWord, BackToCloseMenu } from "./burger-menu.styte";

import Linker from "../linker/linker.component";

const navLinks = [
    {title: 'Home', to: '/'},
    {title: 'Projects', to: '/projects'},
    {title: 'Skills', to: '/skills'},
    {title: 'About', to: '/about'},
];

const BurgerMemu = ({ open, openToggle }) => {

    return (
        <>
            <BackToCloseMenu onClick={() => openToggle()} open={open} />
            <BurgerMenuContainer onClick={() => openToggle()} open={open}>
                {
                    navLinks.map((link, index) => 
                        <Linker to={link.to} key={index}>
                            <BurgerWord>{link.title}</BurgerWord>
                        </Linker>
                )}
            </BurgerMenuContainer>
        </>
    )
}

export default BurgerMemu;