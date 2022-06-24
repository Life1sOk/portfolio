import React from 'react';
import { Link } from "react-scroll/modules";
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import './footer.style.scss';
import ContactIcons from '../../components/contact-icons/contact.icons.component';
import Copyright from '../../components/copyright/copyright';
import Button from '../../components/button/button.component';

const Footer = () => {
 
    return(
        <footer className='footer-container'>
            <section className="top-footer-container">
                <div className='top-footer-left'>Something</div>
                <div className='top-footer-right'>
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
                    <Button name={'Contact'} type={'point3'}/>
                </div>
            </section>
            <section className='bot-footer-container'>
                <div className='footer-nav'>
                    <Link to="navbar-container" smooth={true} spy={true} duration={700}>
                        <span className='footer-word'>Home</span>
                    </Link>
                    <Link to="projects-container" smooth={true} spy={true} duration={700}>
                        <span className='footer-word'>Projects</span>
                    </Link>
                    <Link to="skills-container" smooth={true} spy={true} duration={700}>
                        <span className='footer-word'>Skills</span>
                    </Link>
                </div>
                <div className='contact-icons-wrap'>
                    <ContactIcons />
                </div>
            </section>
            <Copyright /> 
        </footer>
    );
}

export default Footer;