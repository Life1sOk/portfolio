import React from "react";

import { ContactBaseContainer, ContactLine, SendMeLocation } from './contact-base.style';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Button from '../button/button.component';
import Mailto from "../mailto/mailto.component";

const ContactBase = () => {
    return (
        <ContactBaseContainer>
            <SendMeLocation>
                <span>Base in Kazakhstan, Almaty</span>
                <ContactLine>
                    <AiOutlineMail className='contact-line-icon' />
                    <p>andreytsoy.webdev@gmail.com</p>
                </ContactLine>
                <ContactLine>
                    <FaPhoneAlt className='contact-line-icon' />
                    <p>(xxx) xxx xx xx</p>
                </ContactLine>
            </SendMeLocation>
            <Mailto email='andreytsoy.webdev@gmail.com'>
                <Button name={'Contact'} type={'type3'} />
            </Mailto>
        </ContactBaseContainer>
    )
}

export default ContactBase;