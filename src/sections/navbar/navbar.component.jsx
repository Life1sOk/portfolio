import React, { useState } from "react";
import { AiOutlineMail } from 'react-icons/ai';

import { NavbarContainer, NavbarMenu } from './navbar.style';
import Button from "../../components/button/button.component";
import LinkToComponent from "../../components/link/link.component";
import Burger from "../../components/burger/burger";
import BurgerMemu from "../../components/burger-menu/burger-menu.component";
import Mailto from "../../components/mailto/mailto.component";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <BurgerMemu open={open} openToggle={() => setOpen(!open)} />
            <NavbarContainer name='nav'>
                <LinkToComponent typeLink='name' to='preview' name='Andrey Tsoy' offset={-74} />
                <Burger openToggle={() => setOpen(!open)} />
                <NavbarMenu>
                    <LinkToComponent to='projects' name='Projects' />
                    <LinkToComponent to='skills' name='Skills' />
                    <LinkToComponent to='about' name='About' />
                </NavbarMenu>
                <Mailto email='andreytsoy.webdev@gmail.com'>
                    <Button name={'Contact'} type={'type3'} />
                    <Button name={<AiOutlineMail />} type={'type3'} />
                </Mailto>
            </NavbarContainer>
        </>

    )
}

export default Navbar;