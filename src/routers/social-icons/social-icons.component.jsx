import React from "react";

import { SocialIconsContainer } from './social-icons.style';

import ContactIcons from "../../components/contact-icons/contact.icons.component";

const SocialIcons = () => {
    return(
        <SocialIconsContainer>
            <ContactIcons />
        </SocialIconsContainer>
    )
};

export default  SocialIcons;