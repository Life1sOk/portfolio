import React from 'react';
import { Link } from "react-scroll/modules";

import { FooterContainer, TopFooterContainer, BotFooterContainer, FooterNav, ContactIconWrap } from './footer.style';
import ContactIcons from '../../components/contact-icons/contact.icons.component';
import Copyright from '../../components/copyright/copyright';
import ContactBase from '../../components/contact-base/contact-base.component';

const Footer = () => {

    return (
        <FooterContainer>
            <TopFooterContainer>
                <div className='top-footer-left'>Something</div>
                <ContactBase />
            </TopFooterContainer>
            <BotFooterContainer>
                <FooterNav>
                    <Link to="navbar-container" smooth={true} spy={true} duration={700}>
                        <span className='footer-word'>Home</span>
                    </Link>
                    <Link to="projects-container" smooth={true} spy={true} duration={700}>
                        <span className='footer-word'>Projects</span>
                    </Link>
                    <Link to="skills-container" smooth={true} spy={true} duration={700}>
                        <span className='footer-word'>Skills</span>
                    </Link>
                </FooterNav>
                <ContactIconWrap>
                    <ContactIcons />
                </ContactIconWrap>
            </BotFooterContainer>
            <Copyright />
        </FooterContainer>
    );
}

export default Footer;