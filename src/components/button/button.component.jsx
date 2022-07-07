import React from "react";
import { FaGithub } from 'react-icons/fa'

import { ResumeButton, Type2, TypeMail, Github } from './button.style';

const Button = ({ name, type, toggle, open, visit }) => {
    return (
        <>
            {(type === 'resume') ? <ResumeButton open={open} onClick={toggle}>{name}</ResumeButton> :
                (type === 'type2') ? <Type2 onClick={visit}>{name}</Type2> :
                    (type === 'github') ? <Github onClick={visit}>{<FaGithub />}Github</Github> :
                        <TypeMail>{name}</TypeMail>
            }
        </>
    );
}

export default Button