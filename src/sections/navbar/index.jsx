import React, { useState } from "react";

import Logo from '../../assets/logo/logo.png';

import NavLinksContainer from "../../containers/nav-links/nav-links.container";
import Burger from "../../components/burger/burger";
import AsideNav from "../../containers/aside-nav/aside-nav.container";

import { NavigationContainer, LogoStyle, BurgerWrapper, NavWrapper } from './index.style';

// Checked 
// NeedToDO: ref to the sections on click and aside the same;
// Hide or show while scrolling
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const openNavHandler = () => setOpen(!open);

    return (
        <NavigationContainer>
            <AsideNav isOpen={open} openHandler={openNavHandler}>
                <NavLinksContainer isAside={true} />
            </AsideNav>
            <LogoStyle src={Logo} alt='mylogo' />
            <BurgerWrapper>
                <Burger open={open} openToggle={openNavHandler} />
            </BurgerWrapper>
            <NavWrapper>
                <NavLinksContainer isAside={false} />
            </NavWrapper>
        </NavigationContainer>
    )
};

export default Navbar;
