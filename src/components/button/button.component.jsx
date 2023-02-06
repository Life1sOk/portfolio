import React from "react";
import { FaGithub } from 'react-icons/fa';

import { TypeMail } from './button.style';

const Button = ({ name, type, toggle, open, visit, handleClick }) => {

    return (
        <TypeMail>{name}</TypeMail>
    );
}

export default Button