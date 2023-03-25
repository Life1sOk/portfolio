import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import Logo from '../../assets/logo/logo.png';
import { NavigationContainer, LogoStyle, SideContainer, SmallSideContainer } from './index.style';
import ButtonWindow from "../../components/window/window.component";
import ButtonBurger from "../../ui/burger/burger";
import Navigation from "../../ui/navigation/navigation.component";
// import ContactsMenu from "../../components/aside-menus/contacts-menu/contacts-menu.component";
import Linker from "../../ui/linker/linker.component";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [contact, setContact] = useState(false);

    return (
        <>
            <NavigationContainer>
                <ButtonBurger open={open} openToggle={() => setOpen(!open)} />
                <Linker to='/' title='main'>
                    <LogoStyle src={Logo} alt='mylogo' />
                </Linker>
                <Navigation />
                <SideContainer>
                    <ButtonWindow />
                </SideContainer>
            </NavigationContainer>
            <Outlet />
        </>
    )
};

export default Navbar;
