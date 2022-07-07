import React from "react";
import { FaGithub } from 'react-icons/fa'

import { ResumeButton, Type2, TypeMail, Github } from './button.style';

const Button = ({ name, type, toggle }) => {
    return (
        <>
            {(type === 'resume') ?
                <ResumeButton onClick={toggle}>{name}</ResumeButton> : (type === 'type2') ?
                    <Type2>{name}</Type2> : (type === 'github') ?
                        <Github>{<FaGithub />}Github</Github> :
                        <TypeMail>{name}</TypeMail>
            }
        </>
    );
}

export default Button