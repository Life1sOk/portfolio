import React from "react";

import { useLocation } from "react-router-dom";

import Linker from "../linker/linker.component";

import { NavbarMenu, LinkWords } from './navigation.style';

const links = [
    {title: 'Projects', to: '/projects'},
    {title: 'Skills', to: '/skills'},
    {title: 'About', to: '/about'},
];

const Navigation = () => {
    const { pathname } = useLocation(null);

    return(
        <NavbarMenu>
            {
                links.map(link => 
                    <Linker to={link.to} title={link.title}>
                        <LinkWords active={pathname === link.to}>{link.title}</LinkWords>
                    </Linker>
                )
            }
        </NavbarMenu>
    )
};

export default Navigation;