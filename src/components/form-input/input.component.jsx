import React from "react";

import './input.style.scss';

const Input = ({name, type}) => {
    return(
        <div>
            <label>{name}</label>
            <input type={type} name={name} />
        </div>
    );
}

export default Input;