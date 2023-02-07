import React, { useState } from "react";

import Logo from '../../assets/andrey-high-resolution-logo-color-on-transparent-background.png';
import { NavigationContainer, NavbarMenu, NavbarWords, LogoStyle} from './navbar.style';
import Button from "../../components/button/button.component";
import Burger from "../../components/burger/burger";
import BurgerMemu from "../../components/burger-menu/burger-menu.component";
import Mailto from "../../components/mailto/mailto.component";

const Navbar = ({ nav, preview, skills, projects, about }) => {
    const [open, setOpen] = useState(false);

    return (
        <NavigationContainer>
        <BurgerMemu
            open={open}
            openToggle={() => setOpen(!open)}
            preview={preview}
            skills={skills}
            projects={projects}
            about={about}
        />
        <Burger open={open} openToggle={() => setOpen(!open)} />
        <LogoStyle src={Logo}/>
        <NavbarMenu>
            <NavbarWords>Projects</NavbarWords>
            <NavbarWords>Skills</NavbarWords>
            <NavbarWords>About</NavbarWords>
        </NavbarMenu>
        <Mailto email='andreytsoy.webdev@gmail.com'>
            <Button name={'Contact'} type='mail'/>
        </Mailto>
    </NavigationContainer>
)};

export default Navbar;
