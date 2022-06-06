import React from "react";

import './input.style.scss';

const Input = ({label, ...otherProps}) => {
    return(
        <div>
            <label>{label}</label>
            <input {...otherProps} />
        </div>
    );
}

export default Input;