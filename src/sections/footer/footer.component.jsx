import React from 'react';
import { Link } from "react-scroll/modules";

import './footer.style.scss';
import ContactIcons from '../../components/contact-icons/contact.icons.component';
import Copyright from '../../components/copyright/copyright';
import ContactBase from '../../components/contact-base/contact-base.component';

const Footer = () => {

    return (
        <footer className='footer-container'>
            <section className="top-footer-container">
                <div className='top-footer-left'>Something</div>
                <ContactBase />
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