import React from "react";

import ContactMe from "../../containers/contact-me/contact-me.container";
import Copyright from '../../ui/copyright/copyright.component';

import { ContactStyle, Info } from './contact.style';

const ContactSection = () => {
    return (
        <ContactStyle>
            <ContactMe />
            <Info>
                <p>Inspired by Brittany Chiang</p>
                <Copyright />
            </Info>
        </ContactStyle>
    )
};

export default ContactSection;