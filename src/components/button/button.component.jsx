import React from "react";
import { FaGithub } from 'react-icons/fa'

import { Type1, Type2, TypeMail, Github } from './button.style';
import { socialMedia } from "../../utils/social-media";

const Button = ({ name, type }) => {
    return (
        <>
            {(type === 'type1') ?
                <Type1>{name}</Type1> : (type === 'type2') ?
                    <Type2>{name}</Type2> : (type === 'github') ?
                        <Github>{<FaGithub />}Github</Github> :
                        <TypeMail>{name}</TypeMail>
            }
        </>
    );
}

export default Button