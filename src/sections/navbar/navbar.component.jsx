import React, { useState } from "react";
import { AiOutlineMail } from 'react-icons/ai';

import { NavbarContainer, MyName, NavbarMenu } from './navbar.style';
import Button from "../../components/button/button.component";
import LinkToComponent from "../../components/link/link.component";
import Burger from "../../components/burger/burger";
import BurgerMemu from "../../components/burger-menu/burger-menu.component";

import Skills from '../skills/skills.component';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <BurgerMemu open={open} openToggle={() => setOpen(!open)} />
            <NavbarContainer name='nav'>
                <MyName>Andrey Tsoy</MyName>
                <Burger openToggle={() => setOpen(!open)} />
                <NavbarMenu>
                    <LinkToComponent to="projects" name='Projects' />
                    <LinkToComponent to='skills' name="Skills" />
                    <LinkToComponent to="about" name='About' />
                </NavbarMenu>
                <Button name={'Contact'} type={'point3'} />
                <Button name={<AiOutlineMail />} type={'point3'} />
            </NavbarContainer>
        </>

    )
}

export default Navbar;