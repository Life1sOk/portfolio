import React from "react";

import { ContactBaseContainer, ContactLine, SendMeLocation } from './contact-base.style';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Button from '../button/button.component';

const ContactBase = () => {
    return (
        <ContactBaseContainer>
            <SendMeLocation>
                <span>Base in Kazakhstan, Almaty</span>
                <ContactLine>
                    <AiOutlineMail className='contact-line-icon' />
                    <p>mr.lifeisok@gmail.com</p>
                </ContactLine>
                <ContactLine>
                    <FaPhoneAlt className='contact-line-icon' />
                    <p>(xxx) xxx xx xx</p>
                </ContactLine>
            </SendMeLocation>
            <Button name={'Contact'} type={'point3'} />
        </ContactBaseContainer>
    )
}

export default ContactBase;