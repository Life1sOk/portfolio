import React from "react";

import './input.style.scss';

const Input = ({label, ...otherProps}) => {
    return(
        <div className="input-container">
            <label>{label}</label>
            <input {...otherProps} />
        </div>
    );
}

export default Input;