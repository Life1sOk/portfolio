import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import './footer.style.scss';
import ContactIcons from '../../components/contact-icons/contact.icons.component';
import Copyright from '../../components/copyright/copyright';

const Footer = () => {
 
    return(
        <footer className='footer-container'>
            <div className="top-footer-container">
                <div className='send-me-location'>
                    <span>Base in Kazakhstan, Almaty</span>
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
                <div className='footer-nav'>
                    <p>Home</p>
                    <p>Projects</p>
                    <p>Skills</p>
                </div>
            </div>
            <Copyright />
        </footer>
    );
}

export default Footer;