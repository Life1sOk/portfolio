import React, { useState } from "react";

import Logo from '../../assets/logo/logo.png';

import NavLinksContainer from "../../containers/nav-links/nav-links.container";
import Burger from "../../components/burger/burger";
import AsideNav from "../../containers/aside-nav/aside-nav.container";

import { NavigationWrapper, NavigationContainer, LogoStyle, BurgerWrapper, NavWrapper } from './index.style';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    // Checked 
    // NeedToDO: ref to the sections on click and aside the same;
    // Chenge index to highest
    const openNavHandler = () => setOpen(!open);

    return (
        <NavigationWrapper>
            <NavigationContainer>
                <LogoStyle src={Logo} alt='mylogo' />
                <BurgerWrapper>
                    <Burger open={open} openToggle={openNavHandler} />
                </BurgerWrapper>
                <NavWrapper>
                    <NavLinksContainer isAside={false} />
                </NavWrapper>
                <AsideNav isOpen={open} openHandler={openNavHandler}>
                    <NavLinksContainer isAside={true} />
                </AsideNav>
            </NavigationContainer>
        </NavigationWrapper>
    )
};

export default Navbar;
