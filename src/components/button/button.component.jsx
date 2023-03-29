import React from "react";

import { ButtonWrapper, ButtonStyle } from './button.style';

const Button = ({ label, clickHandler }) => {

    return (
        <ButtonWrapper onClick={clickHandler}>
            <ButtonStyle>{label}</ButtonStyle>
        </ButtonWrapper>
    )
};

export default Button;