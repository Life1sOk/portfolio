import React, { useState } from "react";

import Logo from '../../assets/logo/logo.png';

import NavLinksContainer from "../../containers/nav-links/nav-links.container";
import ButtonBurger from "../../components/burger/burger";

import { NavigationWrapper, NavigationContainer, LogoStyle, BurgerWrapper, NavbarAsideWrapper, NavWrapper } from './index.style';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <NavigationWrapper>
            <NavigationContainer>
                <LogoStyle src={Logo} alt='mylogo' />
                <BurgerWrapper>
                    <ButtonBurger open={open} openToggle={() => setOpen(!open)} />
                </BurgerWrapper>
                <NavWrapper>
                    <NavLinksContainer isAside={false} />
                </NavWrapper>
                {
                    open ?
                        <NavbarAsideWrapper onClick={() => setOpen(!open)}>
                            <NavLinksContainer isAside={true} />
                        </NavbarAsideWrapper>
                        : null
                }
            </NavigationContainer>
        </NavigationWrapper>
    )
};

export default Navbar;
