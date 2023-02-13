import React from "react";

import { CgMail } from "react-icons/cg";

import { ButtonBack, ButtonFront } from './mail.style';

const ButtonMail = () => {
    return(
        <ButtonBack>
            <ButtonFront name='mail'>
                <CgMail />
                <span>Get in touch</span>
            </ButtonFront>
        </ButtonBack>
    )
};

export default ButtonMail;