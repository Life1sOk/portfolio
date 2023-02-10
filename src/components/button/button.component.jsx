import React from "react";

import { CgMail } from "react-icons/cg";

import { ButtonBack, ButtonFront } from './button.style';

const Button = () => {
    return(
        <ButtonBack>
            <ButtonFront>
                <CgMail />
                <span>Get in touch</span>
            </ButtonFront>
        </ButtonBack>
    )
};

export default Button;