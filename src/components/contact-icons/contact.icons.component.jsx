import React from "react";

import { socialMedia } from '../../utils/social-media';
import { ContactIconsContainer } from "./contact.icons.style";

const ContactIcons = () => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <ContactIconsContainer>
            {
                socialMedia.map(link => {
                    return <img key={link.sm} alt={link.sm} src={link.icon} onClick={() => openInNewTab(link.url)} title={link.sm} />
                })
            }
        </ContactIconsContainer>
    );
}

export default ContactIcons;