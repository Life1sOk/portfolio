import React from "react";

import { contactsIcons } from "../../utils/tools-icons";

import { ContactsContainer, SocialLine, IconWrap, BasicInfo } from './contacts.style';
import ButtonMail from "../buttons/mail/mail.component";
import Mailto from '../mailto/mailto.component';

export const locationBasics = {
    email: 'andreytsoy.webdev@gmail.com',
    number: '+77056187051',
    location: 'Kazakhstan, Almaty',
};

const Contacts = ({gap}) => {
    const {email, number, location} = locationBasics;

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        <ContactsContainer gap={gap}>
            <Mailto email={email}>
                <ButtonMail />
            </Mailto>
            {
                contactsIcons.map((med, index) => 
                    <SocialLine key={index} onClick={() => openInNewTab(med.url)}>
                        <IconWrap key={index} alt={med.sm} title={med.sm}>
                            {med.icon}  
                        </IconWrap>
                        <span>{med.sm}</span>
                    </SocialLine>
            )}
            <BasicInfo>
                <span>{email}</span>
                <span>{number}</span>
                <span>{location}</span>
            </BasicInfo>
        </ContactsContainer>
    )
};

export default Contacts;
