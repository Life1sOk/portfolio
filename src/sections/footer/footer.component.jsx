import React from 'react';

import { FooterContainer, TopFooterContainer, BotFooterContainer, FooterNav, ContactIconWrap } from './footer.style';
import ContactIcons from '../../components/contact-icons/contact.icons.component';
import Copyright from '../../components/copyright/copyright';
import ContactBase from '../../components/contact-base/contact-base.component';
import LinkToComponent from '../../components/link/link.component';

const Footer = () => {

    return (
        <FooterContainer name='footer'>
            <TopFooterContainer>
                <div className='top-footer-left'>Something</div>
                <ContactBase />
            </TopFooterContainer>
            <BotFooterContainer>
                <FooterNav>
                    <LinkToComponent to='nav' name='Home' />
                    <LinkToComponent to='projects' name='Projects' />
                    <LinkToComponent to='skills' name='Skills' />
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