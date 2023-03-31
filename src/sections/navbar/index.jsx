import React, { useState, useEffect, useRef } from "react";

import NavLinksContainer from "../../containers/nav-links/nav-links.container";
import Burger from "../../components/burger/burger";
import AsideNav from "../../containers/aside-nav/aside-nav.container";
import Logo from "../../components/logo/logo.component";

import {
  NavigationContainer,
  BurgerWrapper,
  NavWrapper,
  NavAsideWrapper,
  LogoWrapper,
} from "./index.style";

const Navbar = ({ scrollHandler }) => {
  const [open, setOpen] = useState(false);

  const navbarRef = useRef(null);

  const openNavHandler = () => setOpen(!open);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        navbarRef.current.style.transform = "translateY(0)";
      }

      if (prevScrollpos < currentScrollPos && currentScrollPos > 20) {
        navbarRef.current.style.transform = "translateY(-100%)";
      }

      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavigationContainer ref={navbarRef}>
      <NavWrapper>
        <AsideNav isOpen={open} openHandler={openNavHandler}>
          <NavLinksContainer
            isAside={true}
            scrollHandler={scrollHandler}
            openNavHandler={openNavHandler}
          />
        </AsideNav>
        <LogoWrapper onClick={() => scrollHandler("Preview")}>
          <Logo />
        </LogoWrapper>
        <BurgerWrapper>
          <Burger open={open} openToggle={openNavHandler} />
        </BurgerWrapper>
        <NavAsideWrapper>
          <NavLinksContainer isAside={false} scrollHandler={scrollHandler} />
        </NavAsideWrapper>
      </NavWrapper>
    </NavigationContainer>
  );
};

export default Navbar;
