import React, { useState } from "react";
import { AiOutlineMail } from 'react-icons/ai';

import { NavbarContainer, NavbarMenu, NavbarWords, MyName } from './navbar.style';
import Button from "../../components/button/button.component";
import Burger from "../../components/burger/burger";
import BurgerMemu from "../../components/burger-menu/burger-menu.component";
import Mailto from "../../components/mailto/mailto.component";

const Navbar = ({ nav, preview, skills, projects, about }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <BurgerMemu
                open={open}
                openToggle={() => setOpen(!open)}
                preview={preview}
                skills={skills}
                projects={projects}
                about={about}
                handleClick={handleClick}
            />
            <NavbarContainer name='nav' ref={nav}>
                <MyName onClick={() => handleClick(preview)}>Andrey Tsoy</MyName>
                <Burger open={open} openToggle={() => setOpen(!open)} />
                <NavbarMenu>
                    <NavbarWords onClick={() => handleClick(projects)}>Projects</NavbarWords>
                    <NavbarWords onClick={() => handleClick(skills)}>Skills</NavbarWords>
                    <NavbarWords onClick={() => handleClick(about)}>About</NavbarWords>
                </NavbarMenu>
                <Mailto email='andreytsoy.webdev@gmail.com'>
                    <Button name={'Contact'} type={'type3'} />
                    <Button name={<AiOutlineMail />} type={'type3'} />
                </Mailto>
            </NavbarContainer>
        </>

    )
}

const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
};

export default Navbar;
