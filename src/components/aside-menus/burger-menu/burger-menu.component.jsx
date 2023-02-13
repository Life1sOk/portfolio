import React from "react";

import { BurgerWord } from "./burger-menu.styte";

import AsideWrapper from "../../aside-wrapper/aside-wrapper.component";
import Linker from "../../linker/linker.component";

const navLinks = [
    {title: 'Home', to: '/'},
    {title: 'Projects', to: '/projects'},
    {title: 'Skills', to: '/skills'},
    {title: 'About', to: '/about'},
];

const BurgerMemu = ({ open, openToggle }) => {
    return (
        <AsideWrapper open={open} openToggle={openToggle} side='left'>
                {
                    navLinks.map((link, index) => 
                        <Linker to={link.to} key={index}>
                            <BurgerWord>{link.title}</BurgerWord>
                        </Linker>
                )}
        </AsideWrapper>
    )
}

export default BurgerMemu;