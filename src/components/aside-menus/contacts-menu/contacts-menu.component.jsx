import React from "react";

import { SizeWrapper } from './contacts-menu.style.component';

import Contacts from "../../contacts/contacts.component";
import AsideWrapper from "../../aside-wrapper/aside-wrapper.component";

const ContactsMenu = ({ open, openToggle }) => {
    return(
        <AsideWrapper open={open} openToggle={openToggle}>
            <SizeWrapper>
                <Contacts gap='50px'/>
            </SizeWrapper>
        </AsideWrapper>
    )
};

export default ContactsMenu;