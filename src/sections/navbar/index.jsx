import React, { useState } from "react";

import Logo from '../../assets/logo/logo.png';

import NavLinksContainer from "../../containers/nav-links/nav-links.container";
import Burger from "../../components/burger/burger";

import { NavigationWrapper, NavigationContainer, LogoStyle, BurgerWrapper, NavbarAsideWrapper, NavWrapper, BlackBox } from './index.style';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    // Checked 
    // NeedToDO: ref to the sections on click and aside the same;
    // Chenge index to highest
    return (
        <>
            <NavigationWrapper>
                <NavigationContainer>
                    <LogoStyle src={Logo} alt='mylogo' />
                    <BurgerWrapper>
                        <Burger open={open} openToggle={() => setOpen(!open)} />
                    </BurgerWrapper>
                    <NavWrapper>
                        <NavLinksContainer isAside={false} />
                    </NavWrapper>
                </NavigationContainer>
            </NavigationWrapper>
            {
                open ?
                    <NavbarAsideWrapper status={open}>
                        <NavLinksContainer isAside={true} />
                    </NavbarAsideWrapper>
                    : null
            }
            {open ? <BlackBox onClick={() => setOpen(!open)} /> : null}
        </>
    )
};

export default Navbar;
