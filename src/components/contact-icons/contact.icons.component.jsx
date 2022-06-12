import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaTelegram } from 'react-icons/fa'

import './contact.icons.style.scss';

const ContactIcons = () => {
    return(
        <div className="contact-icons-container">
            <FaLinkedin className="contact-icon"/>
            <FaTwitter className="contact-icon" />
            <FaInstagram className="contact-icon" />
            <FaTelegram className="contact-icon" />
        </div>
    );
}

export default ContactIcons;