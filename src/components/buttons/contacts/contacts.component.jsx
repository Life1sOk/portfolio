import React from "react";

import { BiMailSend } from 'react-icons/bi';

import { ButtonFront } from './contacts.style';

const ButtonContacts = ({openToggle}) => {

    return(
        <ButtonFront onClick={openToggle}>
            <BiMailSend/>
        </ButtonFront>
    )
};

export default ButtonContacts;