import React, { useState } from "react";

import { Outlet, Link } from "react-router-dom";

import Logo from '../../assets/andrey-high-resolution-logo-color-on-transparent-background.png';
import { NavigationContainer, NavbarMenu, NavbarWords, LogoStyle} from './navbar.style';
import Button from "../../components/button/button.component";
import Burger from "../../components/burger/burger";
import BurgerMemu from "../../components/burger-menu/burger-menu.component";
import Mailto from "../../components/mailto/mailto.component";

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
                <Link to='/portfolio'>
                    <LogoStyle src={Logo}/>
                </Link>
                <NavbarMenu>
                    <Link to='portfolio/projects'>
                        <NavbarWords>Projects</NavbarWords>
                    </Link>
                    <Link to='portfolio/skills'>
                        <NavbarWords>Skills</NavbarWords>
                    </Link>
                    <Link to='portfolio/about'>
                        <NavbarWords>About</NavbarWords>
                    </Link>
                </NavbarMenu>
                <Mailto email='andreytsoy.webdev@gmail.com'>
                    <Button name={'Contact'} type='mail'/>
                </Mailto>
            </NavigationContainer>
            <Outlet />
        </>
)};

export default Navbar;
