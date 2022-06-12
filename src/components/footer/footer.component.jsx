import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import './footer.style.scss';
import ContactIcons from '../contact-icons/contact.icons.component';

const Footer = () => {
 
    return(
        <div className="footer-container">
            <div className='send-me-location'>
                <p>Base in Kazakhstan, Almaty</p>
                <div className='contact-line'> 
                    <AiOutlineMail className='contact-line-icon'/>
                    <p>mr.lifeisok@gmail.com</p>
                </div>
                <div className='contact-line'>
                    <FaPhoneAlt className='contact-line-icon'/>
                    <p>(xxx) xxx xx xx</p>
                </div>
            </div>
            <ContactIcons />
        </div>
    );
}

export default Footer;