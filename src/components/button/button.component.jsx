import React from "react";

import { TypeMail, TypeProjects } from './button.style';

const Button = ({ name, type, toggle, open, visit, handleClick }) => {

    return (
        <>
            {type === 'mail' ? <TypeMail>{name}</TypeMail> : null}
            {type === 'projects' ? <TypeProjects>{name}</TypeProjects> : null}
        </>
    );
}

export default Button