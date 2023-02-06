import React, { useState, useRef } from "react";
import { AiOutlineMail } from 'react-icons/ai';

import Logo from '../../assets/andrey-high-resolution-logo-color-on-transparent-background.png';
import { NavigationContainer, NavbarMenu, NavbarWords, LogoStyle} from './navbar.style';
import Button from "../../components/button/button.component";
import Burger from "../../components/burger/burger";
import BurgerMemu from "../../components/burger-menu/burger-menu.component";
import Mailto from "../../components/mailto/mailto.component";

const Navbar = ({ nav, preview, skills, projects, about }) => {
    const [open, setOpen] = useState(false);

    const navRef = useRef(null);

    return (
        <NavigationContainer ref={navRef}>
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
            {   navRef.current?.clientWidth < 1068 ? 
                <Button name={<AiOutlineMail />} /> 
                :
                <Button name={'Contact'} />
            }
        </Mailto>
    </NavigationContainer>
)};

export default Navbar;
