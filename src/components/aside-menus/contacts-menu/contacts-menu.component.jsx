import React from "react";

import {} from './contacts-menu.style.component';

import Contacts from "../../contacts/contacts.component";
import AsideWrapper from "../../aside-wrapper/aside-wrapper.component";

const ContactsMenu = ({ open, openToggle }) => {
    return(
        <AsideWrapper open={open} openToggle={openToggle}>
            <Contacts gap='50px'/>
        </AsideWrapper>
    )
};

export default ContactsMenu;