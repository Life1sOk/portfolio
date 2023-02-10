import React from "react";

import { contactsIcons } from "../../utils/tools-icons";

import { ContactsContainer, SocialLine, IconWrap, BasicInfo } from './contacts.style';
import Button from "../button/button.component";
import Mailto from '../mailto/mailto.component';

export const locationBasics = {
    email: 'andreytsoy.webdev@gmail.com',
    number: '+77056187051',
    location: 'Kazakhstan, Almaty',
};

const Contacts = () => {
    const {email, number, location} = locationBasics;

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        <ContactsContainer>
            <Mailto email={email}>
                <Button/>
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
