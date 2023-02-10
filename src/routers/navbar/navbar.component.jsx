import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import Logo from '../../assets/andrey-high-resolution-logo-color-on-transparent-background.png';
import { NavigationContainer, NavbarMenu, LogoStyle, SideContainer} from './navbar.style';
import Button from "../../components/button-window/button-window.component";
import Burger from "../../components/burger/burger";
import BurgerMemu from "../../components/burger-menu/burger-menu.component";
import Contacts from "../../components/contacts/contacts.component";
import Linker from "../../components/linker/linker.component";
import LanguageToggle from "../../components/language-toggle/language-toggle.component";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <NavigationContainer>
                <BurgerMemu
                    open={open}
                    openToggle={() => setOpen(!open)}
                />
                <Burger open={open} openToggle={() => setOpen(!open)} />
                <SideContainer>
                    <Linker to='/'>
                        <LogoStyle src={Logo}/>
                    </Linker>
                </SideContainer>
                <NavbarMenu>
                    <Linker to='/projects' name='Projects' />
                    <Linker to='/skills' name='Skills' />
                    <Linker to='/about' name='About' />
                </NavbarMenu>
                <SideContainer>
                    <Button name='Contacts'>
                        <Contacts />
                    </Button>
                    <LanguageToggle />
                </SideContainer>
            </NavigationContainer>
            <Outlet />
        </>
)};

export default Navbar;
