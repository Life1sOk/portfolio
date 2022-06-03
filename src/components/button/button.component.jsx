import React from "react";

import './button.style.scss';

const Button = ({name, type }) => {
    return(
        <button className={`${type}`}>{name}</button>
    );
}

export default Button